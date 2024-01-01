import "./InputSelect.css";

const InputSelect = ({ onChange, name, value, title }) => {
  return (
    <label className="input-select-label relative flex items-center gap-4 cursor-pointer text-slate-600 hover:text-teal-500 group capitalize">
      <input
        onChange={onChange}
        className="hidden"
        type="radio"
        name={name}
        value={value}
      />
      <span className="checkmark w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-slate-300"></span>
      <p>{title}</p>
    </label>
  );
};
export default InputSelect;
