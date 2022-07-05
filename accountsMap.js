const accounts = [
  {
    'name': 'Arun',
    'accountNo': '001',
  },
  {
    'name': 'Babu',
    'accountNo': '002',
  },
  {
    'name': 'Chandra',
    'accountNo': '003',
  },
];

const balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '001',
    'type': 'deposit',
    'amount': 500,
  },
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '002',
    'type': 'deposit',
    'amount': 300,
  },
  {
    'accountNo': '002',
    'type': 'withdrawal',
    'amount': 200,
  },
  {
    'accountNo': '003',
    'type': 'deposit',
    'amount': 200,
  },
];

var updateBalancesWithTransactions = function() {
	// Implement transaction code here.
  const Transaction = transactions.map(trans => {
    (trans.type === "withdrawal")? balances[trans.accountNo] -= trans.amount : balances[trans.accountNo] += trans.amount
  }
  );

};

var displayBalances = function() {
	// Implement display code here.
	const Balance = accounts.map(result => {
    result.balance = (balances[result.accountNo])
    return result } 
    );
    console.log(Balance);
};


// Do not change below this line.
var main = function() {
	console.log('Balances before transactions');
	displayBalances();
	updateBalancesWithTransactions();
	console.log('Balances after transactions');
	displayBalances();
}

main();
