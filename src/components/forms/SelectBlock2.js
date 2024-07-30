import React from 'react';
const SelectBlock2 = ({ list, register, label, field, errors, forceClass }) => {
  return (
    <div
      className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}
    >
      <label className="label-text text-xs">{label}</label>
      <select
        {...register(field)}
        className="select select-bordered w-full focus:outline-none focus:border-orange-500"
      >
        {list.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </div>
  );
};
export default SelectBlock2;
