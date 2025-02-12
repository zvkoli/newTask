import { ErrorMessage, Field } from "formik";

interface InputFieldProps {
  id: string;
  name: string;
  placeholder?: string;
}

export default function InputField({ id, name, placeholder }: InputFieldProps) {
  return (
    <>
      <Field
        className="w-full p-3 border-2 border-gray-200 rounded-lg outline-none text-[0.90rem] max-sm:text-[0.80rem]"
        style={{
          direction: "ltr",
          textAlign: "left",
        }}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-[0.80rem] font-medium"
      />
    </>
  );
}
