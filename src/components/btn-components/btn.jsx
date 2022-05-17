import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import "./btn.scss";

Btn.propTypes = {
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["primary", "secondary"]),
};

Btn.defaultProps = {
  type: "button",
  theme: "primary",
};

export default function Btn({ btnText, type, onClick, theme }) {
  return (
    <div>
      <button
        className={classNames("btn", theme)}
        type={type}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
