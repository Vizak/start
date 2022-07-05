var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

const getDiscountPercent =(productName) => discounts[productName] /100 || 0;
const getTaxPercent =(productName) => taxes[productName]/ 100 || 0;
const getUnitPrice = (itemName) =>{ 
  const Discount = rates[itemName] * getDiscountPercent(itemName);
  const Tax = rates[itemName] * getTaxPercent(itemName);
  const units = (rates[itemName] - Discount) + Tax;
  return units;

}
const getLineItemPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem.item);
const getSum =(purchases) => (purchases.map(getLineItemPrice)).reduce((x,y) => x+y ,0);

const main = function main(){
  console.log(getSum(purchases));
}
main();