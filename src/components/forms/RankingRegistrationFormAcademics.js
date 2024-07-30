'use client';
import React, { useState, useEffect, watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';
import { facultyDepartments } from '@/data/facultyDepartments';

const RankingRegistrationFormAcademics = ({
  maxWidth,
  formName = 'Talent Pool Form',
  detailsHeading = 'Your Details',
  academicDetailsHeading = 'Current Academic Details',
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      '00_Form_Name': formName,
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/sendemail', data);
    },
  });

  const firstName = watch('01_First_Name');

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert()
    console.log('data', data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const formData = JSON.parse(localStorage.getItem('formRankData'));

      if (formData) {
        for (const [key, value] of Object.entries(formData)) {
          setValue(key, value);
        }
      }
    }
  }, [setValue]);

  // useEffect(() => {
  //   setValue('00_Form_Name', 'Talent Pool Form Submission');
  // }, [setValue]);

  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">
              'Sending Email ...'
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return (
      <FormSubmissionMessage
        status="error"
        message={mutation.error.message}
        firstName={firstName}
      />
    );
  }
  if (mutation.isSuccess) {
    return (
      <FormSubmissionMessage
        status="success"
        message="We are excited to welcome you to The Academic Rankings. The benefits to your career, network and status are far reaching. We will be in touch with you shortly."
        firstName={firstName}
      />
    );
  }
  if (maxWidth === undefined) maxWidth = '800';
  return (
    <form
      className={`talent-pool mx-auto px-7 pt-4 pb-6 border-[1px] border-slate-500 bg-slate-50 rounded-2xl w-full lg:max-w-[${maxWidth}px] lg:min-w-[640px]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="underline-full mb-6">{detailsHeading}</h2>
      <InputBlock2
        register={register}
        errors={errors}
        type="text"
        ID="talent-pool-form-submission"
        name="00_Form_Name"
        field="00_Form_Name"
        placeholder="Talent Pool Form Submission"
        hidden={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First name */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={1}
          type="text"
          ID="first-name-input"
          field="01_First_Name"
          name="01_First_Name"
          forceClass=""
          placeholder="First Name"
          autoComplete="given-name"
          required={true}
        />
        {/* Last name */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={2}
          type="text"
          ID="last-name-input"
          field="02_Last_Name"
          name="02_Last_Name"
          forceClass=""
          placeholder=" Last Name"
          autoComplete="family-name"
          required={true}
        />

        {/* Email */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={3}
          type="email"
          ID="email-input"
          field="03_Email"
          name="03_Email"
          forceClass=""
          placeholder="Email"
          autoComplete="email"
          required={true}
          colSpan={2}
        />

        {/* phone */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={4}
          type="tel"
          ID="phone-input"
          field="04_phone"
          name="04_phone"
          forceClass=""
          autoComplete="tel"
          placeholder="Phone Number"
          required={false}
        />

        {/* phone */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={5}
          type="tel"
          ID="LinkedIn-input"
          field="05_LinkedIn"
          name="05_LinkedIn"
          forceClass=""
          autoComplete="tel"
          placeholder="LinkedIn"
          required={false}
        />
      </div>
      {/* Academic Details Section */}
      <h2 className="underline-full mt-10 mb-6">{academicDetailsHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex gap-6 col-span-2">
          <select
            tabIndex={20}
            {...register('20_Years_in_Academia')}
            id="years-in-academia-select"
            field="20_Years_in_Academia"
            name="20_Years_in_Academia"
            className="select select-bordered w-full focus:outline-none focus:border-orange-500 max-w-[94px]"
            required={true}
          >
            <option value="" disabled selected>
              Years in Academia...
            </option>
            {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* Degrees - Top Education Levels */}
          <InputBlock2
            register={register}
            errors={errors}
            tabIndex={4}
            type="text"
            ID="degrees-input"
            field="04_Degrees"
            name="04_Degrees"
            forceClass="grow"
            placeholder="Top Education Levels: i.e. Phd, Master, etc. (coma separated)"
            required={false}
          />
        </div>

        {/* Papers & Publications */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={20}
          type="text"
          ID="papers_publications-input"
          field="20_Papers_Publications"
          name="20_Papers"
          forceClass=""
          placeholder="Papers & Publications (coma separated)"
          required={false}
          colSpan={2}
        />
        {/* Institution */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={21}
          type="text"
          ID="institution-input"
          field="05_Current_Employer"
          name="05_Current_Employer"
          forceClass=""
          placeholder="Institution/University (Current or most recent)"
          required={true}
        />

        {/* Academic Title */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={22}
          type="text"
          ID="Academic_Title-input"
          field="22_Academic_Title"
          name="22_Academic_Title"
          forceClass=""
          placeholder="Academic Title (Role or Position)"
          required={true}
        />

        {/* Location */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={23}
          type="text"
          ID="location-input"
          field="23_Institution_Location"
          name="23_Institution_Location"
          forceClass=""
          placeholder="Institution Location"
          required={true}
        />

        <select
          tabIndex={24}
          {...register('24_Country')}
          id="country-select"
          field="24_Country"
          name="24_Country"
          className="select select-bordered w-full focus:outline-none focus:border-orange-500"
          required={true}
        >
          <option value="" disabled selected>
            Select a country...
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>

        {/* Department/Faculty */}
        <select
          tabIndex={25}
          {...register('25_Faculty-Department')}
          id="Faculty-Department-select"
          field="25_Faculty-Department"
          name="25_Faculty-Department"
          className="select select-bordered w-full focus:outline-none focus:border-orange-500"
          required={true}
        >
          <option value="" disabled selected>
            Faculty Department...
          </option>
          {facultyDepartments.map((department, index) => (
            <optgroup
              key={index}
              label={department.label}
              style={{ color: 'black' }}
            >
              {department.options.map((option, subIndex) => (
                <option
                  key={subIndex}
                  value={option.toLowerCase().replace(/\s+/g, '_')}
                >
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        {/* <InputBlock2
          register={register}
          errors={errors}
          tabIndex={25}
          type="text"
          ID="department-faculty-input"
          field="25_Department_Faculty"
          name="25_Department_Faculty"
          forceClass=""
          placeholder="Department/Faculty"
          required={true}
        /> */}

        {/* Specialty */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={26}
          type="text"
          ID="specialty-input"
          field="26_Specialty"
          name="26_Specialty"
          forceClass=""
          placeholder="Specialty"
          required={false}
        />

        {/* Split */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={27}
          type="text"
          ID="lecturer-research-split-input"
          field="27_lecturer-research-split"
          name="27_lecturer-research-split"
          forceClass=""
          placeholder="Lecturer/Teaching vs Research/Management Split (%) e.g. 50/50"
          required={false}
          colSpan={2}
        />
        {/* Notable Awards */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={28}
          type="text"
          ID="notable-awards-input"
          field="28_notable-awards"
          name="28_notable-awards"
          forceClass=""
          placeholder="Notable Awards (coma separated)"
          required={false}
          colSpan={2}
        />
      </div>
      {/* Profile */}
      <div className="col-span-2 mt-6">
        <textarea
          tabIndex={100}
          id="profile-input"
          field="100_Profile"
          className="w-full textarea textarea-bordered focus:outline-none focus:border-orange-500"
          placeholder="Please write a brief profile noting your key skills, experience, and achievements."
        />
      </div>
      {/* End form inputs */}
      <div className="col-span-1">
        <div className="relative">
          <p>
            Any field with an asterisk (<span className="asterisk">*</span>) is
            a required field!
          </p>
        </div>
      </div>
      <div className="text-right mt-6">
        <button tabIndex={200} type="submit" className="btn btn-aj">
          Get My Ranking
        </button>
      </div>
    </form>
  );
};
export default RankingRegistrationFormAcademics;
