import SiteLayout from "@/components/layouts/site/SiteLayout";
import React from "react";

const Home = ({ l }: any ) => {
  return (
    <>
      <SiteLayout l={l}>
        <h1>{l.home.title}</h1>
      </SiteLayout>
    </>
  );
};

export default Home;
