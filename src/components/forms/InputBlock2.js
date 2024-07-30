'use client';
const InputBlock2 = ({
  ID,
  type,
  register,
  label,
  field,
  name = field,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required = false,
  colSpan = 1,
  hidden = false,
  disabled = false,
  inputClass = '',
}) => {
  return (
    <div
      className={`relative w-full flex flex-col gap-1 items-start ${forceClass} col-span-2 ${
        colSpan === 1
          ? 'md:col-span-1'
          : `md:col-span-${colSpan} ${hidden ? 'hide-item' : 'show-item'}`
      }`}
    >
      {label ? <label className="label-text text-xs">{label}</label> : null}
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className={`w-full input input-md input-bordered focus:outline-none focus:border-orange-500 ${inputClass}`}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required ? true : false}
        hidden={hidden ? true : false}
        disabled={disabled ? true : false}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
      {required ? <i className="required">*</i> : null}
    </div>
  );
};
export default InputBlock2;
