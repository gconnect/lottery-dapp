import { ethers } from "ethers";
import { CONTRACT_ABI } from "./contractABI";


export async function transfer(send_token_amount, to_address) {
  // const ethersProvider = new ethers.providers.InfuraProvider("rinkeby")
  const ethersProvider = ethers.getDefaultProvider(`https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`)
  let wallet = new ethers.Wallet(process.env.REACT_APP_METAMASK_PRIVATE_KEY)
  let walletSigner = wallet.connect(window.ethersProvider)
  const senderAddress = 0x65645067615CAFCc37AB63ADEe2bc1231Fb257f3
  // let to_address = "0x4c10D2734Fb76D3236E522509181CC3Ba8DE0e80"
  const contract_address = 0x070e83FCed225184E67c86302493ffFCDB953f71
  ethersProvider.getGasPrice().then((currentGasPrice) => {
    let gas_price = ethers.utils(currentGasPrice)
    console.log(`gas_price: ${gas_price}`)

    if (contract_address) {
      // general token send
      let contract = new ethers.Contract(
        contract_address,
        CONTRACT_ABI,
        walletSigner
      )

      // How many tokens?
      let numberOfTokens = ethers.utils(send_token_amount, 18)
      console.log(`numberOfTokens: ${numberOfTokens}`)

      // Send tokens
      contract.sendValue(to_address, numberOfTokens).then((transferResult) => {
        console.dir(transferResult)
        alert("sent token")
      })
    } // ether send
    else {
      const tx = {
        from: senderAddress,
        to: to_address,
        value: ethers.utils.parseEther(send_token_amount),
        nonce: window.ethersProvider.getTransactionCount(
          senderAddress,
          "latest"
        ),
        gasLimit: ethers.utils.parseEther(1500000000), // 100000
        gasPrice: gas_price,
      }
      console.dir(tx)
      try {
        walletSigner.sendTransaction(tx).then((transaction) => {
          console.dir(transaction)
          alert("Send finished!")
        })
      } catch (error) {
        alert("failed to send!!")
      }
    }
  })
}

// This works on the console. Authomatically signed transaction with the provided wallet private key
export async function sendEther(){
  // network: using the Rinkeby testnet
    let network = `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`
    // provider: Infura or Etherscan will be automatically chosen
    let provider = ethers.getDefaultProvider(network)
    // Sender private key: 
    // correspondence address 0xb985d345c4bb8121cE2d18583b2a28e98D56d04b
    let privateKey = process.env.REACT_APP_METAMASK_PRIVATE_KEY
    // Create a wallet instance
    let wallet = new ethers.Wallet(privateKey, provider)
    // Receiver Address which receives Ether
    let receiverAddress = '0xF02c1c8e6114b1Dbe8937a39260b5b0a374432bB'
    // Ether amount to send
    let amountInEther = '0.001'
    // Create a transaction object
    let tx = {
        to: receiverAddress,
        // gasLimit: ethers.utils.parseEther("1500000000"), // 100000
        // data: '0x00',
        // Convert currency unit from ether to wei
        value: ethers.utils.parseEther(amountInEther)
    }
    // Send a transaction
    wallet.sendTransaction(tx)
    .then((txObj) => {
        console.log('txHash', txObj.hash)
        // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
        // A transaction result can be checked in a etherscan with a transaction hash which can be obtained here.
    })
}
