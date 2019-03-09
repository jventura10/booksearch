import React from "react";

export function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export function FluidJumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        {children} 
      </div>
    </div>
  );
}