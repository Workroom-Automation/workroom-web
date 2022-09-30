import React from "react";

export default function Layout({ component: Component, type = "without-nav" }) {
  return (
    <div
      style={{ margin: type === "with-nav" ? "93px 0 0 100px" : "93px 0 0 0" }}
    >
      <Component />
    </div>
  );
}
