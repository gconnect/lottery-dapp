import React, {useState, useEffect } from "react"
import { StyleSheet, css } from "aphrodite"
import { Modal, Button } from "react-bootstrap"
import unstoppableButton from "../images/default-large.png"
import myAlgo from "../images/myalgo.png"
import {login, logout} from '../UnstoppableDomain/unstoppable_auth'
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'
const stdlib = loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));

  const style = StyleSheet.create({
    btnContainer:{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    unstoppable:{
      marginTop: "10px",
      cursor: "pointer"
    },
    myAlgo:{
      padding: "16px",
      fontSize: "18px",
      fontWeight: "bold"
    }
    
  })
export default function ConnectWalletModal(props){

  const connectWallet = async () =>{
    const acc = await stdlib.getDefaultAccount();
    console.log(acc.networkAccount.addr)
    localStorage.setItem("address", acc.networkAccount.addr)
    props.onHide()
    window.location.reload()
  }

  const unstoppablelogin = () =>{
    login()
    props.onHide()
  }

  return(
    <div>
      <Modal
        {...props}
        centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Connect Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={css(style.btnContainer)}>
            <Button className={css(style.myAlgo)} onClick={connectWallet}> <img src={myAlgo} alt="myAlgo" width="28px"/>Connect with myAlgo Wallet</Button>
            <img className={css(style.unstoppable)} src={unstoppableButton} onClick={unstoppablelogin} alt="Unstoppable button" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}