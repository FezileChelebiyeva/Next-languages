import Home from "@/components/pages/site/home/Home";
import { getDictionary } from "@/libs/dictionaries";

const HomePage = async ({ params  }: any) => {
  const { lang } = await params
  const l = await getDictionary(lang);
  return <Home l={l} />;
};

export default HomePage;
