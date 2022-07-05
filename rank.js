const { map,reduce } = require("@laufire/utils/collection");

 
  const studentData={
     ms:[        
    {
        student: 'Ram',
        rollNo: 16,
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 76,
    },
    {
      student: 'sri',
      rollNo: 18,
      tamil: 60,
      english: 90,
      science: 66,
      maths: 93,
      social: 46,
    },
    {
      student: 'sriram',
      rollNo: 11,
      tamil: 80,
      english: 90,
      science: 86,
      maths: 97,
      social: 76,
    },
    
    {
        student: 'mani',
        rollNo: 20,
        tamil: 40,
        english: 70,
        science: 86,
        maths: 73,
        social: 86,
  
    },
  ],
  marks : {
    16:{
      tamil: 60,
      english: 97,
      science: 100,
      maths: 34,
      social: 76,
    },
    18:{ 
      tamil: 60,
      english: 90,
      science: 66,
      maths: 93,
      social: 46,
    },
    11:{
      tamil: 80,
      english: 90,
      science: 86,
      maths: 97,
      social: 76,
  
    },
    20:{
      tamil: 40,
      english: 70,
      science: 86,
      maths: 73,
      social: 86,
  
    },
  } 
  }
 
  function getRank(ms) {
    map(ms , x=>{
    const minimum =35;
    const name =x.name;
   let rollNo =x.rollNo;
   let marks = (studentData.marks[rollNo]);
   let total = reduce(marks ,(x,y)=>x+y,0);
   let result =values(marks) > minimum
    ? "Pass"
    : "Fail" ;
   
})
 };
  
  const processMarkSheets = (studentData)=> {
   
    const id = studentData.markSheets.rollNo;
    const roll = marks.rollNo;
    map(studentData,processMarkSheet);
    };
  
  const main = function main(){ 
    //processMarkSheets(studentData);  
     //console.log("studentData :",Object.values(map(studentData.markSheets,x=>x.rollNo)));
    console.log( getRank(studentData.ms));
  }
  
  main();