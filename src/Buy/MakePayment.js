import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { resolveDomainUsingAPI } from "../UnstoppableDomain/domain_resolution"
import { payWithMetamask } from "../UnstoppableDomain/crypto_payment"

import { StyleSheet, css } from "aphrodite"


const styles = StyleSheet.create({
  submit: {
   background: "blue"
  },
})

export default function MakePayment(){
  const [domain, setDomain] = useState("")
  const [amount, setAmount] = useState("")
  const [domainAddress, setDomainAdress] = useState("")
  const [error, setError] = useState("")
  const [transId, setTransId] = useState("")
  const isError = !! error

  const domainHandler = async (e) =>{ 
    setDomain(e.target.value)
  }
  const getDomain = async () => {
    const res = await resolveDomainUsingAPI(domain)
    console.log(res)
    if(res.data.meta.domain === null){
      console.log("Owner found")
      setError(`No crypto ETH address found for ${domain} `)
    }
    setDomainAdress(res.data.meta.owner)
  }
  
  useEffect(() => {
    const txId = localStorage.getItem("txId2")
    if(txId !== ""){
      setTransId(txId)
    } 
    if (domain) {
      getDomain() 
    }
  }, [domain, transId])

  return(
    <div>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter a blockchain domain</Form.Label>
            <Form.Control type="text" placeholder="Enter a blockchain domain" value={domain}  onChange={domainHandler}/>
          </Form.Group>
          {domainAddress !== "" ? <div>
            <h5>Send to:</h5>
            <p>{domain}</p>
            <hr/>
            <p><b>ETH: </b>{domainAddress}</p>
          </div> : null}
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter amount</Form.Label>
            <Form.Control type="number" placeholder="Enter ticket amount" value={amount} onChange={(e) => setAmount(e.currentTarget.value)} />
          </Form.Group>
        </Form>
        <Button className={css(styles.submit)} variant="primary" type="submit" onClick={() => payWithMetamask(domainAddress, amount)}> Transfer</Button>
          {transId !=="" ? <p> <a href={`https://rinkeby.etherscan.io/tx/${transId}`}>{transId}</a></p> : null }
          
    </div>
  )
}