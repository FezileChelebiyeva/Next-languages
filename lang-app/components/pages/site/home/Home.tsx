import SiteLayout from "@/components/layouts/site/SiteLayout";
import React from "react";

const Home = ({ l }: any) => {
  return (
    <>
      <SiteLayout l={l}>
        <div className="container">
          <h1>{l.home.title}</h1>
        </div>
      </SiteLayout>
    </>
  );
};

export default Home;
