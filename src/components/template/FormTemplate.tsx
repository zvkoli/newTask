import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import SelectInput from "../module/SelectInput";
import InputField from "../module/InputField";
import RadioField from "../module/RadioField";

interface FormValues {
  coverType: string;
  amount: string;
}

export default function FormTemplate() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCover, setSelectedCover] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cloud.rangarang-group.com/api/Order/GetForm?productGroupId=91&workTypeId=2"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        // console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onCoverChange = (value: string) => {
    console.log(value);
    setSelectedCover(value);
  };

  const initialValues: FormValues = {
    coverType: "",
    amount: "",
  };

  // const validate = (values: FormValues) => {
  //   const errors: Partial<FormValues> = {};
  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }
  //   return errors;
  // };

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  const loadingg = true

  return (
    <div className="w-5/12 h-full flex flex-col justify-start items-center gap-2 max-lg:w-full">
      {loadingg ? (
        <p className="w-full h-full flex flex-row justify-center items-center">
          <p className="loader"></p>
        </p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            // validate={validate}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="w-full flex flex-col justify-center items-start gap-2 pt-10 ">
                <h1 className="text-[#6a696f] font-bold text-[1.10rem] pr-5">
                  {data?.title}
                </h1>

                <div className="w-full flex flex-col justify-start items-center gap-2 p-2">
                  {data?.sections?.map((section: any, index: number) => (
                    <div
                      className={`w-full h-auto flex flex-col justify-start items-start gap-2 text-black p-4 rounded-md
                      ${index !== 0 ? "border border-gary-200" : ""}`}
                      key={section.title}
                    >
                      <h2 className="text-[#6a696f] text-[0.90rem] font-semibold flex flex-row justify-center items-center gap-2">
                        <span className="bg-red-600 h-4 w-[2px]"></span>
                        {section?.title}
                        <p className="text-[0.70rem]">{section?.description}</p>
                      </h2>

                      <div className="w-full flex flex-col gap-2">
                        {section?.fields?.map((item: any) => {
                          if (item.inputType === "Dropdown") {
                            if (
                              item.fieldId === "AdtCategories[3].Adt.Side" &&
                              selectedCover !== "24"
                            ) {
                              return null;
                            }

                            return (
                              <SelectInput
                                key={item.fieldId}
                                label={item.label}
                                options={item.options}
                                onChange={
                                  item.fieldId === "AdtCategories[3].Adt"
                                    ? onCoverChange
                                    : undefined
                                }
                              />
                            );
                          } else if (item.inputType === "Number") {
                            return (
                              <InputField
                                key={item.fieldId}
                                label={item.label}
                                fieldId={item.fieldId}
                              />
                            );
                          } else if (item.inputType === "Radio") {
                            return (
                              <RadioField
                                key={item.fieldId}
                                options={item.options}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}

