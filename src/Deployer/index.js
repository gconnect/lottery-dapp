import { Modal, Button } from 'react-bootstrap';
import * as backend from '../contract/build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib'
const stdlib = loadStdlib("ALGO")

export default function DeployerModal(props) {


  const OUTCOME = ["Your number is not a match", "Your number matches"]

  const Shared = () =>({
    getNum: (numTicket) =>{
      const num = (Math.floor(Math.random() * numTicket)  + 1)
      return num
    },
    seeOutcome: (num) =>{
      console.log(`The outcome is ${OUTCOME[num]}`)
    }
  })

  const deployContract = async () =>{

    const acc = await stdlib.getDefaultAccount();
    const ctc = acc.contract(backend);

    const nft = await stdlib.launchToken(acc, "Raffle Prize", "RPZ", {supply: 1})

    const rafflePararms = {
      nftId: nft.id,
      numTickets: 15
    }
    try{
     await ctc.p.Alice({
      ...stdlib.hasRandom,
      ...Shared(),
      startRaffle: () =>{
        console.log(`The raffle information is been sent to the contract. The NftId is ${rafflePararms.nftId} and the number of ticket is ${rafflePararms.numTickets}`)
        return rafflePararms
      },
      seeHash: (value) =>{
        console.log(`Winning number hash is ${value}`)
      }
      })
    }catch(e){
      console.log(e)
    }

    ctc.getInfo().then((info) => {
      // setContractInfo(JSON.stringify(info))
      // setInfo(true)
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contract Deployer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <h6>The deployer deploys the contract and mint the NFT. 
        Once the contract is deployed the player can enter the contract information and play</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={deployContract}> Deploy the contract</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}