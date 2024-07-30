'use client';
const SubscribeInput = ({
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
  required,
  colSpan,
  hidden,
}) => {
  if (required === undefined) required = false;
  if (hidden === undefined) hidden = false;
  if (colSpan === undefined) colSpan = 1;
  if (name === undefined) name = field;
  return (
    <div className="join w-full">
      {errors[field] && <span className="error">{errors[field].message}</span>}
      {required ? <i className="required">*</i> : null}
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className="input input-md join-item grow focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required ? true : false}
        hidden={hidden ? true : false}
      />
      <button
        type="submit"
        className="btn join-item bg-aj text-white rounded-r-full"
      >
        Get Valuable Insights
      </button>
    </div>
  );
};
export default SubscribeInput;
