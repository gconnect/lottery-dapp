import { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

function HyphenWidgetComponent() {

  useEffect(() => {
    HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        tag: "crossTransfer",
        dAppName: "crossTransfer",
        env: "test", // can be test, staging or production. Default: "staging"
        showWidget: true,
        showCloseButton: false,
      }
    );
  }, []);


  return (
    <div>
        <div id="widget"></div>
    </div>
  );
}

export default HyphenWidgetComponent;

