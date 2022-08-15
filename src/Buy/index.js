import { useState, useEffect } from 'react';
import { Form, Modal, Button, Tabs, Tab } from 'react-bootstrap';
import { domainResolutionWithLibrary, resolveDomainUsingAPI } from "../UnstoppableDomain/domain_resolution"
import { transfer, sendEther, payWithMetamask } from "../UnstoppableDomain/crypto_payment"
import BuyTicket from './BuyTicket';
import MakePayment from './MakePayment';

export default function BuyTicketModal(props) {
const [domain, setDomain] = useState("")
const [domainName, setDomanName] = useState("")
const [domainAddress, setDomainAdress] = useState("")
const [amount, setAmount] = useState("")

const domainHandler = async (e) =>{ 
  setDomain(e.target.value)
}

const getDomain = async () => {
  const res = await resolveDomainUsingAPI(domain)
  console.log(res)
  setDomainAdress(res.data.meta.owner)
}

const txId = localStorage.getItem("txId")


useEffect(() => {
  if (domain) {
    getDomain() 
  }
}, [domain])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crypto payment with Unstoppable Domain Resolution
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Buy Ticket">
          <BuyTicket/>
        </Tab>
        <Tab eventKey="profile" title="Transfer">
          <MakePayment/>
        </Tab>
      </Tabs>
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}