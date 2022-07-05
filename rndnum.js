const getRandomBetween = (start , end) => {
  let number=[];
  for(let i=0;i<5;i++){
  number.push((Math.floor(Math.random()*(start-end)+end)));  
  
}
return number;
};
  console.log(getRandomBetween(97,112));