import { useEffect } from 'react';
import {  Modal, Tabs, Tab } from 'react-bootstrap';
import HyphenWidgetComponent from '../Biconomy/HypenWidget';
import BuyTicket from './BuyTicket';
import MakePayment from './MakePayment';
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

export default function BuyTicketModal(props) {

useEffect(() => {
 localStorage.getItem("txId")
 localStorage.getItem("txId2")
}, [])

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
        <Tab eventKey="cross-chain" title="Cross Chain Transfer">
          <HyphenWidgetComponent/>
        </Tab>
      </Tabs>      
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}