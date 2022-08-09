'reach 0.1';

const Shared = {
  getNum : Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null)
}
const amt = 1;

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
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

  const C = API('Player', {
    // Specify Bob's interact interface here
    ...Shared,
    showNum: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null),
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

    // LEVEL 2 and 3
  const bobArray = new Set();

  const [ winner, isWinningNumber, winningNumber, howmany] =
  parallelReduce([ A, true, winningNum, 0])
  .invariant(balance() == 0 && balance(nftId) == 0)
  //.invariant(bobArray.Map.size() == howmany)
  .while(false && !isWinningNumber)
  .api_(C.getNum, (num) => {
    check(!bobArray.member(this));
    return [0, (k) => {
      bobArray.insert(this);
      check(num == winningNumber)
        k(num); 
      if(num == winningNumber){
      transfer(amt, nftId).to(this)
      }else{
      transfer(amt, nftId).to(A)
      };
      return [ this, isWinningNumber, winningNumber, howmany + 1];
    }]; 
  })
  .api(C.showNum, (nx, k) => {
    k(null)
     return [ this, isWinningNumber, winningNumber, howmany];
   })
  .api(C.seeWinner, (nx, k) => {
    k(null)
     return [this, isWinningNumber, winningNumber, howmany ];
   })
  .api(C.seeOutcome, (nx, k) => {
   k(null)
    return [ this, isWinningNumber, winningNumber, howmany ];
  })
  
  commit();
  exit();
});
