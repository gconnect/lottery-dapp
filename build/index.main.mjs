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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc0, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    nftId: ctc0,
    numTickets: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v127 = stdlib.protect(ctc2, await interact.startRaffle(), {
    at: './index.rsh:33:64:application',
    fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v128 = v127.nftId;
  const v129 = v127.numTickets;
  const v132 = stdlib.protect(ctc1, await interact.getNum(v129), {
    at: './index.rsh:34:40:application',
    fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v133 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:35:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v134 = stdlib.digest(ctc3, [v133, v132]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v128, v129, v134],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v137, v138, v139], secs: v141, time: v140, didSend: v38, from: v136 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v137
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v137, v138, v139], secs: v141, time: v140, didSend: v38, from: v136 } = txn1;
  ;
  ;
  stdlib.protect(ctc5, await interact.seeHash(v139), {
    at: './index.rsh:39:21:application',
    fs: ['at ./index.rsh:39:21:application call to [unknown function] (defined at: ./index.rsh:39:21:function exp)', 'at ./index.rsh:39:21:application call to "liftedInteract" (defined at: ./index.rsh:39:21:application)'],
    msg: 'seeHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v136, v137, v139],
    evt_cnt: 0,
    funcNum: 1,
    lct: v140,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'), v137]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v152, time: v151, didSend: v49, from: v150 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:7:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v137
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v152, time: v151, didSend: v49, from: v150 } = txn2;
  ;
  ;
  const v162 = stdlib.addressEq(v136, v150);
  stdlib.assert(v162, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v58, from: v166 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v136, v137, v139, v166, v167, v133, v132],
    evt_cnt: 2,
    funcNum: 3,
    lct: v168,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v173, v174], secs: v176, time: v175, didSend: v68, from: v172 } = txn4;
      
      ;
      const v181 = stdlib.eq(v167, v174);
      const v182 = v181 ? stdlib.checkedBigNumberify('./index.rsh:64:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:64:52:decimal', stdlib.UInt_max, '0');
      const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, '0'));
      const v184 = v183 ? v136 : v166;
      sim_r.txns.push({
        kind: 'from',
        to: v184,
        tok: v137
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v137
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v173, v174], secs: v176, time: v175, didSend: v68, from: v172 } = txn4;
  ;
  const v177 = stdlib.addressEq(v136, v172);
  stdlib.assert(v177, {
    at: './index.rsh:59:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v178 = stdlib.digest(ctc3, [v173, v174]);
  const v179 = stdlib.digestEq(v139, v178);
  stdlib.assert(v179, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:60:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v181 = stdlib.eq(v167, v174);
  const v182 = v181 ? stdlib.checkedBigNumberify('./index.rsh:64:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:64:52:decimal', stdlib.UInt_max, '0');
  const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, '0'));
  const v184 = v183 ? v136 : v166;
  ;
  stdlib.protect(ctc5, await interact.seeOutcome(v182), {
    at: './index.rsh:68:24:application',
    fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v137, v138, v139], secs: v141, time: v140, didSend: v38, from: v136 } = txn1;
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
  const {data: [], secs: v152, time: v151, didSend: v49, from: v150 } = txn2;
  ;
  ;
  const v162 = stdlib.addressEq(v136, v150);
  stdlib.assert(v162, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v165 = stdlib.protect(ctc1, await interact.getNum(v138), {
    at: './index.rsh:48:51:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'getNum',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.showNum(v165), {
    at: './index.rsh:49:21:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'showNum',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v136, v137, v139, v165],
    evt_cnt: 1,
    funcNum: 2,
    lct: v151,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v167], secs: v169, time: v168, didSend: v58, from: v166 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v167], secs: v169, time: v168, didSend: v58, from: v166 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v173, v174], secs: v176, time: v175, didSend: v68, from: v172 } = txn4;
  ;
  const v177 = stdlib.addressEq(v136, v172);
  stdlib.assert(v177, {
    at: './index.rsh:59:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v178 = stdlib.digest(ctc4, [v173, v174]);
  const v179 = stdlib.digestEq(v139, v178);
  stdlib.assert(v179, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:60:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.seeWinner(v174), {
    at: './index.rsh:62:23:application',
    fs: ['at ./index.rsh:62:23:application call to [unknown function] (defined at: ./index.rsh:62:23:function exp)', 'at ./index.rsh:62:23:application call to "liftedInteract" (defined at: ./index.rsh:62:23:application)'],
    msg: 'seeWinner',
    who: 'Bob'
    });
  
  const v181 = stdlib.eq(v167, v174);
  const v182 = v181 ? stdlib.checkedBigNumberify('./index.rsh:64:48:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:64:52:decimal', stdlib.UInt_max, '0');
  const v183 = stdlib.eq(v182, stdlib.checkedBigNumberify('./index.rsh:65:38:decimal', stdlib.UInt_max, '0'));
  const v184 = v183 ? v136 : v166;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v182), {
    at: './index.rsh:68:24:application',
    fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAECAwQIIKCNBiYCAQAAIjUAMRhBAj4pZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAD2SSUMQACWJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQZbNf5JNQVJIls1/SEFWzX8gASkpfCINP0WUDT8FlCwNP8xABJENANXKCA0/RY0/BZQARJEsSKyASOyEiEEshA0A1dIIDT/IiM0A4FoWzT8Ek0iEk2yFDT+shGzsSKyASKyEiEEshAyCbIVMgqyFDT+shGzQgEkSCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lcoIDX9STUFFzX8gASXTvcXNPwWULA0/zT+FlA0/VAxAFA0/BZQKEsBVwBwZ0glNQEyBjUCQgDmSSMMQABVSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lcoIDX9gASai5F0sCM0/ogBFTT/MQASRDT/NP4WUDT9UChLAVcASGdIJDUBMgY1AkIAi0ghB4gA1iI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBVs1/lcQIDX9gAQWLSg7NP8WUDT+FlA0/VCwIQeIAJyxIrIBIrISIQSyEDIKshQ0/7IRszEANP8WUDT9UChLAVcASGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
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
                "name": "v137",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v137",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T4",
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
                "name": "v167",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
        "internalType": "struct T4",
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
                "name": "v167",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ff738038062000ff7833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b610ccc806200032b6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806345f703961461009657806383230757146100a9578063ab53f2c6146100be578063ad2d91d1146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a2b565b6100f4565b61005d6100a4366004610a2b565b6102c8565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d361047b565b60405161007a929190610a73565b61005d6100ef366004610aad565b610518565b610104600160005414600b610700565b61011e8135158061011757506001548235145b600c610700565b60008080556002805461013090610abf565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610abf565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b10565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610b94565b60405180910390a161020834156008610700565b61022261021b3383602001516001610726565b6009610700565b805161023a906001600160a01b03163314600a610700565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102c292919061093d565b50505050565b6102d8600260005414600e610700565b6102f2813515806102eb57506001548235145b600f610700565b60008080556002805461030490610abf565b80601f016020809104026020016040519081016040528092919081815260200182805461033090610abf565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b50505050508060200190518101906103959190610b10565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16103ea3415600d610700565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528e89013583526003909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c00161029e565b60006060600054600280805461049090610abf565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90610abf565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50505050509050915091509091565b6105286003600054146013610700565b6105428135158061053b57506001548235145b6014610700565b60008080556002805461055490610abf565b80601f016020809104026020016040519081016040528092919081815260200182805461058090610abf565b80156105cd5780601f106105a2576101008083540402835291602001916105cd565b820191906000526020600020905b8154815290600101906020018083116105b057829003601f168201915b50505050508060200190518101906105e59190610bcc565b604080513381528435602080830191909152850135818301529084013560608201529091507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a161064334156010610700565b805161065b906001600160a01b031633146011610700565b604080516106a79161068191602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260400151146012610700565b6106e68160200151600084602001602001358460800151146106ca5760006106cd565b60015b146106dc5782606001516106df565b82515b600161073e565b600080805560018190556106fc906002906109c1565b5050565b816106fc5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061073483853085610757565b90505b9392505050565b610749838383610831565b61075257600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916107be91610c5d565b60006040518083038185875af1925050503d80600081146107fb576040519150601f19603f3d011682016040523d82523d6000602084013e610800565b606091505b509150915061081182826001610902565b50808060200190518101906108269190610c79565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161089091610c5d565b60006040518083038185875af1925050503d80600081146108cd576040519150601f19603f3d011682016040523d82523d6000602084013e6108d2565b606091505b50915091506108e382826002610902565b50808060200190518101906108f89190610c79565b9695505050505050565b60608315610911575081610737565b8251156109215782518084602001fd5b60405163100960cb60e01b81526004810183905260240161071d565b82805461094990610abf565b90600052602060002090601f01602090048101928261096b57600085556109b1565b82601f1061098457805160ff19168380011785556109b1565b828001600101855582156109b1579182015b828111156109b1578251825591602001919060010190610996565b506109bd9291506109fe565b5090565b5080546109cd90610abf565b6000825580601f106109dd575050565b601f0160209004906000526020600020908101906109fb91906109fe565b50565b5b808211156109bd57600081556001016109ff565b600060408284031215610a2557600080fd5b50919050565b600060408284031215610a3d57600080fd5b6107378383610a13565b60005b83811015610a62578181015183820152602001610a4a565b838111156102c25750506000910152565b8281526040602082015260008251806040840152610a98816060850160208701610a47565b601f01601f1916919091016060019392505050565b600060608284031215610a2557600080fd5b600181811c90821680610ad357607f821691505b60208210811415610a2557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b0b57600080fd5b919050565b600060608284031215610b2257600080fd5b6040516060810181811067ffffffffffffffff82111715610b5357634e487b7160e01b600052604160045260246000fd5b604052610b5f83610af4565b8152610b6d60208401610af4565b6020820152604083015160408201528091505092915050565b80151581146109fb57600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610bbc81610b86565b8015156040840152509392505050565b600060a08284031215610bde57600080fd5b60405160a0810181811067ffffffffffffffff82111715610c0f57634e487b7160e01b600052604160045260246000fd5b604052610c1b83610af4565b8152610c2960208401610af4565b602082015260408301516040820152610c4460608401610af4565b6060820152608083015160808201528091505092915050565b60008251610c6f818460208701610a47565b9190910192915050565b600060208284031215610c8b57600080fd5b815161073781610b8656fea2646970667358221220e71ac5dc02896a95cdf8ebf8ccc6c30d12e5c74617eb673ccc6eb64136a8ecba64736f6c634300080c0033`,
  BytecodeLen: 4087,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:70:11:after expr stmt semicolon',
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
  "Bob": Bob
  };
export const _APIs = {
  };
