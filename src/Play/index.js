import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import * as backend from '../contract/build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib'
const stdlib = loadStdlib("ALGO")

export default function PlayModal(props) {
  const [contractInfo, setContractInfo] = useState("")
  const [selectedNum, setSelectedNum] = useState(0)

  const OUTCOME = ["Your number is not a match", "Your number matches"]

  const Shared = {
    getNum: (numTicket) =>{
      // const num = (Math.floor(Math.random() * numTicket)  + 1)
     // return num
      return stdlib.parseInt(selectedNum)  >= numTicket
       
    },
    seeOutcome: (num) =>{
      console.log(`The outcome is ${OUTCOME[num]}`)
    }
  }



  const attachAndPlay = async (contractInfo) =>{

    try{
      if(selectedNum === ""){
        alert("fields required")
        return
      }

      if(selectedNum > 15){
        alert("Pick a number between 1 and 15")
        return
      }
  
  
      if(contractInfo === ""){
        alert("fields required")
        return
      }

      const acc = await stdlib.getDefaultAccount();
      const ctcInfo = JSON.parse(contractInfo)
      const ctc = acc.contract(backend, ctcInfo);
      // backend.Bob(ctc, this);
      await ctc.p.Bob({
      ...stdlib.hasRandom,
      // implement Bob's interact object here
      ...Shared,
      showNum: (num) =>{
        console.log(`Your raffle number is ${num}`)
      },
      seeWinner: (num) => {
        console.log(`The winning number is ${num}`)
      }
    })
    return

    }catch(e){
      console.log(e)
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Play
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter contract address or app id</Form.Label>
          <Form.Control type="text" placeholder="Enter contract address or app id"
           value={contractInfo} onChange={(e) => setContractInfo(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter selected raffle number</Form.Label>
          <Form.Control type="number" placeholder="Pick a number between 1 and 15"
          value={selectedNum} onChange={(e) => setSelectedNum(e.currentTarget.value)} min="1" max="16"/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => attachAndPlay(contractInfo)}> Attach & Play</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}