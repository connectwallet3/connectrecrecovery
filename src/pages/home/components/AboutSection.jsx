import React from "react";
import { LayoutPage } from "../../../layout/LayoutPage";
import { AboutStyle } from "./styled";

function AboutSection() {
  return (
    <AboutStyle>
      <LayoutPage>
        <br />
        <div className="center">
          <div className="theb">
            <h2>Recover your lost or stuck cryptocurrency funds</h2>
            <br />
            <p>
              No matter how hard governments try to regulate it, the
              Cryptocurrency industry is still alive and kicking. Since the
              topic is quite ambiguous to the general public, frauds use it to
              scam people out of their money, with what looks like a genuine
              investment opportunity. If you fell into a Cryptocurrency scam,
              please contact us now. Although it is extremely difficult to
              recover money from Crypto scams, we will give you our honest
              evaluation of your case, and if possible, we will give our best
              effort to recover your money.
            </p>
          </div>
        </div>
      </LayoutPage>
    </AboutStyle>
  );
}

export default AboutSection;
