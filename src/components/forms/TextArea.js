'use client';
//This is not finished requires more work
const TextArea = ({
  ID,
  name,
  register,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required,
  colSpan,
  hidden,
  disabled,
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
      <textarea
        tabIndex={tabIndex}
        id={name}
        field={name}
        name={name}
        className="w-full textarea textarea-bordered focus:outline-none focus:border-orange-500"
        placeholder={placeholder}
        required
        {...register(name)}
      />
      {required ? <i className="required">*</i> : null}
    </div>
  );
};
export default TextArea;
