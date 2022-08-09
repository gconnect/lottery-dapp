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
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc5
    });
  const map0_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc0, ctc3],
      6: [ctc1, ctc4]
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
    Bobs_getNum0_126: ctc7,
    Bobs_seeOutcome0_126: ctc7,
    Bobs_seeWinner0_126: ctc7,
    Bobs_showNum0_126: ctc7
    });
  const ctc9 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v486 = stdlib.protect(ctc4, await interact.startRaffle(), {
    at: './index.rsh:41:64:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v487 = v486.nftId;
  const v488 = v486.numTickets;
  const v491 = stdlib.protect(ctc3, await interact.getNum(v488), {
    at: './index.rsh:42:40:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v492 = stdlib.protect(ctc3, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:43:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v493 = stdlib.digest(ctc5, [v492, v491]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v487, v488, v493],
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
      
      const {data: [v496, v497, v498], secs: v500, time: v499, didSend: v38, from: v495 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v496
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
  const {data: [v496, v497, v498], secs: v500, time: v499, didSend: v38, from: v495 } = txn1;
  ;
  ;
  stdlib.protect(ctc0, await interact.seeHash(v498), {
    at: './index.rsh:47:21:application',
    fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at ./index.rsh:47:21:application call to "liftedInteract" (defined at: ./index.rsh:47:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v495, v496, v498],
    evt_cnt: 0,
    funcNum: 1,
    lct: v499,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'), v496]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v511, time: v510, didSend: v49, from: v509 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v496
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v511, time: v510, didSend: v49, from: v509 } = txn2;
  ;
  ;
  const v521 = stdlib.addressEq(v495, v509);
  stdlib.assert(v521, {
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
  const {data: [v526], secs: v528, time: v527, didSend: v58, from: v525 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v495, v496, v498, v525, v526, v492, v491],
    evt_cnt: 2,
    funcNum: 3,
    lct: v527,
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v532, v533], secs: v535, time: v534, didSend: v68, from: v531 } = txn4;
      
      ;
      const v540 = stdlib.eq(v526, v533);
      const v541 = v540 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
      const v542 = stdlib.eq(v541, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
      const v543 = v542 ? v495 : v525;
      sim_r.txns.push({
        kind: 'from',
        to: v543,
        tok: v496
        });
      
      const v561 = true;
      const v562 = v534;
      
      if (await (async () => {
        const v584 = v561 ? false : true;
        
        return v584;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v496
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
  const {data: [v532, v533], secs: v535, time: v534, didSend: v68, from: v531 } = txn4;
  ;
  const v536 = stdlib.addressEq(v495, v531);
  stdlib.assert(v536, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v537 = stdlib.digest(ctc5, [v532, v533]);
  const v538 = stdlib.digestEq(v498, v537);
  stdlib.assert(v538, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v540 = stdlib.eq(v526, v533);
  const v541 = v540 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
  const v542 = stdlib.eq(v541, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
  const v543 = v542 ? v495 : v525;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v541), {
    at: './index.rsh:76:24:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  let v561 = true;
  let v562 = v534;
  
  while (await (async () => {
    const v584 = v561 ? false : true;
    
    return v584;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn5;
    switch (v648[0]) {
      case 'Bobs_getNum0_126': {
        const v651 = v648[1];
        undefined /* setApiDetails */;
        const v657 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v647), null);
        let v658;
        switch (v657[0]) {
          case 'None': {
            const v659 = v657[1];
            v658 = false;
            
            break;
            }
          case 'Some': {
            const v660 = v657[1];
            v658 = true;
            
            break;
            }
          }
        const v661 = v658 ? false : true;
        stdlib.assert(v661, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
          msg: null,
          who: 'Alice'
          });
        ;
        const v667 = v651[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
        let v669;
        switch (v657[0]) {
          case 'None': {
            const v670 = v657[1];
            v669 = false;
            
            break;
            }
          case 'Some': {
            const v671 = v657[1];
            v669 = true;
            
            break;
            }
          }
        const v672 = v669 ? false : true;
        stdlib.assert(v672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Alice'
          });
        await stdlib.mapSet(map0, v647, null);
        await txn5.getOutput('Bobs_getNum', 'v667', ctc3, v667);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_seeOutcome0_126': {
        const v714 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v749 = null;
        await txn5.getOutput('Bobs_seeOutcome', 'v749', ctc0, v749);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_seeWinner0_126': {
        const v777 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v822 = null;
        await txn5.getOutput('Bobs_seeWinner', 'v822', ctc0, v822);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_showNum0_126': {
        const v840 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v895 = null;
        await txn5.getOutput('Bobs_showNum', 'v895', ctc0, v895);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
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
    Bobs_getNum0_126: ctc6,
    Bobs_seeOutcome0_126: ctc6,
    Bobs_seeWinner0_126: ctc6,
    Bobs_showNum0_126: ctc6
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
  const {data: [v496, v497, v498], secs: v500, time: v499, didSend: v38, from: v495 } = txn1;
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
  const {data: [], secs: v511, time: v510, didSend: v49, from: v509 } = txn2;
  ;
  ;
  const v521 = stdlib.addressEq(v495, v509);
  stdlib.assert(v521, {
    at: './index.rsh:49:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v524 = stdlib.protect(ctc3, await interact.getNum(v497), {
    at: './index.rsh:56:51:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'getNum',
    who: 'Bob'
    });
  stdlib.protect(ctc0, await interact.showNum(v524), {
    at: './index.rsh:57:21:application',
    fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:13:function exp)'],
    msg: 'showNum',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v495, v496, v498, v524],
    evt_cnt: 1,
    funcNum: 2,
    lct: v510,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v526], secs: v528, time: v527, didSend: v58, from: v525 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc4, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v526], secs: v528, time: v527, didSend: v58, from: v525 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v532, v533], secs: v535, time: v534, didSend: v68, from: v531 } = txn4;
  ;
  const v536 = stdlib.addressEq(v495, v531);
  stdlib.assert(v536, {
    at: './index.rsh:67:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v537 = stdlib.digest(ctc5, [v532, v533]);
  const v538 = stdlib.digestEq(v498, v537);
  stdlib.assert(v538, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  stdlib.protect(ctc0, await interact.seeWinner(v533), {
    at: './index.rsh:70:23:application',
    fs: ['at ./index.rsh:70:23:application call to [unknown function] (defined at: ./index.rsh:70:23:function exp)', 'at ./index.rsh:70:23:application call to "liftedInteract" (defined at: ./index.rsh:70:23:application)'],
    msg: 'seeWinner',
    who: 'Bob'
    });
  
  const v540 = stdlib.eq(v526, v533);
  const v541 = v540 ? stdlib.checkedBigNumberify('./index.rsh:72:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:72:52:decimal', stdlib.UInt_max, '0');
  const v542 = stdlib.eq(v541, stdlib.checkedBigNumberify('./index.rsh:73:38:decimal', stdlib.UInt_max, '0'));
  const v543 = v542 ? v495 : v525;
  ;
  stdlib.protect(ctc0, await interact.seeOutcome(v541), {
    at: './index.rsh:76:24:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  let v561 = true;
  let v562 = v534;
  
  while (await (async () => {
    const v584 = v561 ? false : true;
    
    return v584;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn5;
    switch (v648[0]) {
      case 'Bobs_getNum0_126': {
        const v651 = v648[1];
        undefined /* setApiDetails */;
        const v657 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v647), null);
        let v658;
        switch (v657[0]) {
          case 'None': {
            const v659 = v657[1];
            v658 = false;
            
            break;
            }
          case 'Some': {
            const v660 = v657[1];
            v658 = true;
            
            break;
            }
          }
        const v661 = v658 ? false : true;
        stdlib.assert(v661, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
          msg: null,
          who: 'Bob'
          });
        ;
        const v667 = v651[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
        let v669;
        switch (v657[0]) {
          case 'None': {
            const v670 = v657[1];
            v669 = false;
            
            break;
            }
          case 'Some': {
            const v671 = v657[1];
            v669 = true;
            
            break;
            }
          }
        const v672 = v669 ? false : true;
        stdlib.assert(v672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: null,
          who: 'Bob'
          });
        await stdlib.mapSet(map0, v647, null);
        await txn5.getOutput('Bobs_getNum', 'v667', ctc3, v667);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_seeOutcome0_126': {
        const v714 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v749 = null;
        await txn5.getOutput('Bobs_seeOutcome', 'v749', ctc0, v749);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_seeWinner0_126': {
        const v777 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v822 = null;
        await txn5.getOutput('Bobs_seeWinner', 'v822', ctc0, v822);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      case 'Bobs_showNum0_126': {
        const v840 = v648[1];
        undefined /* setApiDetails */;
        ;
        const v895 = null;
        await txn5.getOutput('Bobs_showNum', 'v895', ctc0, v895);
        const cv561 = v561;
        const cv562 = v649;
        
        v561 = cv561;
        v562 = cv562;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  
  
  
  
  };
export async function _Bobs_getNum6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_getNum6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_getNum6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Bobs_getNum0_126: ctc5,
    Bobs_seeOutcome0_126: ctc5,
    Bobs_seeWinner0_126: ctc5,
    Bobs_showNum0_126: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v496, v561] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v618 = ctc.selfAddress();
  const v620 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to "runBobs_getNum0_126" (defined at: ./index.rsh:87:8:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Bobs_getNum'
    });
  const v623 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v618), null);
  let v624;
  switch (v623[0]) {
    case 'None': {
      const v625 = v623[1];
      v624 = false;
      
      break;
      }
    case 'Some': {
      const v626 = v623[1];
      v624 = true;
      
      break;
      }
    }
  const v627 = v624 ? false : true;
  stdlib.assert(v627, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to "runBobs_getNum0_126" (defined at: ./index.rsh:87:8:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: null,
    who: 'Bobs_getNum'
    });
  const v634 = ['Bobs_getNum0_126', v620];
  
  let v639;
  switch (v623[0]) {
    case 'None': {
      const v640 = v623[1];
      v639 = false;
      
      break;
      }
    case 'Some': {
      const v641 = v623[1];
      v639 = true;
      
      break;
      }
    }
  const v642 = v639 ? false : true;
  stdlib.assert(v642, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: null,
    who: 'Bobs_getNum'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v496, v561, v634],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
      
      switch (v648[0]) {
        case 'Bobs_getNum0_126': {
          const v651 = v648[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_getNum"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v647), null);
          ;
          const v667 = v651[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v647, null);
          const v676 = await txn1.getOutput('Bobs_getNum', 'v667', ctc4, v667);
          
          const v2283 = v561;
          if (v561) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bobs_seeOutcome0_126': {
          const v714 = v648[1];
          
          break;
          }
        case 'Bobs_seeWinner0_126': {
          const v777 = v648[1];
          
          break;
          }
        case 'Bobs_showNum0_126': {
          const v840 = v648[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
  switch (v648[0]) {
    case 'Bobs_getNum0_126': {
      const v651 = v648[1];
      undefined /* setApiDetails */;
      const v657 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v647), null);
      let v658;
      switch (v657[0]) {
        case 'None': {
          const v659 = v657[1];
          v658 = false;
          
          break;
          }
        case 'Some': {
          const v660 = v657[1];
          v658 = true;
          
          break;
          }
        }
      const v661 = v658 ? false : true;
      stdlib.assert(v661, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:87:25:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:87:25:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
        msg: null,
        who: 'Bobs_getNum'
        });
      ;
      const v667 = v651[stdlib.checkedBigNumberify('./index.rsh:87:8:spread', stdlib.UInt_max, '0')];
      let v669;
      switch (v657[0]) {
        case 'None': {
          const v670 = v657[1];
          v669 = false;
          
          break;
          }
        case 'Some': {
          const v671 = v657[1];
          v669 = true;
          
          break;
          }
        }
      const v672 = v669 ? false : true;
      stdlib.assert(v672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:88:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
        msg: null,
        who: 'Bobs_getNum'
        });
      await stdlib.mapSet(map0, v647, null);
      const v676 = await txn1.getOutput('Bobs_getNum', 'v667', ctc4, v667);
      if (v363) {
        stdlib.protect(ctc0, await interact.out(v651, v676), {
          at: './index.rsh:87:9:application',
          fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:9:function exp)', 'at ./index.rsh:91:8:application call to "k" (defined at: ./index.rsh:89:20:function exp)', 'at ./index.rsh:89:20:application call to [unknown function] (defined at: ./index.rsh:89:20:function exp)'],
          msg: 'out',
          who: 'Bobs_getNum'
          });
        }
      else {
        }
      
      const v2283 = v561;
      if (v561) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Bobs_seeOutcome0_126': {
      const v714 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeWinner0_126': {
      const v777 = v648[1];
      return;
      break;
      }
    case 'Bobs_showNum0_126': {
      const v840 = v648[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bobs_seeOutcome6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_seeOutcome6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Bobs_getNum0_126: ctc5,
    Bobs_seeOutcome0_126: ctc5,
    Bobs_seeWinner0_126: ctc5,
    Bobs_showNum0_126: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v496, v561] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v609 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:104:7:application call to [unknown function] (defined at: ./index.rsh:104:7:function exp)', 'at ./index.rsh:83:17:application call to "runBobs_seeOutcome0_126" (defined at: ./index.rsh:104:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Bobs_seeOutcome'
    });
  const v616 = ['Bobs_seeOutcome0_126', v609];
  
  const txn1 = await (ctc.sendrecv({
    args: [v496, v561, v616],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:104:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
      
      switch (v648[0]) {
        case 'Bobs_getNum0_126': {
          const v651 = v648[1];
          
          break;
          }
        case 'Bobs_seeOutcome0_126': {
          const v714 = v648[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_seeOutcome"
            });
          ;
          const v749 = null;
          const v750 = await txn1.getOutput('Bobs_seeOutcome', 'v749', ctc0, v749);
          
          const v2298 = v561;
          if (v561) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bobs_seeWinner0_126': {
          const v777 = v648[1];
          
          break;
          }
        case 'Bobs_showNum0_126': {
          const v840 = v648[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
  switch (v648[0]) {
    case 'Bobs_getNum0_126': {
      const v651 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeOutcome0_126': {
      const v714 = v648[1];
      undefined /* setApiDetails */;
      ;
      const v749 = null;
      const v750 = await txn1.getOutput('Bobs_seeOutcome', 'v749', ctc0, v749);
      if (v363) {
        stdlib.protect(ctc0, await interact.out(v714, v750), {
          at: './index.rsh:104:8:application',
          fs: ['at ./index.rsh:104:8:application call to [unknown function] (defined at: ./index.rsh:104:8:function exp)', 'at ./index.rsh:105:5:application call to "k" (defined at: ./index.rsh:104:30:function exp)', 'at ./index.rsh:104:30:application call to [unknown function] (defined at: ./index.rsh:104:30:function exp)'],
          msg: 'out',
          who: 'Bobs_seeOutcome'
          });
        }
      else {
        }
      
      const v2298 = v561;
      if (v561) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Bobs_seeWinner0_126': {
      const v777 = v648[1];
      return;
      break;
      }
    case 'Bobs_showNum0_126': {
      const v840 = v648[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bobs_seeWinner6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_seeWinner6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_seeWinner6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Bobs_getNum0_126: ctc5,
    Bobs_seeOutcome0_126: ctc5,
    Bobs_seeWinner0_126: ctc5,
    Bobs_showNum0_126: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v496, v561] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v598 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:7:application call to [unknown function] (defined at: ./index.rsh:100:7:function exp)', 'at ./index.rsh:83:17:application call to "runBobs_seeWinner0_126" (defined at: ./index.rsh:100:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Bobs_seeWinner'
    });
  const v605 = ['Bobs_seeWinner0_126', v598];
  
  const txn1 = await (ctc.sendrecv({
    args: [v496, v561, v605],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:100:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
      
      switch (v648[0]) {
        case 'Bobs_getNum0_126': {
          const v651 = v648[1];
          
          break;
          }
        case 'Bobs_seeOutcome0_126': {
          const v714 = v648[1];
          
          break;
          }
        case 'Bobs_seeWinner0_126': {
          const v777 = v648[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_seeWinner"
            });
          ;
          const v822 = null;
          const v823 = await txn1.getOutput('Bobs_seeWinner', 'v822', ctc0, v822);
          
          const v2313 = v561;
          if (v561) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bobs_showNum0_126': {
          const v840 = v648[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
  switch (v648[0]) {
    case 'Bobs_getNum0_126': {
      const v651 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeOutcome0_126': {
      const v714 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeWinner0_126': {
      const v777 = v648[1];
      undefined /* setApiDetails */;
      ;
      const v822 = null;
      const v823 = await txn1.getOutput('Bobs_seeWinner', 'v822', ctc0, v822);
      if (v363) {
        stdlib.protect(ctc0, await interact.out(v777, v823), {
          at: './index.rsh:100:8:application',
          fs: ['at ./index.rsh:100:8:application call to [unknown function] (defined at: ./index.rsh:100:8:function exp)', 'at ./index.rsh:101:6:application call to "k" (defined at: ./index.rsh:100:29:function exp)', 'at ./index.rsh:100:29:application call to [unknown function] (defined at: ./index.rsh:100:29:function exp)'],
          msg: 'out',
          who: 'Bobs_seeWinner'
          });
        }
      else {
        }
      
      const v2313 = v561;
      if (v561) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Bobs_showNum0_126': {
      const v840 = v648[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bobs_showNum6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_showNum6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_showNum6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Bobs_getNum0_126: ctc5,
    Bobs_seeOutcome0_126: ctc5,
    Bobs_seeWinner0_126: ctc5,
    Bobs_showNum0_126: ctc5
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v496, v561] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc2, ctc3]);
  const v587 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:7:function exp)', 'at ./index.rsh:83:17:application call to "runBobs_showNum0_126" (defined at: ./index.rsh:96:7:function exp)', 'at ./index.rsh:83:17:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'in',
    who: 'Bobs_showNum'
    });
  const v594 = ['Bobs_showNum0_126', v587];
  
  const txn1 = await (ctc.sendrecv({
    args: [v496, v561, v594],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:96:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
      
      switch (v648[0]) {
        case 'Bobs_getNum0_126': {
          const v651 = v648[1];
          
          break;
          }
        case 'Bobs_seeOutcome0_126': {
          const v714 = v648[1];
          
          break;
          }
        case 'Bobs_seeWinner0_126': {
          const v777 = v648[1];
          
          break;
          }
        case 'Bobs_showNum0_126': {
          const v840 = v648[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_showNum"
            });
          ;
          const v895 = null;
          const v896 = await txn1.getOutput('Bobs_showNum', 'v895', ctc0, v895);
          
          const v2328 = v561;
          if (v561) {
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v648], secs: v650, time: v649, didSend: v363, from: v647 } = txn1;
  switch (v648[0]) {
    case 'Bobs_getNum0_126': {
      const v651 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeOutcome0_126': {
      const v714 = v648[1];
      return;
      break;
      }
    case 'Bobs_seeWinner0_126': {
      const v777 = v648[1];
      return;
      break;
      }
    case 'Bobs_showNum0_126': {
      const v840 = v648[1];
      undefined /* setApiDetails */;
      ;
      const v895 = null;
      const v896 = await txn1.getOutput('Bobs_showNum', 'v895', ctc0, v895);
      if (v363) {
        stdlib.protect(ctc0, await interact.out(v840, v896), {
          at: './index.rsh:96:8:application',
          fs: ['at ./index.rsh:96:8:application call to [unknown function] (defined at: ./index.rsh:96:8:function exp)', 'at ./index.rsh:97:6:application call to "k" (defined at: ./index.rsh:96:27:function exp)', 'at ./index.rsh:96:27:application call to [unknown function] (defined at: ./index.rsh:96:27:function exp)'],
          msg: 'out',
          who: 'Bobs_showNum'
          });
        }
      else {
        }
      
      const v2328 = v561;
      if (v561) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bobs_getNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_getNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_getNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bobs_getNum6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bobs_seeOutcome(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_seeOutcome expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bobs_seeOutcome6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bobs_seeWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_seeWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_seeWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bobs_seeWinner6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bobs_showNum(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_showNum expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_showNum expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bobs_showNum6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bobs_getNum(uint64)uint64`, `Bobs_seeOutcome(uint64)byte[0]`, `Bobs_seeWinner(uint64)byte[0]`, `Bobs_showNum(uint64)byte[0]`],
    pure: [],
    sigs: [`Bobs_getNum(uint64)uint64`, `Bobs_seeOutcome(uint64)byte[0]`, `Bobs_seeWinner(uint64)byte[0]`, `Bobs_showNum(uint64)byte[0]`]
    },
  appApproval: `BiANAAEDAgQIBSCP59nrDIGG5OsOsriWrgsGoI0GJgMBAAABASI1ADEYQQPLKWRJIls1ASEFWzUCMRkjEkEACDEAKChmQgOZNhoAF0lBAGMiNQQjNQZJIQgMQAApSSEJDEAAEiEJEkQ2GgE1/4ABAzT/UEIAYSEIEkQ2GgE1/yo0/1BCAFFJIQoMQAAQIQoSRDYaATX/KDT/UEIAOoHr5IurAxJENhoBNf+AAQI0/1BCACQ2GgIXNQQ2GgM2GgEXSSUMQAHaSSQMQAF6SSEGDEAA8CEGEkQhCzQBEkQ0BEkiEkw0AhIRRChkSTUDSSJbNf9XCAEXNf5JNQU1/YAEAKxyzTT9ULA0/SJVSSUMQAA4SSQMQAAaJBJEgAgAAAAAAAADf7ApNQc0/zT+MgZCAjlIgAgAAAAAAAADNrApNQc0/zT+MgZCAiFJIwxAABhIgAgAAAAAAAAC7bApNQc0/zT+MgZCAgNINP1XAQg1/DEAiAKhSTX7IlVAAAYiNfpCAAYjNfpCAAA0+hRENPsiVUAABiI1+UIABiM1+UIAADT5FEQxACgqZoAIAAAAAAAAAps0/FCwNPw1BzT/NP4yBkIBpyQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEHWzX+STUFSSJbNf0hBVs1/IAEpKXwiDT9FlA0/BZQsDT/MQASRDQDVyggNP0WNPwWUAESRLEisgEjshIhBLIQNANXSCA0/yIjNAOBaFs0/BJNIhJNshQ0/rIRszT+IzIGQgEkSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/lcoIDX9STUFFzX8gASXTvcXNPwWULA0/zT+FlA0/VAxAFA0/BZQKEsBVwBwZ0gkNQEyBjUCQgEkSSMMQABVSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/lcoIDX9gASai5F0sCM0/ogBYDT/MQASRDT/NP4WUDT9UChLAVcASGdIJTUBMgY1AkIAyUghDIgBISI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBVs1/lcQIDX9gAQWLSg7NP8WUDT+FlA0/VCwIQyIAOexIrIBIrISIQSyEDIKshQ0/7IRszEANP8WUDT9UChLAVcASGdIIzUBMgY1AkIAWjX/Nf41/TT+QQAbsSKyASKyEiEEshAyCbIVMgqyFDT9shGzQgAYNP0WKFAoSwFXAAlnSCELNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "name": "v496",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v498",
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
                "name": "v496",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v498",
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
                "name": "v526",
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
                "name": "v532",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v533",
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
                    "internalType": "enum _enum_T16",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_getNum0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_seeOutcome0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_seeWinner0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_showNum0_126",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v648",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v667",
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
    "name": "_reach_oe_v749",
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
    "name": "_reach_oe_v822",
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
    "name": "_reach_oe_v895",
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
    "name": "Bobs_getNum",
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
    "name": "Bobs_seeOutcome",
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
    "name": "Bobs_seeWinner",
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
    "name": "Bobs_showNum",
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
                "name": "v526",
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
                "name": "v532",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v533",
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
                    "internalType": "enum _enum_T16",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_getNum0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_seeOutcome0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_seeWinner0_126",
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
                    "internalType": "struct T15",
                    "name": "_Bobs_showNum0_126",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T16",
                "name": "v648",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
  Bytecode: `0x608060405260405162001ca538038062001ca5833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b61197a806200032b6000396000f3fe6080604052600436106100a55760003560e01c806382a4379c1161006157806382a4379c1461015b578063832307571461016e578063a74dacc614610183578063ab53f2c614610196578063ad2d91d1146101b9578063fe9d2ca1146101cc57005b80631e93b0f1146100ae5780632c10a159146100d257806331c6e2f5146100e55780633bc5b7bf146100f857806345f7039614610125578063634f49ff1461013857005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611380565b6101df565b6100bf6100f336600461139c565b610203565b34801561010457600080fd5b506101186101133660046113ca565b61023a565b6040516100c991906113fd565b6100ac610133366004611380565b610251565b61014b61014636600461139c565b610271565b60405190151581526020016100c9565b61014b61016936600461139c565b6102ac565b34801561017a57600080fd5b506001546100bf565b61014b61019136600461139c565b6102e7565b3480156101a257600080fd5b506101ab610322565b6040516100c9929190611462565b6100ac6101c736600461149c565b6103bf565b6100ac6101da3660046114ae565b6103df565b6101e7611144565b6101ff6101f936849003840184611567565b826103ff565b5050565b600061020d61116b565b60208181018051516000905251510151839052610228611144565b61023282826105e5565b519392505050565b61024261118a565b61024b82610a00565b92915050565b610259611144565b6101ff61026b368490038401846115ef565b82610ac3565b600061027b61116b565b6020810180515160019052515160400151839052610297611144565b6102a182826105e5565b602001519392505050565b60006102b661116b565b60208101805151600390525151608001518390526102d2611144565b6102dc82826105e5565b606001519392505050565b60006102f161116b565b602081018051516002905251516060015183905261030d611144565b61031782826105e5565b604001519392505050565b6000606060005460028080546103379061161a565b80601f01602080910402602001604051908101604052809291908181526020018280546103639061161a565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b50505050509050915091509091565b6103c7611144565b6101ff6103d93684900384018461164f565b82610c79565b6103e7611144565b6101ff6103f9368490038401846116a9565b826105e5565b61040f600160005414600b610e80565b815161042a90158061042357508251600154145b600c610e80565b60008080556002805461043c9061161a565b80601f01602080910402602001604051908101604052809291908181526020018280546104689061161a565b80156104b55780601f1061048a576101008083540402835291602001916104b5565b820191906000526020600020905b81548152906001019060200180831161049857829003601f168201915b50505050508060200190518101906104cd9190611759565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161052434156008610e80565b61053e6105373383602001516001610ea6565b6009610e80565b8051610556906001600160a01b03163314600a610e80565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906105de9291906111ad565b5050505050565b6105f5600660005414601b610e80565b815161061090158061060957508251600154145b601c610e80565b6000808055600280546106229061161a565b80601f016020809104026020016040519081016040528092919081815260200182805461064e9061161a565b801561069b5780601f106106705761010080835404028352916020019161069b565b820191906000526020600020905b81548152906001019060200180831161067e57829003601f168201915b50505050508060200190518101906106b391906117d2565b90506106bd611231565b7f6d28439abee2373024dcb5b31582c8148d00bae027ea9d8171dfb6c0702e4a8533856040516106ee929190611807565b60405180910390a16000602085015151516003811115610710576107106113e7565b14156108ad57602080850151510151815261072a33610a00565b60208201819052516000906001811115610746576107466113e7565b1415610758576000604082015261077f565b60016020820151516001811115610771576107716113e7565b141561077f57600160408201525b61079c8160400151610792576001610795565b60005b6015610e80565b6107a834156016610e80565b600060208201515160018111156107c1576107c16113e7565b14156107d357600060608201526107fa565b600160208201515160018111156107ec576107ec6113e7565b14156107fa57600160608201525b610817816060015161080d576001610810565b60005b6017610e80565b33600090815260046020908152604091829020805462ff00ff1916600117905582515191519182527fd00c180e82775793e319fad9f42a4d9a7f1ef353dcce194ec9e34810f00f5323910160405180910390a18051518352610877611253565b825181516001600160a01b039091169052602080840151818301805191151590915251439101526108a781610ebe565b506109fa565b60016020850151515160038111156108c7576108c76113e7565b141561091c576108d934156018610e80565b604051600081527fd7d2733c59fe959b94f457264098eadc92c753c93c616de730b29d934ea047fa9060200160405180910390a160006020840152610877611253565b6002602085015151516003811115610936576109366113e7565b141561098b5761094834156019610e80565b604051600081527f6463d9cc07b67c89d37db4bf8b2f850af95911711e76377b61791734a609f7639060200160405180910390a160006040840152610877611253565b60036020850151515160038111156109a5576109a56113e7565b14156109fa576109b73415601a610e80565b604051600081527fd9e61b78219bfad0c63055422c4c6a1f1baae20cfddd2738bbe16233c878a6079060200160405180910390a160006060840152610877611253565b50505050565b610a0861118a565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610a3757610a376113e7565b1415610ab4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a7857610a786113e7565b6001811115610a8957610a896113e7565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610ad3600260005414600e610e80565b8151610aee901580610ae757508251600154145b600f610e80565b600080805560028054610b009061161a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2c9061161a565b8015610b795780601f10610b4e57610100808354040283529160200191610b79565b820191906000526020600020905b815481529060010190602001808311610b5c57829003601f168201915b5050505050806020019051810190610b919190611759565b604080513381528551602080830191909152860151518183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a1610be73415600d610e80565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528f8901515183526003909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c0016105ba565b610c896003600054146013610e80565b8151610ca4901580610c9d57508251600154145b6014610e80565b600080805560028054610cb69061161a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce29061161a565b8015610d2f5780601f10610d0457610100808354040283529160200191610d2f565b820191906000526020600020905b815481529060010190602001808311610d1257829003601f168201915b5050505050806020019051810190610d479190611875565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a1610da634156010610e80565b8051610dbe906001600160a01b031633146011610e80565b602080840151805190820151604051610e0c93610de693929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146012610e80565b610e4c81602001516000856020015160200151846080015114610e30576000610e33565b60015b14610e42578260600151610e45565b82515b6001610f4a565b610e54611253565b60208083015182516001600160a01b03909116905281810180516001905251439101526109fa81610ebe565b816101ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610eb483853085610f5e565b90505b9392505050565b60208101515115610ee25760008080556001819055610edf9060029061128c565b50565b604080518082018252600080825260208083018281528551516001600160a01b031680855260069093554360015584518083019390935251151582850152835180830385018152606090920190935280519192610f4592600292909101906111ad565b505050565b610f55838383611038565b610f4557600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610fc59161190b565b60006040518083038185875af1925050503d8060008114611002576040519150601f19603f3d011682016040523d82523d6000602084013e611007565b606091505b509150915061101882826001611109565b508080602001905181019061102d9190611927565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916110979161190b565b60006040518083038185875af1925050503d80600081146110d4576040519150601f19603f3d011682016040523d82523d6000602084013e6110d9565b606091505b50915091506110ea82826002611109565b50808060200190518101906110ff9190611927565b9695505050505050565b60608315611118575081610eb7565b8251156111285782518084602001fd5b60405163100960cb60e01b815260048101839052602401610e9d565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6040518060400160405280600081526020016111856112c6565b905290565b60408051606081019091528060005b815260006020820181905260409091015290565b8280546111b99061161a565b90600052602060002090601f0160209004810192826111db5760008555611221565b82601f106111f457805160ff1916838001178555611221565b82800160010185558215611221579182015b82811115611221578251825591602001919060010190611206565b5061122d9291506112d9565b5090565b6040805160a0810190915260006080820190815281526020810161119961118a565b60408051606081018252600091810191825290819081526020016111856040518060400160405280600015158152602001600081525090565b5080546112989061161a565b6000825580601f106112a8575050565b601f016020900490600052602060002090810190610edf91906112d9565b60405180602001604052806111856112ee565b5b8082111561122d57600081556001016112da565b6040805160a0810190915280600081526020016113176040518060200160405280600081525090565b81526020016113326040518060200160405280600081525090565b815260200161134d6040518060200160405280600081525090565b81526020016111856040518060200160405280600081525090565b60006040828403121561137a57600080fd5b50919050565b60006040828403121561139257600080fd5b610eb78383611368565b6000602082840312156113ae57600080fd5b5035919050565b6001600160a01b0381168114610edf57600080fd5b6000602082840312156113dc57600080fd5b8135610eb7816113b5565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611414576114146113e7565b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015611451578181015183820152602001611439565b838111156109fa5750506000910152565b8281526040602082015260008251806040840152611487816060850160208701611436565b601f01601f1916919091016060019392505050565b60006060828403121561137a57600080fd5b600060c0828403121561137a57600080fd5b6040805190810167ffffffffffffffff811182821017156114f157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156114f157634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156114f157634e487b7160e01b600052604160045260246000fd5b8015158114610edf57600080fd5b60006040828403121561157957600080fd5b6115816114c0565b82358152602083013561159381611559565b60208201529392505050565b6000602082840312156115b157600080fd5b6040516020810181811067ffffffffffffffff821117156115e257634e487b7160e01b600052604160045260246000fd5b6040529135825250919050565b60006040828403121561160157600080fd5b6116096114c0565b82358152611593846020850161159f565b600181811c9082168061162e57607f821691505b6020821081141561137a57634e487b7160e01b600052602260045260246000fd5b6000818303606081121561166257600080fd5b61166a6114c0565b833581526040601f198301121561168057600080fd5b6116886114c0565b60208581013582526040909501358582015293810193909352509092915050565b600081830360c08112156116bc57600080fd5b6116c46114c0565b8335815260a0601f19830112156116da57600080fd5b6116e26114f7565b91506116ec611528565b6020850135600481106116fe57600080fd5b815261170d866040870161159f565b602082015261171f866060870161159f565b6040820152611731866080870161159f565b60608201526117438660a0870161159f565b6080820152825260208101919091529392505050565b60006060828403121561176b57600080fd5b6040516060810181811067ffffffffffffffff8211171561179c57634e487b7160e01b600052604160045260246000fd5b60405282516117aa816113b5565b815260208301516117ba816113b5565b60208201526040928301519281019290925250919050565b6000604082840312156117e457600080fd5b6117ec6114c0565b82516117f7816113b5565b8152602083015161159381611559565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061183a5761183a6113e7565b806040850152506020810151516060840152604081015151608084015260608101515160a084015260808101515160c0840152509392505050565b600060a0828403121561188757600080fd5b60405160a0810181811067ffffffffffffffff821117156118b857634e487b7160e01b600052604160045260246000fd5b60405282516118c6816113b5565b815260208301516118d6816113b5565b60208201526040838101519082015260608301516118f3816113b5565b60608201526080928301519281019290925250919050565b6000825161191d818460208701611436565b9190910192915050565b60006020828403121561193957600080fd5b8151610eb78161155956fea264697066735822122098b0c1dc1abcf8b62ec57ecc8faba58454acd4f123ebd97f266a05959414f6b964736f6c634300080c0033`,
  BytecodeLen: 7333,
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
    at: './index.rsh:111:11:after expr stmt semicolon',
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
  "Bobs_getNum": Bobs_getNum,
  "Bobs_seeOutcome": Bobs_seeOutcome,
  "Bobs_seeWinner": Bobs_seeWinner,
  "Bobs_showNum": Bobs_showNum
  };
export const _APIs = {
  Bobs: {
    getNum: Bobs_getNum,
    seeOutcome: Bobs_seeOutcome,
    seeWinner: Bobs_seeWinner,
    showNum: Bobs_showNum
    }
  };
