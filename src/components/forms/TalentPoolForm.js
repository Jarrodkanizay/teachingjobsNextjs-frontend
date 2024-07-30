'use client';
import React, { useState, useEffect, watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';

const TalentPoolForm = ({
  maxWidth,
  formName = 'Talent Pool Form',
  detailsHeading = 'Your Details',
  workTypeHeading = 'What are you interested in?',
  academicDetailsHeading = 'Academic Details',
  academicEmploymentHeading = '',
  academicAwardsHeading = '',
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
        message="We are excited to welcome you to our Talent Pool and the benefits it will bring to you and your career. We will be in touch with you shortly."
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
          forceClass=""
          placeholder=" Last Name"
          autoComplete="family-name"
          required={true}
        />

        {/* Academic Title */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={3}
          type="text"
          ID="name-input"
          field="03_Academic_Title"
          forceClass=""
          placeholder="Academic Title (Role or Position)"
          required={true}
        />

        {/* phone */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={4}
          type="tel"
          ID="phone-input"
          field="04_phone"
          forceClass=""
          autoComplete="tel"
          placeholder="Phone Number"
          required={false}
        />
        {/* Email */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={5}
          type="email"
          ID="email-input"
          field="05_Email"
          forceClass=""
          placeholder="Email"
          autoComplete="email"
          required={true}
          colSpan={2}
        />
      </div>
      <h2 className="underline-full mt-10 mb-6">{workTypeHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seeking Opportunities */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(' 06_Collaborations_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Collaborations</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={7}
              type="checkbox"
              {...register(' 07_Keynote_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Keynote Speaking</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={8}
              type="checkbox"
              {...register(' 08_Media_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Media Visibility</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={9}
              type="checkbox"
              {...register(' 09_Career_Job_Opportunities_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">
              Career Progression (Open to Job Offers)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={10}
              type="checkbox"
              {...register(' 10_Seek_IP_Investors_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Seek IP Investors</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={11}
              type="checkbox"
              {...register(' 11_Partner_with_Industry_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">
              Partner with Industry
            </span>
          </label>
        </div>
      </div>
      {/* Academic Details Section */}
      <h2 className="underline-full mt-10 mb-6">{academicDetailsHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Institution */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={12}
          type="text"
          ID="institution-input"
          field="12_Institution"
          forceClass=""
          placeholder="Institution/University (Current, Last or Attended)"
          required={true}
          colSpan={2}
        />

        {/* Department/Faculty */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={13}
          type="text"
          ID="department-faculty-input"
          field="13_Department_Faculty"
          forceClass=""
          placeholder="Department/Faculty"
          required={true}
        />

        {/* Specialty */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={14}
          type="text"
          ID="specialty-input"
          field="14_Specialty"
          forceClass=""
          placeholder="Specialty"
          required={true}
        />

        {/* Location */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={15}
          type="text"
          ID="location-input"
          field="15_Institution_Location"
          forceClass=""
          placeholder="Institution Location"
          required={true}
        />

        <select
          tabIndex={16}
          {...register('16_Country')}
          id="country-select"
          field="16_Country"
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
      </div>
      {academicEmploymentHeading !== '' && (
        <>
          <h2 className="underline-full mt-10 mb-6">
            {academicEmploymentHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Institution */}

            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={13}
              type="text"
              ID="institution-previous-A"
              field="13_Institution-previous-A"
              name="13_Institution-previous-A"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={14}
              type="text"
              ID="institution-previous-B"
              field="14_Institution-previous-B"
              name="14_Institution-previous-B"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={15}
              type="text"
              ID="institution-previous-C"
              field="15_Institution-previous-C"
              name="15_Institution-previous-C"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
          </div>
        </>
      )}
      {academicAwardsHeading !== '' && (
        <>
          <h2 className="underline-full mt-10 mb-6">{academicAwardsHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Institution */}

            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={12}
              type="text"
              ID="award-achievement-input-A"
              field="16_award-achievement-A"
              name="16_award-achievement-A"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={12}
              type="text"
              ID="award-achievement-input-B"
              field="17_award-achievement-B"
              name="17_award-achievement-B"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={12}
              type="text"
              ID="award-achievement-input-C"
              field="18_award-achievement-C"
              name="18_award-achievement-C"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={12}
              type="text"
              ID="award-achievement-input-D"
              field="19_award-achievement-D"
              name="19_award-achievement-D"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
          </div>
        </>
      )}
      {/* Profile */}
      <div className="col-span-2 mt-6">
        <textarea
          tabIndex={17}
          id="20_Talent_Pool_input"
          field="20_Talent_Pool_input"
          name="20_Talent_Pool_input"
          className="w-full textarea textarea-bordered focus:outline-none focus:border-orange-500"
          placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
          {...register('20_Talent_Pool_input')}
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
        <button tabIndex={30} type="submit" className="btn btn-aj">
          Join Talent Pool
        </button>
      </div>
    </form>
  );
};
export default TalentPoolForm;
