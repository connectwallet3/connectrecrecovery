import React from "react";
import { HeroBGStyle, HeroStyle } from "./styled";
import herobg from "../../../assets/herobg.png";
import background from "../../../assets/background.jpg";
import heroImage from "../../../assets/heroImage.png";
import { LayoutPage } from "../../../layout/LayoutPage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <HeroBGStyle>
        <div className="bg">{/* <img src={background} alt="" /> */}</div>
        <LayoutPage>
          <HeroStyle>
            <h1 data-aos="fade-right" data-aos-duration="1500">
              Recover your money from cryptocurrency scams
              <br />
              <span>no-win, no fee</span>
            </h1>
            <br />

            <div className="text">
              <p data-aos="fade-right" data-aos-duration="1750">
                Ripped off by scammers? Get in touch with us and our team of
                experts will get your money back.
              </p>
            </div>

            <br />
            <Link to="/contact">
              <button data-aos="fade-right" data-aos-duration="1950">
                Contact us
              </button>
            </Link>
          </HeroStyle>
        </LayoutPage>
      </HeroBGStyle>
    </>
  );
}

export default Hero;
