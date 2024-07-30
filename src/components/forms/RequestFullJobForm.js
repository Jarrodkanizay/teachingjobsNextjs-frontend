'use client';
import React, { watch, useEffect, useState } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
// import InputBlock from './InputBlock';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';
import Link from 'next/link';

const SubscribeForm = ({
  formName = 'Subscribe to Newsletter',
  buttonText = 'Subscribe',
  thankYouMessage = 'Thanks for subscribing to our newsletter!',
  formContext = 'single-input',
  formType = 'subscribe',
  placeholder = 'Enter email to Join mailing list',
  jobTitle = '',
  employer = '',
  jobId = '',
  jobURL = '',
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
      '00_Job_ID': jobId,
      '01_Organisation_Name': employer,
      '02_Job_Title': jobTitle,
      '03_Job_URL': jobURL,
    },
  });

  // const [fullUrl, setFullUrl] = useState('');

  // useEffect(() => {
  //   setFullUrl(window.location.href);
  // }, []);

  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/sendemail2', data);
    },
  });

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert("aaaa")
    console.log('data', data);
    data = {
      ...data,
      '99_url': `https://www.teachingjobs.com.au/jobs/myjob/${jobId}`,
    };
    console.log('data', data);
    mutation.mutate(data);
  };
  // Sample URL https://www.teachingjobs.com.au/jobs/myJob/83531?active=true
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
      <FormSubmissionMessage
        status="error"
        message={mutation.error.message}
        firstName={firstName}
      />
    );
  }
  if (mutation.isSuccess) {
    return (
      <>
        <h3 className="text-red-600">{thankYouMessage}</h3>
        {formType === 'job-request' ? (
          <div className="flex justify-between items-center">
            <p className="text-[#ff009d]">
              Now, do you know your academic ranking?
            </p>
            <Link
              className="btn bg-[#ff009d] hover:bg-pink-600 text-white mt-8 float-right mr-8"
              href="/the-academic-rankings/find-my-rank"
            >
              Check My Ranking
            </Link>
          </div>
        ) : null}
      </>
    );
  }
  //   if (maxWidth === undefined) maxWidth = '800';
  let rounded = '';
  if (formType === 'standard') {
    rounded = 'rounded-r-none';
  }
  return (
    <form className={`w-full`} onSubmit={handleSubmit(onSubmit)}>
      <div
        id="request-job-post"
        className={`w-full ${formType === 'standard' ? 'join' : ''}`}
      >
        {/* {errors[field] && (
          <span className="error">{errors[field].message}</span>
        )} */}

        {formType == 'share' && (
          <>
            <p className="underline-full">Friends Details</p>
            {/* First name */}
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={1}
              type="text"
              ID="first-name-input"
              field="01_To_First_Name"
              forceClass="mb-4"
              placeholder="First Name"
              autoComplete="given-name"
              required={true}
              hidden={false}
              colSpan={2}
            />
            {/* Last name */}
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={2}
              type="text"
              ID="last-name-input"
              field="02_To_Last_Name"
              forceClass="mb-4"
              placeholder="Last Name"
              autoComplete="family-name"
              hidden={false}
              required={true}
              colSpan={2}
            />
            <InputBlock2
              ID="to-email-input"
              name="00_To_Email"
              register={register}
              errors={errors}
              tabIndex={3}
              type="email"
              field="00_To_Email"
              forceClass=""
              placeholder={`To: (Enter "to email" to share job)`}
              autoComplete="email"
              required={true}
              inputClass={`${rounded} mb-4`}
              colSpan={2}
            />
            <p className="underline-full mt-8">Your Details</p>
          </>
        )}
        {formContext === 'multi-input' && (
          <>
            {/* First name */}
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={4}
              type="text"
              ID="first-name-input"
              field="01_First_Name"
              forceClass="mb-4"
              placeholder="First Name"
              autoComplete="given-name"
              required={true}
              hidden={false}
              colSpan={2}
            />
            {/* Last name */}
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={5}
              type="text"
              ID="last-name-input"
              field="02_Last_Name"
              forceClass="mb-4"
              placeholder="Last Name"
              autoComplete="family-name"
              hidden={false}
              required={true}
              colSpan={2}
            />

          </>
        )}
        <div className="flex items-center">
          <InputBlock2
            ID="email-input"
            name="01_Email"
            register={register}
            errors={errors}
            tabIndex={6}
            type="email"
            field="01_Email"
            forceClass=""
            placeholder={placeholder}
            autoComplete="email"
            required={true}
            inputClass={`${rounded}`}
            colSpan={2}
          />

          <button
            type="submit"
            className={`btn hidden md:block ml-6 text-white ${formType === 'standard'
              ? 'bg-aj join-item rounded-r-full'
              : 'btn-aj'
              }`}
          >
            {buttonText}
          </button>
        </div>
        <button
          type="submit"
          className={`btn w-full md:hidden block w-full text-white ${formType === 'standard'
            ? 'bg-aj join-item rounded-r-full  '
            : 'btn-aj mt-6'
            }`}
        >
          {buttonText}
        </button>
        {formType === 'standard' && (
          <div style={{ display: 'none' }}>
            <InputBlock2
              register={register}
              errors={errors}
              name="00_Job_ID"
              label="Job ID"
              type="text"
              field="00_Job_ID"
              forceClass="text-black"
              placeholder="Job ID"
              hidden={true}
              tabIndex={100}
            />
            <InputBlock2
              register={register}
              name="01_Organisation_Name"
              errors={errors}
              label="Organization Posting this Job (i.e. Agency or University)"
              type="text"
              field="01_Organisation_Name"
              forceClass="text-black"
              placeholder="Organization Name"
              autoComplete="organization"
              hidden={true}
              tabIndex={101}
            />
            <InputBlock2
              register={register}
              name="02_Job_Title"
              errors={errors}
              label="Job Post Title"
              type="text"
              field="02_Job_Title"
              forceClass="text-black"
              placeholder="Job Title"
              hidden={true}
              tabIndex={102}
            />
            <InputBlock2
              register={register}
              name="03_Job_URL"
              errors={errors}
              label="Job Post URL"
              type="text"
              field="03_Job_URL"
              forceClass="text-black"
              placeholder="Job URL"
              hidden={true}
              tabIndex={103}
            />
            <div className="text-right">
              <button
                type="submit"
                className={`btn text-white ${formType === 'standard'
                  ? 'bg-aj join-item rounded-r-full'
                  : 'btn-aj mt-8'
                  }`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        )}

      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/* </div> */}
    </form>
  );
};
export default SubscribeForm;
