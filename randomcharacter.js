const getRandomBetween = () => 
  (Math.floor(Math.random()*15));  

const getRandomString = (count) => { 
  let character="";
  for(let i=0;i<count;i++){
    character += getHexadecimal();
  }
  return character;
};
const getHexadecimal = () => 

(getRandomBetween().toString(16));

let uf =[8,4,4,4,12];
let rString="";
for(let i =0;i<uf.length;i++){
   rString+= getRandomString(uf[i]);
   if(i<uf.length-1){
     rString+= "-";
   }
}
console.log(rString);