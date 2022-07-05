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

/* Functions */
var getDiscountPercent = function (productName) {
    if(!discounts.hasOwnProperty(productName))
       return 0;
    return discounts[productName];
};

var getTaxPercent = function (productName) {
   if(!taxes.hasOwnProperty(productName))
     return 0;
  return taxes[productName];
};
var getUnitPrice = function (itemName) {
      if(!rates.hasOwnProperty(itemName))
         return 0;
      return rates[itemName];
  
};
var getLineItemPrice = function (lineItem) {
       let Items=[];
       for(let i=0;i<lineItem.length;i++){
       let bdt=getUnitPrice(lineItem[i].item)*lineItem[i].units;
       let dcal=bdt*(getDiscountPercent(lineItem[i].item)/100);
       let tcal=(bdt -dcal)*(getTaxPercent(lineItem[i].item)/100);
       let final=bdt-dcal+tcal;
       Items.push({"Item":lineItem[i].item, "cost":final});
   }
   return Items;
  };
var getSum = function () {
  let lastPrice=getLineItemPrice(purchases);
  let fp=0;
  for(let i=0;i<lastPrice.length;i++){
      fp=fp+lastPrice[i].cost;
  }
  return fp;
};
var main = function main() {
  console.log(getSum());
  
}

main();