import JobCategoryLinks from '@/components/links/JobCategoryLinks';
import JobLocationTypeLinks from '@/components/links/JobLocationTypeLinks';

type Props = {
  nativeTrue?: boolean;
};

const JobCategoryAndLocationLinks = ({ nativeTrue }: Props) => {
  return (
    <>
      {/* <h2 className="underline-full mb-4">Done</h2> */}
      {/* <JobCategoryLinks nativeOn={nativeTrue} /> */}
      <JobLocationTypeLinks />
    </>
  );
};

export default JobCategoryAndLocationLinks;
