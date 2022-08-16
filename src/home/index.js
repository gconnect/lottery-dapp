import React, { useState, useEffect } from "react"
import { StyleSheet, css } from "aphrodite"
import { Button, Container, DropdownButton, Dropdown } from "react-bootstrap"
import logo from "../images/AlgoBet.svg"
import winner from "../images/winners.svg"
import PlayModal from "../Play"
import DeployerModal from "../Deployer"
import { logout } from "../UnstoppableDomain/unstoppable_auth"
import { domainResolutionWithLibrary, resolveDomainUsingAPI } from "../UnstoppableDomain/domain_resolution"
import { transfer, sendEther, payWithMetamask } from "../UnstoppableDomain/crypto_payment"
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
import ConnectWalletModal from "../WalletConnectModal/ConnectWallet"
import BuyTicketModal from "../Buy"
const stdlib = loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));
  
const style = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px"
  },
  btn:{
    background: "#A32896",
    border: "#A32896",
  },
  btn2:{
    background: "white",
    border: "2px solid #A32896",
    color: "#A32896",
    fontStyle: "bold"
  },
  initialSection: {
    display: "flex",
    justifyContent: "space-between",
    '@media (max-width: 575px)': {
      flexDirection: 'column',
    }
  },
  title: {
    fontSize: "80px",
    color: "#A32896",
    marginTop: "60px",
    fontWeight: "bold",
    '@media(max-width: 575px)': {
      fontSize: "40px"
    }
  },
  unique: {
    lineHeight: "36px"
  },
  jackpot: {
    color: "#A32896"
  },
  description: {
    marginTop: "24px"
  },
  buttonContainer: {
   marginTop: "24px"
  },
  buttonStyle: {
    marginRight: "24px",
    marginLeft: "24px"
  },
  winnerImage: {
    '@media (max-width: 575px)': {
      display: 'none',
    }
  },
  howTo: {
    display: "flex",
    justifyContent: "space-between",
    '@media (max-width: 575px)': {
      flexDirection: "column"
    }
  },
  subHead: {
    textAlign: "center",
    margin:"24px"
  },
  
})

export default function Home(){
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [domain, setDomain] = useState(null)
  const isConnected = !!walletAddress || !!domain
  const [unstoppable, setUnstoppable] = useState(false)
  const [buyTicket, setBuyTicket] = useState(false)

  const disconnectWallet = () =>{
    localStorage.clear("address")
    setWalletAddress(null)
    window.location.reload()
  }

  const openBuyModal = () =>{
    setBuyTicket(true)
    localStorage.clear("txId")
    localStorage.clear("txId2")
  }
  useEffect(() =>{
    const value = localStorage.getItem("address")
    const domain = localStorage.getItem("domain")

      if(value !== ""){
        setWalletAddress(value)
      }
      if (domain){
        setDomain(domain)
        setUnstoppable(true)
      }

  }, [])

  const logoutAccount = async() =>{
    await logout()
    localStorage.clear("domain")
    setWalletAddress(null)
  }


  return(
    <Container>
      <div className={css(style.header)}>
        <img src={logo} width="100px" alt="logo" />
        <div>
          {isConnected ? 
           <DropdownButton style={{background: 'red !important'}} id="dropdown-basic-button" title={ unstoppable ? domain : `${walletAddress.substring(0,10)}...`}>
           <Dropdown.Item onClick={unstoppable ? logoutAccount : disconnectWallet}>Disconnect</Dropdown.Item>
          </DropdownButton> :
          <Button  className={css(style.btn)} onClick={() => setShowConnectModal(true)}>Connect Wallet </Button>
          }  
        </div>
      </div>
      <div className={css(style.initialSection)}>
        <div>
          <h1 className={css(style.title)}> Decentralized <br/> Raffle  Ticket</h1>
          <h5 className={css(style.description)} >Built with Reach deployed on Algorand</h5>
          <h5 className={css(style.unique)}>One unique <span className={css(style.jackpot)}>NFT JACKPOT TO BE WON</span></h5>
          <div className={css(style.buttonContainer)}>
            <Button className={css(style.btn2)} variant="primary"  onClick={openBuyModal}>Buy Ticket</Button>
            <Button className={`${css(style.buttonStyle)}`} variant="success" onClick={() => setModalShow(true)}>Deployer</Button>
            <Button className={css(style.btn)} onClick={() => setShow(true)}>Play Now</Button>
          </div>
        </div>
        <img className={css(style.winnerImage)} width="600px" src={winner} alt="winner" />
      </div>
      <div >
        <h2 className={css(style.subHead)}>HOW TO PLAY</h2>
        <div className={css(style.howTo)}>
          <h5>Connect your wallet</h5>
          <h5>Enter your bet amount to buy ticket</h5>
          <h5>Enter your lucky number</h5>
          <h5>Then click play</h5>
        </div>
      </div>
      <DeployerModal show={modalShow} onHide={() => setModalShow(false)}/>
      <PlayModal show={show} onHide={() => setShow(false)} />
      <ConnectWalletModal show={showConnectModal} onHide={() => setShowConnectModal(false)}/>
      <BuyTicketModal show={buyTicket} onHide={() => setBuyTicket(false)}/>
    </Container>
  )
}