import React, { useEffect } from "react";
import styled from "styled-components";
import AboutSection from "./components/AboutSection";
import Claim from "./components/Claim";
import Hero from "./components/Hero";
import Service from "./components/Service";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeStyle>
      <Hero />
      <AboutSection />
      <Service />
      <Claim/>
    </HomeStyle>
  );
}

export default Homepage;

const HomeStyle = styled.div`
  overflow-x: hidden;
`;
