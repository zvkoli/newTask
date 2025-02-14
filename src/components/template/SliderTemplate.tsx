import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  require("../../assets/1-catalog.jpg"),
  require("../../assets/2-catalog.jpg"),
  require("../../assets/کاتالوگ.jpg"),
];

export default function SliderTemplate() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="h-full w-3/12 flex flex-col justify-start items-center gap-4 pt-10 max-lg:w-full">
      <div className="w-[400px] h-[300px] border-2 border-gray-200 overflow-hidden rounded-md max-xl:w-[300px] max-2xl:w-[350px]">
        <Image
          src={images[selectedIndex]}
          alt="Slider"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-row items-center gap-2">
        <button
          onClick={prevImage}
          className="group bg-white text-gray-700 rounded-full border-2 border-gray-200 relative right-[1.5rem] z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#808080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left group-hover:stroke-red-500"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <div className="flex flex-row justify-center items-center gap-1">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-[7.5rem] h-[7.5rem] cursor-pointer max-xl:w-[5.5rem] max-xl:h-[5.5rem] max-2xl:w-[6.5rem] max-2xl:h-[6.5rem]"
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-full h-full border-2 rounded-md border-gray-200"
                onClick={() => setSelectedIndex(index)}
                width={400}
                height={400}
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-[#ff1120] opacity-50 rounded-md"></div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={nextImage}
          className="group bg-white text-gray-700 rounded-full border-2 border-gray-200 relative left-[1.5rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#808080"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left group-hover:stroke-red-500"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="bg-white shadow-2xl p-3 border border-gray-200 rounded-md w-full h-auto flex flex-row justify-center items-start gap-2 text-[0.70rem] text-gray-500 max-xl:flex-col max-xl:w-10/12">
        <div className="w-5/12 flex flex-col justify-center items-center text-[0.70rem] max-xl:w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <p>تعداد نظرات</p>
            <p>
              <span className="bg-[#28A745] p-1 rounded-md text-white text-[0.60rem]">
                0
              </span>{" "}
              نظر
            </p>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <p>امتیاز</p>
          </div>
        </div>

        <div className="w-7/12 max-xl:w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <p className="font-semibold">کیفیت محصول</p>
            <div className="flex flex-row justify-center items-center gap-[2px]">
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between items-center">
            <p className="font-semibold">مقرون به صرفه</p>
            <div className="flex flex-row justify-center items-center gap-[2px]">
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
              <p className="w-[1.25rem] h-[0.50rem] rounded-md bg-gray-300"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
