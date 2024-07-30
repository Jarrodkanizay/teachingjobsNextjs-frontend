'use client';
import React, { watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import SearchSubmissionMessage from './SearchSubmissionMessage';
// import { industryTypes } from '@/data/IndustryTypes';

const RankingSearchForm = ({ maxWidth }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      '00_Form_Name': 'Search Rank Form Submission',
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/sendemail', data);
    },
  });

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert()
    console.log('data', data);
    mutation.mutate(data);

    if (typeof window !== 'undefined') {
      localStorage.setItem('formRankData', JSON.stringify(data));
    }
  };

  const firstName = watch('01_First_Name');

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
      <SearchSubmissionMessage
        status="error"
        message={mutation.error.message}
        firstName={firstName}
      />
    );
  }
  if (mutation.isSuccess) {
    return (
      <SearchSubmissionMessage
        status="success"
        message="We appreciate you reaching out, a team member will be in touch with you shortly."
        firstName={firstName}
      />
    );
  }
  if (maxWidth === undefined) maxWidth = '800';
  return (
    <form
      className={`talent-pool mx-auto px-7 pt-4 mt-8 pb-6 border-[1px] border-slate-500 bg-slate-50 rounded-2xl w-full lg:max-w-[${maxWidth}px] lg:min-w-[640px]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="underline-full mb-6 text-[#3b5683]">Find your Academic Rank</h1>
      <p>
        In order to find your academic ranking we need a few personal details.
        The more information you provide the more accurate we can find your
        ranking.
      </p>

      <InputBlock2
        register={register}
        errors={errors}
        type="text"
        ID="rank_search_form"
        field="00_Form_Name"
        placeholder="Rank Search Form"
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

        {/* Email */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={3}
          type="email"
          ID="email-input"
          field="03_Email"
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
          forceClass=""
          autoComplete="tel"
          placeholder="Phone Number"
          required={false}
        />
        {/* Current Employer */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={4}
          type="text"
          ID="current_employer"
          field="05_Current_Employer"
          forceClass=""
          autoComplete="organization"
          placeholder="Current Employer"
          required={false}
        />
        {/* About You */}
        {/* <select
          tabIndex={5}
          {...register('16_Country')}
          ID="about_you-select"
          field="05_About_You"
          className="select select-bordered w-full col-span-2 focus:outline-none focus:border-orange-500"
          required={true}
        >
          <option value="" disabled selected>
            Tell us about you...
          </option>
          {industryTypes.map((industryType, index) => (
            <option key={index} value={industryType}>
              {industryType}
            </option>
          ))}
        </select> */}
      </div>
      {/* Academic Details Section */}
      <h2 className="underline-full mt-10 mb-6">
        Institutions you have Worked at?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={6}
          type="text"
          ID="institution_01"
          field="institution_01"
          forceClass=""
          placeholder="Institution Name"
          required={false}
          colSpan={2}
        />
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={7}
          type="text"
          ID="institution_02"
          field="institution_02"
          forceClass=""
          placeholder="Institution Name"
          required={false}
          colSpan={2}
        />
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={8}
          type="text"
          ID="institution_03"
          field="institution_03"
          forceClass=""
          placeholder="Institution Name"
          required={false}
          colSpan={2}
        />
      </div>
      {/* End form inputs */}
      <p className="mt-1">
        Any field with an asterisk (<span className="asterisk">*</span>) is a
        required field!
      </p>
      <div className="text-right mt-6">
        <button tabIndex={30} type="submit" className="btn btn-aj">
          Find My Academic Rank
        </button>
      </div>
    </form>
  );
};
export default RankingSearchForm;
