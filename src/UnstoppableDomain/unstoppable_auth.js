import React, { useEffect } from "react"
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: '599bf9c7-1542-4d7e-a14c-45f3f336b801',
  redirectUri: 'http://localhost:3000',
})

 export async function login() {
  try {
    const authorization = await uauth.loginWithPopup() 
    console.log(authorization)
    console.log(authorization.idToken.sub)
    console.log(authorization.idToken.wallet_address)
    localStorage.setItem("domain", authorization.idToken.sub)
    window.location.reload()
  } catch (error) {
    console.error(error)
  }
}

export async function logout() {
  await uauth.logout()
  localStorage.clear("domain")
  window.location.reload()
  console.log('Logged out with Unstoppable')
}

const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
resolution
  .addr('ryan.crypto', 'ETH')
  .then((receiverETHAddress) => {
    // receiverETHAddress consists receiver ethereum address
    // use this address as recipient of the payment
  })
  .catch(console.error);
