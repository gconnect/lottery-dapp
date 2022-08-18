import fs from "fs";
import path from "path";
import {FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus} from "fireblocks-sdk";

const apiSecret = fs.readFileSync(path.resolve(__dirname, "./fireblocks_secret.key"), "utf8");
const apiKey = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const fireblocks = new FireblocksSDK(apiSecret, apiKey);

export default async function Fireblocks(){
  // ALGO_ASSET

}