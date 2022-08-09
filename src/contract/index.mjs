import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log("creator is creating the nft..")
const nft = await stdlib.launchToken(accAlice, "Raffle Prize", "RPZ", {supply: 1})

const rafflePararms = {
  nftId: nft.id,
  numTickets: 15
}

await accBob.tokenAccept(rafflePararms.nftId) 

const OUTCOME = ["Your number is not a match", "Your number matches"]

const Shared = {
  getNum: (numTicket) =>{
    const num = (Math.floor(Math.random() * numTicket)  + 1)
    return num
  },
  seeOutcome: (num) =>{
    console.log(`The outcome is ${OUTCOME[num]}`)
  }
}


console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Shared,
    startRaffle: () =>{
      console.log(`The raffle information is been sent to the contract. The NftId is ${rafflePararms.nftId} and the number of ticket is ${rafflePararms.numTickets}`)
      return rafflePararms
    },
    seeHash: (value) =>{
      console.log(`Winning number hash is ${value}`)
    }
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Shared,
    showNum: (num) =>{
      console.log(`Your raffle number is ${num}`)
    },
    seeWinner: (num) => {
      console.log(`The winning number is ${num}`)
    }
  }),

]);

  //Second & Third level implementation

let done = false;
const players = [];
const startPlayers = async () => {
    const runPlayers = async (who) => {
        const acc = await stdlib.newTestAccount(startingBalance);
        acc.setDebugLabel(who);
        await acc.tokenAccept(nft.id);
        players.push([who, acc]);
        const ctc = acc.contract(backend, ctcAlice.getInfo());
        const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
        console.log(`${who} balance before is ${await getBal()}`);
        try {
            const num = await ctc.apis.Player.getNum(5);
            console.log(`${who} out picked ${num}.`);
           return num 
        } catch (e) {
            console.log(`${who} failed to play`);
        }
        console.log(`${who} balance after is ${await getBal()}`);
    };

    await runPlayers('john');
    await runPlayers('james');
    await runPlayers('Claire');
    while ( ! done ) {
        await stdlib.wait(1);
    }
};

await startPlayers()
console.log('Goodbye, Alice and Bob!');
