const getRandomBetween = () => Math.floor(Math.random()*15);
const getHexChar  = () => getRandomBetween() . toString(16);
const getRandomString = (count) => 
  Array(count).fill(null).map(getHexChar).join("");
const getuuid  = () =>([8,4,4,4,12].map(count => getRandomString(count))).join("-");
console.log(getuuid());