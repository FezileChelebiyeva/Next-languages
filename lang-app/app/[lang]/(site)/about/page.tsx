import About from "@/components/pages/site/about/About";
import { getDictionary } from "@/libs/dictionaries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "-",
};

const AboutPage = async ({ params }: any) => {
  const { lang } = await params;
  const l = await getDictionary(lang);
  return <About l={l} />;
};

export default AboutPage;
