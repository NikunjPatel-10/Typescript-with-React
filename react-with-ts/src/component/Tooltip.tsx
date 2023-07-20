import React from "react";
import "./Tooltip.css";

type tooltipProps = {
  text: string;
  children: any;
};

const Tooltip = ({ text, children }: tooltipProps) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-text">{text}</div>
      <div>{children}</div>
    </div>
  );
};

export default Tooltip;
