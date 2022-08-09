import { StyleSheet, css } from "aphrodite"
import { Button, Container } from "react-bootstrap"
import logo from "../images/AlgoBet.svg"
import winner from "../images/winners.svg"

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
    marginRight: "24px"
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
  }
})

export default function Home(){
  return(
    <Container>
      <div className={css(style.header)}>
        <img src={logo} width="100px" alt="logo" />
        <Button className={css(style.btn)}>Connect Wallet</Button>
      </div>
      <div className={css(style.initialSection)}>
        <div>
          <h1 className={css(style.title)}> Decentralized <br/> Raffle  Ticket</h1>
          <h5 className={css(style.description)} >Built with Reach deployed on Algorand</h5>
          <h5 className={css(style.unique)}>One unique <span className={css(style.jackpot)}>NFT JACKPOT TO BE WON</span></h5>
          <div className={css(style.buttonContainer)}>
            <Button className={`${css(style.btn)} ${css(style.buttonStyle)}`}>Buy Ticket</Button>
            <Button className={css(style.btn)}>Play Now</Button>
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
    </Container>
  )
}