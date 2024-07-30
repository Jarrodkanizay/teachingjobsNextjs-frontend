import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import Image from 'next/image';

type ModalProps = {
  name: string;
  heading: string;
  placeholder: string;
  imagePath?: string;
  buttonText?: string;
  thankYouMessage?: string;
  formContext?: string;
  formType?: string;
};

const ModalForJobPost = ({
  name,
  heading,
  placeholder = 'Enter email to Join Talent Pool',
  formContext = 'single-input',
  imagePath = '/love-messages/i-love-this-job.svg',
  buttonText = 'Join Now',
  thankYouMessage = 'Thanks for joining our Academic Talent Pool!',
  formType = 'subscribe',
}: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h2 className="text-lg font-bold">{heading}</h2>
          <p className="py-4">
            <RequestFullJobForm
              formName={`${heading} - From Job Post`}
              buttonText={buttonText}
              thankYouMessage={thankYouMessage}
              formContext={formContext}
              formType={formType}
              placeholder={placeholder}
            />
          </p>
          <div className="flex justify-center space-x-4">
            <Image
              src="/icons/heart.svg"
              width={90}
              height={90}
              alt="Teaching Jobs Heart"
            />
            <Image
              src={imagePath}
              width={170}
              height={60}
              alt="Teaching Love Message"
            />
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={name}>
          Close
        </label>
      </div>
    </>
  );
};

export default ModalForJobPost;
