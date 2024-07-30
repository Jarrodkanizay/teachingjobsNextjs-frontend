const SearchListResultsLoader = () => {
  const loaders = new Array(10).fill(null);

  return (
    <>
      {loaders.map((_, index) => (
        <div
          key={index}
          role="status"
          className="container mt-8 border-2 p-4 rounded-xl"
        >
          <div className="flex items-center mb-2">
            <div className="w-20 h-20 mr-4">
              <div className="skeleton w-[100px] h-[100px]"></div>
            </div>
            <div className="skeleton flex-1 h-[26px] ml-6"></div>
          </div>
          <div className="flex justify-between items-center mt-[32px]">
            <div className="">
              <div className="skeleton mb-1 h-[20px] w-[220px]"></div>
              <div className="skeleton h-[20px] w-[150px]"></div>
            </div>
            <div className="skeleton applications-close w-[110px] h-[40px] px-2 mt-1 ml-2"></div>
          </div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </>
  );
};

export default SearchListResultsLoader;
