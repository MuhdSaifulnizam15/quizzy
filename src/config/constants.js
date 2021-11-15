const programmeTypes = {
  MODUL1: 'MODUL 1',
  MODUL2: 'MODUL 2',
  MODUL3: 'MODUL 3',
};

const priority = {
  low: 'LOW',
  medium: 'MEDIUM',
  high: 'HIGH',
};

const questionTypes = {
  mcq: 'MCQ',
  fillInTheBlank: 'Fill in the blank',
  trueFalse: 'True or False',
};

const grade = {
  'pass': 'PASS',
  'fail': 'FAIL',
};


const paymentStatus = {
  'success': 'SUCCESS',
  'pending': 'PENDING',
}

const paymentMethod = {
  'onlineTransfer': 'ONLINE TRANSFER',
  'cash': 'CASH',
  'cheque': 'CHEQUE',
  'debitCard': 'DEBIT CARD',
  'creditCard': 'CREDIT CARD',
}

module.exports = {
  programmeTypes,
  priority,
  questionTypes,
  grade,
  paymentStatus,
  paymentMethod,
};