'reach 0.1';

const Shared = {
  getNum : Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null)
}
const amt = 1;

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...hasRandom,
    ...Shared,
    // ticketPrice: UInt,
    // getWinningNumber: Fun([UInt], Null),
    startRaffle: Fun([], Object({
      nftId : Token,
      numTickets: UInt,
    })),
    seeHash: Fun([Digest], Null)
  });
  
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Shared,
    showNum: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null)
  });

  init();
  // The first one to publish deploys the contract
  A.only(() =>{
    const {nftId, numTickets} = declassify(interact.startRaffle())
    const _winningNum = interact.getNum(numTickets);
    const [_commitA, _saltA] = makeCommitment(interact, _winningNum)
    const commitA = declassify(_commitA)
  })
  A.publish(nftId, numTickets, commitA);
  A.interact.seeHash(commitA)
  commit();
  A.pay([[amt, nftId]])
  commit();

  unknowable(B, A(_winningNum, _saltA))
  
  // The second one to publish always attaches
  B.only(() => {
    const selectedNum = declassify(interact.getNum(numTickets))
    interact.showNum(selectedNum)
  })
  B.publish(selectedNum);
  commit();
  // write your program here

  A.only(() =>{
    const saltA = declassify(_saltA)
    const winningNum = declassify(_winningNum)
  })
  A.publish(saltA, winningNum)
  checkCommitment(commitA, saltA, winningNum)
  
  B.interact.seeWinner(winningNum)

  const outcome = (selectedNum == winningNum ? 1 : 0)
  transfer(amt, nftId).to(outcome == 0 ? A : B)

  each([A, B], () => {
    interact.seeOutcome(outcome)
  })
  commit();
  exit();
});
