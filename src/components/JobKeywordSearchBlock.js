'use client';
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { useStore } from '@/lib/store/store';
const UniSearchBlock = ({
  field,
  country,
  label,
  customKey,
  value1,
  onSelect,
  onInputChange,
  forceClass,
}) => {

  const countryRef = useRef("");
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(value1 || "");
  const {
    isPending: isPending,
    isError: isError,
    isSuccess: isSuccess,
    error: error,
    data: suggestions = [],
    isFetching: isFetching,
    isPlaceholderData: isPlaceholderData,
  } = useQuery({
    queryKey: ['filter', { query }],
    queryFn: async () => {
      const response = await BaseApi.post('/getJobKeywordSuggestions', {
        query
      });
      return response.data.data;
    },
    enabled: query !== '',
  });
  const handleInputClick = () => {
    setShowSuggestions(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleInputChange = (e) => {
    //inputRef.current.value = e.target.value;
    setShowSuggestions(true);
    setQuery(e.target.value);
    onInputChange(e.target.value);
  };
  useEffect(() => {
    //inputRef.current.value = value1 || '';
    setQuery(value1 || "");
  }, [value1]);
  return (
    <div className="w-full bg-white ">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onClick={handleInputClick}
        //placeholder="Type at least 3 characters..."
        // className="w-full font-normal py-1 px-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        className={`w-full input input-md input-bordered focus:outline-none focus:border-orange-500 `}
        autoComplete="one-time-code"
        name={customKey}
        placeholder={label}
      //onChange={handleInputChange}
      />
      {showSuggestions && (
        <ul className="mt-2 list-none z-10 bg-white">
          {suggestions.map(
            (
              {
                category1,
                category2,
                realCtg, link
              },
              index
            ) => (
              <li
                key={index}
                className="bg-white  w-full py-1 px-1 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log("category21",category2)
                  setQuery(category2);
    
                  onSelect(realCtg, category2, link)
                }                }
              >
                <div className="w-[100%]"><span className="text-sm font-bold">{category2}</span>{category1 && <span className="text-xs">{` (${category1})`}</span>}</div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default UniSearchBlock;
