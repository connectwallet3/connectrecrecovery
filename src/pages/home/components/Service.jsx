import React from "react";
import { LayoutPage } from "../../../layout/LayoutPage";
import { ServiceStyle } from "./styled";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/connect-wallet");
  };
  return (
    <ServiceStyle>
      <LayoutPage>
        <div className="flexstyle">
          <div className="left">
            <h2 data-aos="fade-up">Cryptocurrency Tracing and Recovery</h2>
            <p className="subtext">
              The first step to recovering virtual assets is to determine where
              they were moved and to whom. This establishes our target.
            </p>

            <div className="textBox" data-aos="fade-left">
              <div className="line"></div>
              <div>
                <span>Are Cryptos Traceable?</span>
                <p>
                  While Cryptocurrencies are, with few exceptions,
                  decentralized, almost all virtual currencies are traceable.
                  Cryptocurrencies are kept in digital accounts referred to as
                  wallets. Each time Cryptocurrency is moved from one wallet to
                  another it is recorded in the Blockchain.
                </p>
              </div>
            </div>

            <div className="textBox" data-aos="fade-left">
              <div className="line"></div>
              <div>
                <span>The Technical Solution</span>
                <p>
                  While Cryptocurrencies are, with few exceptions,
                  decentralized, almost all virtual currencies are traceable.
                  Cryptocurrencies are kept in digital accounts referred to as
                  wallets. Each time Cryptocurrency is moved from one wallet to
                  another it is recorded in the Blockchain.
                </p>
              </div>
            </div>

            <div className="textBox" data-aos="fade-left">
              <div className="line"></div>
              <div>
                <span>Not all Cryptos are Equal</span>
                <p>
                  Most Cryptocurrencies are traceable, however, not all. We are
                  able to trace the most popular Cryptocurrencies, including
                  Bitcoin and Ethereum, as well as others.
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <img
              src="https://www.cryptocurrency-recovery.com/wp-content/themes/cryptocurrency/assets/images/crypto.png"
              alt=""
            />
          </div>
        </div>
      </LayoutPage>
    </ServiceStyle>
  );
}

export default Service;
