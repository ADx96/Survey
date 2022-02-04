import React from "react";
import "../Styles/ThankYouPage.css";
const ThankYouPage: React.FC = () => {
  return (
    <>
      <section className="login-main-wrapper">
        <div className="main-container">
          <div className="login-process">
            <div className="login-main-container">
              <div className="thankyou-wrapper">
                <h1 style={{ textAlign: "center" }}>
                  <img
                    width="500"
                    src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                    alt="thanks"
                  />
                </h1>
                <p>for Your Survey Submition</p>
                <a href="index.html">Back to home</a>
                <div className="clr"></div>
              </div>
              <div className="clr"></div>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
