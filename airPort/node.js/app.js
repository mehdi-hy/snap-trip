var readlineSync = require('readline-sync');
let readline = readlineSync.question;
let number = readline();
number = number.split('');
let n = parseInt(number[0]);
let k = parseInt(number[1]);
console.log(n);
let bonds = [];
for (let i = 0; i < k; i++) {
  bonds.push('FREE');
}
const overallBondStatus = () => {
  let newBondStatus = bonds.filter((item) => {
    item === 'NOT FREE';
  });
  if (newBondStatus.length === bonds.length) {
    return 'NO FREE BOUND';
  } else {
    return 'FREE';
  }
};
const bondStatus = (num) => {
  return bonds[num - 1];
};
const bondChangeStatusFree = (num) => {
  for (let i = 0; i < bonds.length; i++) {
    if (bonds[i] === 'NOT FREE') {
      bonds[i] = 'FREE';
      break;
    }
  }
};
const bondChangeStatusNotFree = (num) => {
  for (let i = 0; i < bonds.length; i++) {
    if (bonds[i] === 'FREE') {
      bonds[i] = 'NOT FREE';
      return 'made Free';
    }
  }
  return 'NO FREE BOUND';
};
let inAirportPId = [];
for (let i = 0; i < n; i++) {
  let singleAirplaneId = readline();
  inAirportPId.push(singleAirplaneId);
}
console.log(airPlanesId);
const planeStatus = (num) => {
  for (item of inAirportPId) {
    if (item === num) {
      return 1;
    }
  }
  return 4;
};
let instructionNum = readline();
instructionNum = parseInt(instructionNum);
let instructions = [];
let planeInstruction = {};
let rules = {
  'TAKE-OFF': {
    1: 'NO FREE BOND',
    2: 'YOU ARE TAKING OFF',
    3: 'YOU ARE LANDING NOW',
    4: 'YOU ARE NOT HERE',
  },
  'LANDING': {
    1: 'YOU ARE HERE',
    2: 'YOU ARE TAKING OFF',
    3: 'YOU ARE LANDING NOW',
    4: 'NO FREE BOND',
  },
  'PLANE-STATUS': planeStatus,
  'BAND-STATUS': bondStatus,
};
('NO FREE BOND');
for (let i = 0; i < instructionNum; i++) {
  let order = readline();
  order = order.split('');
  let singleInstruction = order[0];
  let planeId = order[1];
  planeInstruction[planeId] = [];
  planeInstruction[planeId].push(singleInstruction);
  instructions.push(planeInstruction);
}
let regex = /00+/g;
for (item of instructions) {
  let id = item.key;
}
