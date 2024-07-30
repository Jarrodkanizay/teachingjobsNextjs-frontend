type params = { location: string; description: string };

const Locationheader = ({ location, description }: params) => {
  return (
    <div className="bg-slate-200 full-width">
    <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
      <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">{location}</h1>
      <p className="px-7 mb-4 mt-1">{description}</p>
  </div></div>
  );
};

export default Locationheader;