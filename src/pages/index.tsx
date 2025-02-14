import FormTemplate from "@/components/template/FormTemplate";
import InfoBoxTemplate from "@/components/template/InfoBoxTemplate";
import SliderTemplate from "@/components/template/SliderTemplate";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-row justify-center items-start gap-4 bg-[#FBFBFB] max-lg:h-auto max-lg:flex-col ">
      <SliderTemplate />

      <FormTemplate />
      <InfoBoxTemplate />
    </main>
  );
}
