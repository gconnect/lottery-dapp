// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc0, ctc3],
      6: [ctc1, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    nftId: ctc2,
    numTickets: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc6 = stdlib.T_Digest;
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    Player_getNum0_107: ctc7,
    Player_seeOutcome0_107: ctc7,
    Player_seeWinner0_107: ctc7,
    Player_showNum0_107: ctc7
    });
  const ctc9 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v556 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:41:64:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v557 = v556.nftId;
  const v558 = v556.numTickets;
  const v561 = stdlib.protect(ctc3, await interact.getNum(v558), {
    at: './index.rsh:42:40:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v562 = stdlib.protect(ctc3, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:43:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v563 = stdlib.digest(ctc5, [v562, v561]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v563],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v566, v567, v568], secs: v570, time: v569, didSend: v38, from: v565 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v566
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v566, v567, v568], secs: v570, time: v569, didSend: v38, from: v565 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v568), {
    at: './index.rsh:47:21:application',
    fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at ./index.rsh:47:21:application call to "liftedInteract" (defined at: ./index.rsh:47:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v565, v566, v568],
    evt_cnt: 0,
    funcNum: 1,
    lct: v569,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'), v566]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v581, time: v580, didSend: v49, from: v579 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v566
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v581, time: v580, didSend: v49, from: v579 } = txn2;
  ;
  ;
  const v591 = stdlib.addressEq(v565, v579);
  stdlib.assert(v591, {
    at: './index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v596], secs: v598, time: v597, didSend: v58, from: v595 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v565, v566, v568, v595, v596, v562, v561],
    evt_cnt: 2,
    funcNum: 3,
    lct: v597,
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v602, v603], secs: v605, time: v604, didSend: v68, from: v601 } = txn4;
      
      ;
      const v610 = stdlib.eq(v596, v603);
      const v611 = v610 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
      const v612 = stdlib.eq(v611, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
      const v613 = v612 ? v565 : v595;
      sim_r.txns.push({
        kind: 'from',
        to: v613,
        tok: v566
        });
      
      const v633 = v603;
      const v634 = v604;
      
      if (await (async () => {
        
        return false;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v566
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc2, ctc6, ctc9, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v602, v603], secs: v605, time: v604, didSend: v68, from: v601 } = txn4;
  ;
  const v606 = stdlib.addressEq(v565, v601);
  stdlib.assert(v606, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v607 = stdlib.digest(ctc5, [v602, v603]);
  const v608 = stdlib.digestEq(v568, v607);
  stdlib.assert(v608, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v610 = stdlib.eq(v596, v603);
  const v611 = v610 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
  const v612 = stdlib.eq(v611, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
  const v613 = v612 ? v565 : v595;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v611), {
    at: './index.rsh:76:24:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  let v633 = v603;
  let v634 = v604;
  
  while (await (async () => {
    
    return false;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn5;
    switch (v711[0]) {
      case 'Player_getNum0_107': {
        const v714 = v711[1];
        undefined /* setApiDetails */;
        const v720 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v710), null);
        let v721;
        switch (v720[0]) {
          case 'None': {
            const v722 = v720[1];
            v721 = false;
            
            break;
            }
          case 'Some': {
            const v723 = v720[1];
            v721 = true;
            
            break;
            }
          }
        const v724 = v721 ? false : true;
        stdlib.assert(v724, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
          msg: null,
          who: 'Alice'
          });
        ;
        const v730 = v714[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
        let v732;
        switch (v720[0]) {
          case 'None': {
            const v733 = v720[1];
            v732 = false;
            
            break;
            }
          case 'Some': {
            const v734 = v720[1];
            v732 = true;
            
            break;
            }
          }
        const v735 = v732 ? false : true;
        stdlib.assert(v735, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        await stdlib.mapSet(map0, v710, null);
        const v739 = stdlib.eq(v730, v633);
        stdlib.assert(v739, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        await txn5.getOutput('Player_getNum', 'v730', ctc3, v730);
        ;
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_seeOutcome0_107': {
        const v806 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v870 = null;
        await txn5.getOutput('Player_seeOutcome', 'v870', ctc0, v870);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_seeWinner0_107': {
        const v898 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v972 = null;
        await txn5.getOutput('Player_seeWinner', 'v972', ctc0, v972);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_showNum0_107': {
        const v990 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v1074 = null;
        await txn5.getOutput('Player_showNum', 'v1074', ctc0, v1074);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Data({
    Player_getNum0_107: ctc6,
    Player_seeOutcome0_107: ctc6,
    Player_seeWinner0_107: ctc6,
    Player_showNum0_107: ctc6
    });
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v566, v567, v568], secs: v570, time: v569, didSend: v38, from: v565 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v581, time: v580, didSend: v49, from: v579 } = txn2;
  ;
  ;
  const v591 = stdlib.addressEq(v565, v579);
  stdlib.assert(v591, {
    at: './index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v594 = stdlib.protect(ctc3, await interact.getNum(v567), {
    at: './index.rsh:56:51:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'getNum',
    who: 'Bob'
    });
  stdlib.protect(ctc0, await interact.showNum(v594), {
    at: './index.rsh:57:21:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'showNum',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v565, v566, v568, v594],
    evt_cnt: 1,
    funcNum: 2,
    lct: v580,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v596], secs: v598, time: v597, didSend: v58, from: v595 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc4, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v596], secs: v598, time: v597, didSend: v58, from: v595 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v602, v603], secs: v605, time: v604, didSend: v68, from: v601 } = txn4;
  ;
  const v606 = stdlib.addressEq(v565, v601);
  stdlib.assert(v606, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v607 = stdlib.digest(ctc5, [v602, v603]);
  const v608 = stdlib.digestEq(v568, v607);
  stdlib.assert(v608, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  stdlib.protect(ctc0, await interact.seeWinner(v603), {
    at: './index.rsh:70:23:application',
    fs: ['at ./index.rsh:70:23:application call to [unknown function] (defined at: ./index.rsh:70:23:function exp)', 'at ./index.rsh:70:23:application call to "liftedInteract" (defined at: ./index.rsh:70:23:application)'],
    msg: 'seeWinner',
    who: 'Bob'
    });
  
  const v610 = stdlib.eq(v596, v603);
  const v611 = v610 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
  const v612 = stdlib.eq(v611, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
  const v613 = v612 ? v565 : v595;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v611), {
    at: './index.rsh:76:24:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  let v633 = v603;
  let v634 = v604;
  
  while (await (async () => {
    
    return false;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn5;
    switch (v711[0]) {
      case 'Player_getNum0_107': {
        const v714 = v711[1];
        undefined /* setApiDetails */;
        const v720 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v710), null);
        let v721;
        switch (v720[0]) {
          case 'None': {
            const v722 = v720[1];
            v721 = false;
            
            break;
            }
          case 'Some': {
            const v723 = v720[1];
            v721 = true;
            
            break;
            }
          }
        const v724 = v721 ? false : true;
        stdlib.assert(v724, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
          msg: null,
          who: 'Bob'
          });
        ;
        const v730 = v714[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
        let v732;
        switch (v720[0]) {
          case 'None': {
            const v733 = v720[1];
            v732 = false;
            
            break;
            }
          case 'Some': {
            const v734 = v720[1];
            v732 = true;
            
            break;
            }
          }
        const v735 = v732 ? false : true;
        stdlib.assert(v735, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Bob'
          });
        await stdlib.mapSet(map0, v710, null);
        const v739 = stdlib.eq(v730, v633);
        stdlib.assert(v739, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Bob'
          });
        await txn5.getOutput('Player_getNum', 'v730', ctc3, v730);
        ;
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_seeOutcome0_107': {
        const v806 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v870 = null;
        await txn5.getOutput('Player_seeOutcome', 'v870', ctc0, v870);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_seeWinner0_107': {
        const v898 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v972 = null;
        await txn5.getOutput('Player_seeWinner', 'v972', ctc0, v972);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      case 'Player_showNum0_107': {
        const v990 = v711[1];
        undefined /* setApiDetails */;
        ;
        const v1074 = null;
        await txn5.getOutput('Player_showNum', 'v1074', ctc0, v1074);
        const cv633 = v633;
        const cv634 = v712;
        
        v633 = cv633;
        v634 = cv634;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  
  
  
  
  };
export async function _Player_getNum6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_getNum6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_getNum6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    Player_getNum0_107: ctc4,
    Player_seeOutcome0_107: ctc4,
    Player_seeWinner0_107: ctc4,
    Player_showNum0_107: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v566, v633] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v681 = ctc.selfAddress();
  const v683 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to "runPlayer_getNum0_107" (defined at: ./index.rsh:87:8:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Player_getNum'
    });
  const v686 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v681), null);
  let v687;
  switch (v686[0]) {
    case 'None': {
      const v688 = v686[1];
      v687 = false;
      
      break;
      }
    case 'Some': {
      const v689 = v686[1];
      v687 = true;
      
      break;
      }
    }
  const v690 = v687 ? false : true;
  stdlib.assert(v690, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to "runPlayer_getNum0_107" (defined at: ./index.rsh:87:8:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: null,
    who: 'Player_getNum'
    });
  const v697 = ['Player_getNum0_107', v683];
  
  let v702;
  switch (v686[0]) {
    case 'None': {
      const v703 = v686[1];
      v702 = false;
      
      break;
      }
    case 'Some': {
      const v704 = v686[1];
      v702 = true;
      
      break;
      }
    }
  const v705 = v702 ? false : true;
  stdlib.assert(v705, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: null,
    who: 'Player_getNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v566, v633, v697],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
      
      switch (v711[0]) {
        case 'Player_getNum0_107': {
          const v714 = v711[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_getNum"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v710), null);
          ;
          const v730 = v714[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v710, null);
          const v741 = await txn1.getOutput('Player_getNum', 'v730', ctc3, v730);
          
          sim_r.txns.push({
            kind: 'from',
            to: v710,
            tok: v566
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v566
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Player_seeOutcome0_107': {
          const v806 = v711[1];
          
          break;
          }
        case 'Player_seeWinner0_107': {
          const v898 = v711[1];
          
          break;
          }
        case 'Player_showNum0_107': {
          const v990 = v711[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
  switch (v711[0]) {
    case 'Player_getNum0_107': {
      const v714 = v711[1];
      undefined /* setApiDetails */;
      const v720 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v710), null);
      let v721;
      switch (v720[0]) {
        case 'None': {
          const v722 = v720[1];
          v721 = false;
          
          break;
          }
        case 'Some': {
          const v723 = v720[1];
          v721 = true;
          
          break;
          }
        }
      const v724 = v721 ? false : true;
      stdlib.assert(v724, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
        msg: null,
        who: 'Player_getNum'
        });
      ;
      const v730 = v714[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
      let v732;
      switch (v720[0]) {
        case 'None': {
          const v733 = v720[1];
          v732 = false;
          
          break;
          }
        case 'Some': {
          const v734 = v720[1];
          v732 = true;
          
          break;
          }
        }
      const v735 = v732 ? false : true;
      stdlib.assert(v735, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
        msg: null,
        who: 'Player_getNum'
        });
      await stdlib.mapSet(map0, v710, null);
      const v739 = stdlib.eq(v730, v633);
      stdlib.assert(v739, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
        msg: null,
        who: 'Player_getNum'
        });
      const v741 = await txn1.getOutput('Player_getNum', 'v730', ctc3, v730);
      if (v344) {
        stdlib.protect(ctc0, await interact.out(v714, v741), {
          at: './index.rsh:87:9:application',
          fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:9:function exp)', 'at ./index.rsh:92:10:application call to "k" (defined at: ./index.rsh:89:20:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: 'out',
          who: 'Player_getNum'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    case 'Player_seeOutcome0_107': {
      const v806 = v711[1];
      return;
      break;
      }
    case 'Player_seeWinner0_107': {
      const v898 = v711[1];
      return;
      break;
      }
    case 'Player_showNum0_107': {
      const v990 = v711[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_seeOutcome6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeOutcome6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeOutcome6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    Player_getNum0_107: ctc4,
    Player_seeOutcome0_107: ctc4,
    Player_seeWinner0_107: ctc4,
    Player_showNum0_107: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v566, v633] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v672 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:7:function exp)', 'at ./index.rsh:83:17:application call to "runPlayer_seeOutcome0_107" (defined at: ./index.rsh:109:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Player_seeOutcome'
    });
  const v679 = ['Player_seeOutcome0_107', v672];
  
  const txn1 = await (ctc.sendrecv({
    args: [v566, v633, v679],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:109:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
      
      switch (v711[0]) {
        case 'Player_getNum0_107': {
          const v714 = v711[1];
          
          break;
          }
        case 'Player_seeOutcome0_107': {
          const v806 = v711[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_seeOutcome"
            });
          ;
          const v870 = null;
          const v871 = await txn1.getOutput('Player_seeOutcome', 'v870', ctc0, v870);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v566
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Player_seeWinner0_107': {
          const v898 = v711[1];
          
          break;
          }
        case 'Player_showNum0_107': {
          const v990 = v711[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
  switch (v711[0]) {
    case 'Player_getNum0_107': {
      const v714 = v711[1];
      return;
      break;
      }
    case 'Player_seeOutcome0_107': {
      const v806 = v711[1];
      undefined /* setApiDetails */;
      ;
      const v870 = null;
      const v871 = await txn1.getOutput('Player_seeOutcome', 'v870', ctc0, v870);
      if (v344) {
        stdlib.protect(ctc0, await interact.out(v806, v871), {
          at: './index.rsh:109:8:application',
          fs: ['at ./index.rsh:109:8:application call to [unknown function] (defined at: ./index.rsh:109:8:function exp)', 'at ./index.rsh:110:5:application call to "k" (defined at: ./index.rsh:109:30:function exp)', 'at ./index.rsh:109:30:application call to [unknown function] (defined at: ./index.rsh:109:30:function exp)'],
          msg: 'out',
          who: 'Player_seeOutcome'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Player_seeWinner0_107': {
      const v898 = v711[1];
      return;
      break;
      }
    case 'Player_showNum0_107': {
      const v990 = v711[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_seeWinner6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_seeWinner6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_seeWinner6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    Player_getNum0_107: ctc4,
    Player_seeOutcome0_107: ctc4,
    Player_seeWinner0_107: ctc4,
    Player_showNum0_107: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v566, v633] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v661 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:105:7:application call to [unknown function] (defined at: ./index.rsh:105:7:function exp)', 'at ./index.rsh:83:17:application call to "runPlayer_seeWinner0_107" (defined at: ./index.rsh:105:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Player_seeWinner'
    });
  const v668 = ['Player_seeWinner0_107', v661];
  
  const txn1 = await (ctc.sendrecv({
    args: [v566, v633, v668],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
      
      switch (v711[0]) {
        case 'Player_getNum0_107': {
          const v714 = v711[1];
          
          break;
          }
        case 'Player_seeOutcome0_107': {
          const v806 = v711[1];
          
          break;
          }
        case 'Player_seeWinner0_107': {
          const v898 = v711[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_seeWinner"
            });
          ;
          const v972 = null;
          const v973 = await txn1.getOutput('Player_seeWinner', 'v972', ctc0, v972);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v566
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Player_showNum0_107': {
          const v990 = v711[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
  switch (v711[0]) {
    case 'Player_getNum0_107': {
      const v714 = v711[1];
      return;
      break;
      }
    case 'Player_seeOutcome0_107': {
      const v806 = v711[1];
      return;
      break;
      }
    case 'Player_seeWinner0_107': {
      const v898 = v711[1];
      undefined /* setApiDetails */;
      ;
      const v972 = null;
      const v973 = await txn1.getOutput('Player_seeWinner', 'v972', ctc0, v972);
      if (v344) {
        stdlib.protect(ctc0, await interact.out(v898, v973), {
          at: './index.rsh:105:8:application',
          fs: ['at ./index.rsh:105:8:application call to [unknown function] (defined at: ./index.rsh:105:8:function exp)', 'at ./index.rsh:106:6:application call to "k" (defined at: ./index.rsh:105:29:function exp)', 'at ./index.rsh:105:29:application call to [unknown function] (defined at: ./index.rsh:105:29:function exp)'],
          msg: 'out',
          who: 'Player_seeWinner'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Player_showNum0_107': {
      const v990 = v711[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_showNum6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_showNum6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_showNum6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    Player_getNum0_107: ctc4,
    Player_seeOutcome0_107: ctc4,
    Player_seeWinner0_107: ctc4,
    Player_showNum0_107: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v566, v633] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v650 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:101:7:application call to [unknown function] (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:83:17:application call to "runPlayer_showNum0_107" (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Player_showNum'
    });
  const v657 = ['Player_showNum0_107', v650];
  
  const txn1 = await (ctc.sendrecv({
    args: [v566, v633, v657],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
      
      switch (v711[0]) {
        case 'Player_getNum0_107': {
          const v714 = v711[1];
          
          break;
          }
        case 'Player_seeOutcome0_107': {
          const v806 = v711[1];
          
          break;
          }
        case 'Player_seeWinner0_107': {
          const v898 = v711[1];
          
          break;
          }
        case 'Player_showNum0_107': {
          const v990 = v711[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_showNum"
            });
          ;
          const v1074 = null;
          const v1075 = await txn1.getOutput('Player_showNum', 'v1074', ctc0, v1074);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v566
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v711], secs: v713, time: v712, didSend: v344, from: v710 } = txn1;
  switch (v711[0]) {
    case 'Player_getNum0_107': {
      const v714 = v711[1];
      return;
      break;
      }
    case 'Player_seeOutcome0_107': {
      const v806 = v711[1];
      return;
      break;
      }
    case 'Player_seeWinner0_107': {
      const v898 = v711[1];
      return;
      break;
      }
    case 'Player_showNum0_107': {
      const v990 = v711[1];
      undefined /* setApiDetails */;
      ;
      const v1074 = null;
      const v1075 = await txn1.getOutput('Player_showNum', 'v1074', ctc0, v1074);
      if (v344) {
        stdlib.protect(ctc0, await interact.out(v990, v1075), {
          at: './index.rsh:101:8:application',
          fs: ['at ./index.rsh:101:8:application call to [unknown function] (defined at: ./index.rsh:101:8:function exp)', 'at ./index.rsh:102:6:application call to "k" (defined at: ./index.rsh:101:27:function exp)', 'at ./index.rsh:101:27:application call to [unknown function] (defined at: ./index.rsh:101:27:function exp)'],
          msg: 'out',
          who: 'Player_showNum'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function Player_getNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_getNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_getNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Player_getNum6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Player_seeOutcome6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Player_seeWinner6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_showNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_showNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_showNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Player_showNum6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Player_getNum(uint64)uint64`, `Player_seeOutcome(uint64)byte[0]`, `Player_seeWinner(uint64)byte[0]`, `Player_showNum(uint64)byte[0]`],
    pure: [],
    sigs: [`Player_getNum(uint64)uint64`, `Player_seeOutcome(uint64)byte[0]`, `Player_seeWinner(uint64)byte[0]`, `Player_showNum(uint64)byte[0]`]
    },
  appApproval: `BiAMAAEDAgQIBSD69c3WCoqzrvcPs++HtQqgjQYmAwEAAAEBIjUAMRhBA88pZEkiWzUBIQVbNQIxGSMSQQAIMQAoKGZCA502GgAXSUEAYyI1BCM1BkkhCAxAAClJIQkMQAASIQkSRDYaATX/gAEDNP9QQgBhIQgSRDYaATX/KjT/UEIAUUkhCgxAABIhChJENhoBNf+AAQI0/1BCADiBitnE7wQSRDYaATX/KDT/UEIAJDYaAhc1BDYaAzYaARdJJQxAAftJJAxAAZtJIQYMQAEQIQYSRIEGNAESRDQESSISTDQCEhFEKGRJNQNJIls1/yEFWzX+STUFNf2ABACscs00/VCwNP0iVUklDEAAOEkkDEAAGiQSRIAIAAAAAAAABDKwKTUHNP80/jIGQgJbSIAIAAAAAAAAA8ywKTUHNP80/jIGQgJDSSMMQAAYSIAIAAAAAAAAA2awKTUHNP80/jIGQgIlSDT9VwEINfwxAIgCpkk1+yJVQAAGIjX6QgAGIzX6QgAANPoURDT8FzX5NPsiVUAABiI1+EIABiM1+EIAADT4FEQxACgqZjT5NP4SRIAIAAAAAAAAAto0+RZQsDT5FjUHsSKyASOyEiEEshAxALIUNP+yEbM0/zT+MgZCAagkEkQkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/kk1BUkiWzX9IQVbNfyABKSl8Ig0/RZQNPwWULA0/zEAEkQ0A1coIDT9FjT8FlABEkSxIrIBI7ISIQSyEDQDV0ggNP8iIzQDgWhbNPwSTSISTbIUNP6yEbM0/jT8MgZCASRIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEHWzX+VyggNf1JNQUXNfyABJdO9xc0/BZQsDT/NP4WUDT9UDEAUDT8FlAoSwFXAHBnSCQ1ATIGNQJCAQdJIwxAAFVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEHWzX+VyggNf2ABJqLkXSwIzT+iAFDNP8xABJENP80/hZQNP1QKEsBVwBIZ0glNQEyBjUCQgCsSCELiAEEIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEFWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULAhC4gAyrEisgEishIhBLIQMgqyFDT/shGzMQA0/xZQNP1QKEsBVwBIZ0gjNQEyBjUCQgA9Nf81/jX9sSKyASKyEiEEshAyCbIVMgqyFDT9shGzQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v566",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v567",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v568",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v566",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v567",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v568",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v596",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v602",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_getNum0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_seeOutcome0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_seeWinner0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_showNum0_107",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v711",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1074",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v730",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v870",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v972",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_getNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_seeOutcome",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_seeWinner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Player_showNum",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v596",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v602",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_getNum0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_seeOutcome0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_seeWinner0_107",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_Player_showNum0_107",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v711",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001c5c38038062001c5c833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b611931806200032b6000396000f3fe6080604052600436106100a55760003560e01c80636b18dcc9116100615780636b18dcc91461015b578063832307571461016e578063ab53f2c614610183578063ad2d91d1146101a6578063b26072a7146101b9578063fe9d2ca1146101cc57005b806306cba579146100ae5780631e93b0f1146100d65780632c10a159146100f55780633bc5b7bf1461010857806345f703961461013557806354a858b41461014857005b366100ac57005b005b6100c16100bc36600461131a565b6101df565b60405190151581526020015b60405180910390f35b3480156100e257600080fd5b506003545b6040519081526020016100cd565b6100ac61010336600461134b565b61021a565b34801561011457600080fd5b5061012861012336600461137c565b61023e565b6040516100cd91906113af565b6100ac61014336600461134b565b610255565b6100e761015636600461131a565b610275565b6100c161016936600461131a565b6102ac565b34801561017a57600080fd5b506001546100e7565b34801561018f57600080fd5b506101986102e7565b6040516100cd929190611414565b6100ac6101b436600461144e565b610384565b6100c16101c736600461131a565b6103a4565b6100ac6101da366004611460565b6103df565b60006101e96110f8565b6020810180515160019052515160400151839052610205611117565b61020f82826103fb565b602001519392505050565b610222611117565b61023a61023436849003840184611519565b82610835565b5050565b61024661113e565b61024f82610a1b565b92915050565b61025d611117565b61023a61026f368490038401846115a1565b82610ade565b600061027f6110f8565b6020818101805151600090525151015183905261029a611117565b6102a482826103fb565b519392505050565b60006102b66110f8565b60208101805151600390525151608001518390526102d2611117565b6102dc82826103fb565b606001519392505050565b6000606060005460028080546102fc906115cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610328906115cc565b80156103755780601f1061034a57610100808354040283529160200191610375565b820191906000526020600020905b81548152906001019060200180831161035857829003601f168201915b50505050509050915091509091565b61038c611117565b61023a61039e36849003840184611601565b82610c94565b60006103ae6110f8565b60208101805151600290525151606001518390526103ca611117565b6103d482826103fb565b604001519392505050565b6103e7611117565b61023a6103f93684900384018461165b565b825b61040b600660005414601c610ea2565b815161042690158061041f57508251600154145b601d610ea2565b600080805560028054610438906115cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610464906115cc565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c9919061170b565b90506104d3611161565b7f6d28439abee2373024dcb5b31582c8148d00bae027ea9d8171dfb6c0702e4a853385604051610504929190611745565b60405180910390a1600060208501515151600381111561052657610526611399565b14156106e357602080850151510151815261054033610a1b565b6020820181905251600090600181111561055c5761055c611399565b141561056e5760006040820152610595565b6001602082015151600181111561058757610587611399565b141561059557600160408201525b6105b281604001516105a85760016105ab565b60005b6015610ea2565b6105be34156016610ea2565b600060208201515160018111156105d7576105d7611399565b14156105e95760006060820152610610565b6001602082015151600181111561060257610602611399565b141561061057600160608201525b61062d8160600151610623576001610626565b60005b6017610ea2565b336000908152600460209081526040909120805462ff00ff1916600117905582015181515161065e91146018610ea2565b8051516040519081527ffbfe9014637b277c0ab244b88e3289cdbc8c2ff7d887065bc71394f51647dfc59060200160405180910390a1805151835281516106a790336001610ec8565b6106af611183565b825181516001600160a01b03909116905260208084015181830180519190915251439101526106dd81610ee1565b5061082f565b60016020850151515160038111156106fd576106fd611399565b14156107525761070f34156019610ea2565b604051600081527f24de3d403f51f9e385f28a86918ef394fd3947cf7aec3e0229f0bd6bf824ad7d9060200160405180910390a1600060208401526106af611183565b600260208501515151600381111561076c5761076c611399565b14156107c05761077e3415601a610ea2565b604051600081527eb22ab2641e5017bea95effae258a934db2f58f13331bec664eae4047479d619060200160405180910390a1600060408401526106af611183565b60036020850151515160038111156107da576107da611399565b141561082f576107ec3415601b610ea2565b604051600081527fa16e02d7bbbcabc8453e40343384df419e54c5a83f94485b90d2b96eba60a73d9060200160405180910390a1600060608401526106af611183565b50505050565b610845600160005414600b610ea2565b815161086090158061085957508251600154145b600c610ea2565b600080805560028054610872906115cc565b80601f016020809104026020016040519081016040528092919081815260200182805461089e906115cc565b80156108eb5780601f106108c0576101008083540402835291602001916108eb565b820191906000526020600020905b8154815290600101906020018083116108ce57829003601f168201915b505050505080602001905181019061090391906117b3565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161095a34156008610ea2565b61097461096d3383602001516001610efa565b6009610ea2565b805161098c906001600160a01b03163314600a610ea2565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b60405160208183030381529060405260029080519060200190610a149291906111ba565b5050505050565b610a2361113e565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610a5257610a52611399565b1415610acf576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a9357610a93611399565b6001811115610aa457610aa4611399565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610aee600260005414600e610ea2565b8151610b09901580610b0257508251600154145b600f610ea2565b600080805560028054610b1b906115cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610b47906115cc565b8015610b945780601f10610b6957610100808354040283529160200191610b94565b820191906000526020600020905b815481529060010190602001808311610b7757829003601f168201915b5050505050806020019051810190610bac91906117b3565b604080513381528551602080830191909152860151518183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a1610c023415600d610ea2565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528f8901515183526003909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c0016109f0565b610ca46003600054146013610ea2565b8151610cbf901580610cb857508251600154145b6014610ea2565b600080805560028054610cd1906115cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610cfd906115cc565b8015610d4a5780601f10610d1f57610100808354040283529160200191610d4a565b820191906000526020600020905b815481529060010190602001808311610d2d57829003601f168201915b5050505050806020019051810190610d62919061182c565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610dc134156010610ea2565b8051610dd9906001600160a01b031633146011610ea2565b602080840151805190820151604051610e2793610e0193929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146012610ea2565b610e6781602001516000856020015160200151846080015114610e4b576000610e4e565b60015b14610e5d578260600151610e60565b82515b6001610ec8565b610e6f611183565b60208083015182516001600160a01b03909116905284810151810151828201805191909152514391015261082f81610ee1565b8161023a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610ed3838383610f12565b610edc57600080fd5b505050565b60008080556001819055610ef79060029061123e565b50565b6000610f0883853085610fe3565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610f71916118c2565b60006040518083038185875af1925050503d8060008114610fae576040519150601f19603f3d011682016040523d82523d6000602084013e610fb3565b606091505b5091509150610fc4828260026110bd565b5080806020019051810190610fd991906118de565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161104a916118c2565b60006040518083038185875af1925050503d8060008114611087576040519150601f19603f3d011682016040523d82523d6000602084013e61108c565b606091505b509150915061109d828260016110bd565b50808060200190518101906110b291906118de565b979650505050505050565b606083156110cc575081610f0b565b8251156110dc5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ebf565b604051806040016040528060008152602001611112611278565b905290565b60408051608081018252600080825260208201819052918101829052606081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b6040805160a0810190915260006080820190815281526020810161114d61113e565b6040805160608101825260009181019182529081908152602001611112604051806040016040528060008152602001600081525090565b8280546111c6906115cc565b90600052602060002090601f0160209004810192826111e8576000855561122e565b82601f1061120157805160ff191683800117855561122e565b8280016001018555821561122e579182015b8281111561122e578251825591602001919060010190611213565b5061123a92915061128b565b5090565b50805461124a906115cc565b6000825580601f1061125a575050565b601f016020900490600052602060002090810190610ef7919061128b565b60405180602001604052806111126112a0565b5b8082111561123a576000815560010161128c565b6040805160a0810190915280600081526020016112c96040518060200160405280600081525090565b81526020016112e46040518060200160405280600081525090565b81526020016112ff6040518060200160405280600081525090565b81526020016111126040518060200160405280600081525090565b60006020828403121561132c57600080fd5b5035919050565b60006040828403121561134557600080fd5b50919050565b60006040828403121561135d57600080fd5b610f0b8383611333565b6001600160a01b0381168114610ef757600080fd5b60006020828403121561138e57600080fd5b8135610f0b81611367565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106113c6576113c6611399565b8083525060208301511515602083015260408301511515604083015292915050565b60005b838110156114035781810151838201526020016113eb565b8381111561082f5750506000910152565b82815260406020820152600082518060408401526114398160608501602087016113e8565b601f01601f1916919091016060019392505050565b60006060828403121561134557600080fd5b600060c0828403121561134557600080fd5b6040805190810167ffffffffffffffff811182821017156114a357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156114a357634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156114a357634e487b7160e01b600052604160045260246000fd5b8015158114610ef757600080fd5b60006040828403121561152b57600080fd5b611533611472565b8235815260208301356115458161150b565b60208201529392505050565b60006020828403121561156357600080fd5b6040516020810181811067ffffffffffffffff8211171561159457634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b6000604082840312156115b357600080fd5b6115bb611472565b823581526115458460208501611551565b600181811c908216806115e057607f821691505b6020821081141561134557634e487b7160e01b600052602260045260246000fd5b6000818303606081121561161457600080fd5b61161c611472565b833581526040601f198301121561163257600080fd5b61163a611472565b60208581013582526040909501358582015293810193909352509092915050565b600081830360c081121561166e57600080fd5b611676611472565b8335815260a0601f198301121561168c57600080fd5b6116946114a9565b915061169e6114da565b6020850135600481106116b057600080fd5b81526116bf8660408701611551565b60208201526116d18660608701611551565b60408201526116e38660808701611551565b60608201526116f58660a08701611551565b6080820152825260208101919091529392505050565b60006040828403121561171d57600080fd5b611725611472565b825161173081611367565b81526020928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061177857611778611399565b806040850152506020810151516060840152604081015151608084015260608101515160a084015260808101515160c0840152509392505050565b6000606082840312156117c557600080fd5b6040516060810181811067ffffffffffffffff821117156117f657634e487b7160e01b600052604160045260246000fd5b604052825161180481611367565b8152602083015161181481611367565b60208201526040928301519281019290925250919050565b600060a0828403121561183e57600080fd5b60405160a0810181811067ffffffffffffffff8211171561186f57634e487b7160e01b600052604160045260246000fd5b604052825161187d81611367565b8152602083015161188d81611367565b60208201526040838101519082015260608301516118aa81611367565b60608201526080928301519281019290925250919050565b600082516118d48184602087016113e8565b9190910192915050565b6000602082840312156118f057600080fd5b8151610f0b8161150b56fea264697066735822122002a1686ef438294c1d184ce68e1289c298e4af0317f6973ecb76f29999b4ff9664736f6c634300080c0033`,
  BytecodeLen: 7260,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:83:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "Player_getNum": Player_getNum,
  "Player_seeOutcome": Player_seeOutcome,
  "Player_seeWinner": Player_seeWinner,
  "Player_showNum": Player_showNum
  };
export const _APIs = {
  Player: {
    getNum: Player_getNum,
    seeOutcome: Player_seeOutcome,
    seeWinner: Player_seeWinner,
    showNum: Player_showNum
    }
  };
