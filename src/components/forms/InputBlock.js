'use client';
const InputBlock = ({
  ID,
  name,
  type,
  register,
  label,
  field,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required = false,
  hidden,
  showLabel = false,
}) => {
  return (
    <div className={`w-full flex flex-col items-start ${forceClass}`}>
      {hidden ? null : <label className="label-text text-xs">{label}</label>}
      {showLabel ? <label className="label-text text-xs">{label}</label> : null}
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
        hidden={hidden}
        required={required}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </div>
  );
};
export default InputBlock;
