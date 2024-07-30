import Link from 'next/link';
import SubscribeForm from './SubscribeForm';

type FormSubmissionMessageProps = {
  status?: string;
  firstName?: string;
  message?: string;
  forceClass?: string;
  jobTitle?: string;
  employer?: string;
  jobId?: string;
  jobURL?: string;
};

const FormSubmissionMessage = ({
  status = '',
  firstName = '',
  message = '',
  forceClass = '',
  jobTitle = '',
  employer = '',
  jobId = '',
  jobURL = '',
}: FormSubmissionMessageProps) => {
  return (
    <>
      {status === 'success' && (
        <div
          className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}
        >
          <h3 className="text-green-500 mb-4">
            Thanks for taking the time to complete our form
            {firstName === '' ? '' : ` ${firstName}`}!
          </h3>
          <p>{message}</p>
          <p>
            Your submission is really important to us and we will action your
            request as quickly as possible.
          </p>
          {/* <CTAs /> */}
          <SubscribeForm
            jobTitle={jobTitle}
            employer={employer}
            jobId={jobId}
            jobURL={jobURL}
          />
        </div>
      )}
      {status === 'error' && (
        <div
          className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}
        >
          <h3>Sorry but something went wrong</h3>
          <p>
            Please try again or <Link href="contact-us">contact us</Link>{' '}
            directly.
          </p>
          <p>Error: {message}</p>
          {/* <CTAs /> */}
        </div>
      )}
    </>
  );
};

export default FormSubmissionMessage;

// const CTAs: React.FC = () => {
//   return (
//     <div>
//       <p>New features coming soon</p>
//     </div>
//   );
// };
