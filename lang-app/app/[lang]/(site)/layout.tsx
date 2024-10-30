import SiteLayout from "@/components/layouts/site/SiteLayout";
import { getDictionary } from "@/libs/dictionaries";

export const metadata = {
  title: "Home",
  description: "A simple Next.js app with header and footer",
};

const Layout = async ({
  params,
  children,
}: {
  params: { lang: any };
  children: React.ReactNode;
}) => {
  const {lang} = await params
  const l = await getDictionary(lang);
  return <SiteLayout l={l}>{children}</SiteLayout>;
};

export default Layout;
