import { ErrorMessage, Field } from "formik";

interface InputFieldProps {
  label: string;
  fieldId: string;
}

export default function InputField({ label, fieldId }: InputFieldProps) {
  return (
    <div className="w-full flex flex-row justify-start items-center">
      <p className="text-[#7E7D84] w-3/12 max-md:text-[0.80rem]">{label}</p>
      <div className="w-9/12 flex flex-row justify-end items-center">
        <Field
          className="w-full p-2 border border-gray-200 rounded-lg outline-none text-[0.90rem] max-sm:text-[0.80rem]"
          style={{
            direction: "rtl",
            textAlign: "right",
          }}
          name={fieldId}
          placeholder={label}
          autoComplete="off"
        />
        <ErrorMessage
          name={fieldId}
          component="div"
          className="text-red-500 text-[0.80rem] font-medium"
        />
      </div>
    </div>
  );
}
