import Footer from "./footer/Footer";
import Header from "./header/Header";

const SiteLayout = ({ children, l } : any) => (
    <div>
      <Header l={l} />
      <main>{children}</main>
      <Footer l={l}/>
    </div>
  );
  export default SiteLayout;