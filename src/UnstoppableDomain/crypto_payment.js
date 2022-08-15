import { ethers } from "ethers";

// This signs transaction with metamask
export async function payWithMetamask(reciever, amount) {

  const ethereum = window.ethereum;

    if(ethereum){

      try{
      //we use eth_accounts because it returns a list of addresses owned by us.
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      // Acccounts now exposed
      const params = [{
          from: accounts[0],
          to: reciever,
          value: ethers.utils.parseUnits(amount, 'ether').toHexString(),
          // nonce: await provider.getTransactionCount(accounts[0], "latest"),
          gasLimit: ethers.utils.hexlify(100000),
          gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
      }];

      const transactionHash = await provider.send('eth_sendTransaction', params)
      console.log('transactionHash is ' + transactionHash);
      localStorage.setItem("txId", transactionHash)
      } catch(err){
      console.log(err)
    }
 }else{
  console.log("Please install metamask")
 }

}
