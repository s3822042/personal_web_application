import React from "react";
import Banner from "../banner/Banner";
import FirstRowContent from "./FirstRowContent";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";


function Home() {
  return (
    <AnimationRevealPage>
      <Banner />
      <FirstRowContent />
    </AnimationRevealPage>
  );
}

export default Home;
