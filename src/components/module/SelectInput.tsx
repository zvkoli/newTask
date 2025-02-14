interface Option {
  display: string;
  value: string;
  priceFactor?: number;
  isDefault?: boolean;
  isDisabled?: boolean;
  icon?: string;
  color?: string;
  description?: string;
  dependentFields?: any;
}

interface SelectInputProps {
  onChange?: (value: string) => void;
  label: string;
  options: Option[];
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectInput({
  onChange,
  label,
  options,
}: SelectInputProps) {
  console.log(label);
  return (
    <div className="w-full flex flex-row justify-end items-center">
      <p className="text-[#7E7D84] w-3/12 max-md:text-[0.80rem]">{label}</p>
      <div className="w-9/12 flex flex-row justify-start items-center">
        <Select dir="rtl" onValueChange={onChange}>
          <SelectTrigger className="text-[#7E7D84]">
            <SelectValue placeholder="انتخاب کنید ..." />
          </SelectTrigger>
          <SelectContent>
            {options.map((option: Option, index: number) => (
              <SelectItem key={index} value={option.value}>
                {option.display}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
