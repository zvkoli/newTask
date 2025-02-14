import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInputProps {
  item: any;
  onChange?: (value: string) => void;
  selectedCover: string | null;
}

export default function SelectInput({
  item,
  onChange,
  selectedCover,
}: SelectInputProps) {
  return (
    <div className="w-full flex flex-row justify-end items-center">
      <p className="text-[#7E7D84] w-3/12">{item?.label}</p>
      <div className="w-9/12 flex flex-row justify-start items-center">
        <Select dir="rtl" onValueChange={onChange}>
          <SelectTrigger className="text-[#7E7D84]">
            <SelectValue placeholder="انتخاب کنید ..." />
          </SelectTrigger>
          <SelectContent>
            {item?.options?.map((option: any, index: number) => (
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
