import { Formik, Form } from "formik";
import InputField from "../module/InputField";
import { useState, useEffect } from "react";

interface FormValues {
  name: string;
}

export default function FormTemplate() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        console.log(data);
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

  const initialValues: FormValues = {
    name: "",
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    // if (!values.name) {
    //   errors.name = "Name is required";
    // }
    return errors;
  };

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="w-4/12 border-2 border-red-500">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full flex flex-col justify-center items-start gap-2 pt-6">
                <h1>{data?.title}</h1>
                <InputField
                  id="name"
                  name="name"
                  placeholder="نام خود را وارد کنید"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  ارسال
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
