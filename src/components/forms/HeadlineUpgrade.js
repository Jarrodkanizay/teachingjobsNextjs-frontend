'use client';
import React, { useState, useEffect } from 'react';
import InputBlock from '@/components/forms/InputBlock';
import SelectBlock2 from '@/components/forms/SelectBlock2';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { useRouter } from 'next/navigation';
import { jobElephantContacts } from '@/data/jobElephantContacts';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { countries } from '@/utils/data';
import HeadlineLinks from '@/components/HeadlineLinks';

const PostJobForm = ({
  clientType,
  partner,
  jobTitle,
  employer,
  jobId,
  region,
}) => {
  let lockFields = false;
  let content;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      '00_Job_ID': jobId,
      '01_Organisation_Name': employer,
      '02_Job_Title': jobTitle,
      country: 'Australia',
      // Add other form fields here...
    },
  });
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await BaseApi.post('/sendemail', data);
    },
  });
  const onSubmit = async (data) => {
    // e.preventDefault();
    // alert()
    console.log('data', data);
    mutation.mutate({
      ...data,
      '00_formSource': 'Activate Headline Job - Job Post Page',
    });
  };
  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">
              'Sending Jobs ...'
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>;
  }
  if (mutation.isSuccess) {
    if (getValues('country') == 'Australia') {
      router.push('https://buy.stripe.com/dR6eWA6PuaaA7VC6ov');
    } else {
      router.push('https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot');
    }
  } else {
    content = (
      <>

        {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16"> */}
        <div>
        <HeadlineLinks />
          <h2
            id="activate-quick-post"
            className={`text-xl font-bold mb-8 mt-8 underline-full`}
          >
            Activate my ‘Quick Post’ now…
          </h2>
          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 justify-start">
              <div className={`p-4 border border-sky-200 bg-sky-50`}>
                <div className="grid w-full items-center gap-1.5 mb-8">
                  <InputBlock
                    register={register}
                    errors={errors}
                    label="Job ID"
                    type="text"
                    field="00_Job_ID"
                    forceClass="text-black"
                    placeholder="Job ID"
                    hidden={true}
                    showLabel={true}
                  />
                  <hr />
                  <p style={{ margin: '0', fontWeight: 'bold' }}>{jobId}</p>
                </div>
                <div className="grid w-full items-center gap-1.5 mb-8">
                  <InputBlock
                    register={register}
                    errors={errors}
                    label="Organization Posting this Job (i.e. Agency or University)"
                    type="text"
                    field="01_Organisation_Name"
                    forceClass="text-black"
                    placeholder="Organization Name"
                    autoComplete="organization"
                    hidden={true}
                    showLabel={true}
                  />
                  <hr />
                  <p style={{ margin: '0', fontWeight: 'bold' }}>{employer}</p>
                </div>
                <div className="grid w-full items-center gap-1.5 mt-4">
                  <InputBlock
                    register={register}
                    errors={errors}
                    label="Job Post Title"
                    type="text"
                    field="02_Job_Title"
                    forceClass="text-black"
                    placeholder="Job Title"
                    hidden={true}
                    showLabel={true}
                  />
                  <hr />
                  <p style={{ margin: '0', fontWeight: 'bold' }}>{jobTitle}</p>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="First Name"
                  type="text"
                  field="04_First_Name"
                  forceClass=" py-3 text-black"
                  placeholder="First Name"
                  autoComplete="given-name"
                  required={true}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Last Name"
                  type="text"
                  field="05_Last_Name"
                  forceClass=" py-3 text-black"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required={true}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Position / Role"
                  type="text"
                  field="06_Position"
                  forceClass=" py-3 text-black"
                  placeholder="Position / Role"
                  autoComplete="family-name"
                  required={true}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Email"
                  type="email"
                  field="07_Email"
                  forceClass=" py-3 text-black"
                  placeholder="email"
                  autoComplete="email"
                  required={true}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Phone"
                  type="tel"
                  field="08_Phone"
                  forceClass=" py-3 text-black"
                  placeholder="Phone"
                  autoComplete="phone"
                />
              </div>

              <SelectBlock2
                list={countries}
                field="country"
                label="Country"
                register={register}
                errors={errors}
                forceClass="join-item rounded-r-none min-h-[34px]"
              />
              <label className="form-control mt-6">
                <span className="label-text text-xs pb-1">
                  Notes or Special Instructions
                </span>
                <textarea
                  className="textarea textarea-bordered h-32 focus:outline-none focus:border-orange-500"
                  id="notes"
                  placeholder="Type your message here."
                  {...register('03_Notes')}
                ></textarea>
              </label>
              {/* <QuillEditor
            value={content}
            onChange={(value) => {
              setValue("job_description", value)
            }}
            className="w-full h-[70%] mt-10 bg-white" /> */}
              <button className="btn btn-accent mt-4">Submit & PayNow</button>
            </div>
          </form>
        </div>
        <div className={`mt-8`}>
          <h3 className={`text-aj mb-4`}>
            Let's do this... <br /> We have the full job ready to go, and this
            form takes ONLY 60 SECONDS!!!
          </h3>
          <div className="prose text-gray-500">
            <p className="mt-4">
              Fun Fact: The average time to Post a Job and fill out a form on
              the major Job Seeking platforms is 9 min or more. At
              TeachingJobs.com.au, we make your life easier and save you time …
            </p>
            <ul>
              <li>Reducing Job Posting times to seconds rather than minutes</li>
              <li>
                We do the heavy lifting for you (having your job already loaded)
              </li>
              <li>Teaching Jobs QUICK POSTS = ^ VIEWS = + APPLICANTS</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
  return <>{content}</>;
};
export default PostJobForm;
