import React from "react";
import "./confirmation.scss";

export default function Confirmation() {
  return (
    <div className="confirmation-page-wrapper">
      <div className="confirmation-page-container">
        Thank you for applying to the Ukrainian women who code club! You already
        made a first step in your journey to programming! Congrats! We will get
        back to you shortly to guide you in your adventure!
        <div className="confirmation-page-signature">
          Best,
          <br />
          Maria Trush, founder of UWWC
        </div>
      </div>
    </div>
  );
}
