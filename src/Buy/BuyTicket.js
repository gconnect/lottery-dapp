
import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { resolveDomainUsingAPI } from "../UnstoppableDomain/domain_resolution"
import { payWithMetamask } from "../UnstoppableDomain/crypto_payment"

export default function BuyTicket(){
  const [domain, setDomain] = useState("")
  const [amount, setAmount] = useState("")
  const [domainAddress, setDomainAdress] = useState("")

  const getDomain = async () => {
    const res = await resolveDomainUsingAPI("gloryagat.nft")
    console.log(res)
    setDomainAdress(res.data.meta.owner)
  }
  
  const txId = localStorage.getItem("txId")
  
  
  useEffect(() => {
    getDomain()
  }, [])

  return(
    <div>
      <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter a blockchain domain</Form.Label>
            <Form.Control type="text" placeholder="Enter a blockchain domain" value="gloryagat.nft"  readOnly/>
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
        <Button variant="primary" type="submit" onClick={() => payWithMetamask(domainAddress, amount)}> Submit</Button>
          {txId !=="" ? <p>TransactionId: <a href={`https://rinkeby.etherscan.io/tx/${txId}`}>{txId}</a></p> : null }
          
    </div>
  )
}