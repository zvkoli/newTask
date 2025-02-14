interface OptionType {
  display: string;
  value: string;
  priceFactor: number;
  isDefault: boolean;
  isDisabled: boolean;
  icon: string;
  color: string;
  description: string;
  dependentFields: null | any;
}

interface RadioFieldProps {
  options?: OptionType[];
}

const RadioField: React.FC<RadioFieldProps> = ({ options = [] }) => {
  const mergedOptions = options;

  return (
    <div className="w-full">
      <div className="flex flex-row justify-center items-center gap-2 text-[1rem]">
        {mergedOptions.map((option) => (
          <label
            key={option.value}
            className="w-[4rem] h-[4rem] cursor-pointer rounded-md border border-gray-200 flex flex-row justify-center items-center gap-2 bg-[#F8F9FA] text-[#7E7D84]"
          >
            {option.display}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
