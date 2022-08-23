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
        env: "test",
        showWidget: true,
        showCloseButton: false,
        // Other options
    // apiKeys: {
    //   // optional for gasless
    //   Ethereum: "Ethereum API Key",
    //   Polygon: "Polygon API Key",
    //   Avalanche: "Avalanche API Key",
    // },
    // rpcUrls: {
    //   // optional
    //   Ethereum: "Ethereum RPC URL",
    //   Polygon: "Polygon RPC URL",
    //   Avalanche: "Avalanche RPC URL",
    // },
    // // NOTE: following 2 callback emit when tx is *sent*, you should check the status by yourself
    // onDeposit: (e) => console.log("Deposit " + e), // emit when depost tx is sent
    // onExit: (e) => console.log("Exit " + e), // emit when exit tx (receiver will receive tokens) is sent
    // /*
    //     input: {
    //         sourceChain?: string;
    //         destinationChain?: string;
    //         token?: string;
    //         amount?: string;
    //         receiver?: string;
    //         gasless: boolean;
    //     }
    // */
    // onChange: (input) => console.log("Input " + JSON.stringify(input)),
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

