//import {map} from "@laufire/utils/collection"
/* map(arrayname ,() =>)"*/
const markSheets = [
  {
      student: 'Sriram',
      rollNo: 11,
      
  },
  {
      student: 'Ram',
      rollNo: 16,
     
     
  },
  {
      student: 'sri',
      rollNo: 18,
      
  },
  {
      student: 'mani',
      rollNo: 20,
      
  },
  
];
const marks = {
  11:{
    tamil: 80,
      english: 90,
      science: 86,
      maths: 97,
      social: 76,
  },
  16:{
    tamil: 90,
    english: 97,
    science: 100,
    maths: 34,
    social: 96,
  },
  18:{
    tamil: 60,
    english: 90,
    science: 66,
    maths: 93,
    social: 46,

  },
  20:{
    tamil: 40,
    english: 70,
    science: 86,
    maths: 73,
    social: 86,
  }
}

const getRank = (markSheets) => {
    let rank=0;   
    markSheets.map(student =>{
      student.result==="PASS" 
      ? student.rank= ++rank
      : student.rank="-";
   })
  }

const getTotal = () => {  
markSheets.map(markSheet=>{
markSheet.total=(markSheet.tamil+markSheet.english+markSheet.maths+markSheet.science+markSheet.social);

})
};

const getResult = () => {
markSheets.map(markSheet => {
 (markSheet.tamil<35 || markSheet.english<35 || markSheet.maths<35 || markSheet.science<35 || markSheet.social<35) ? markSheet.result = "FAIL" : markSheet.result = "PASS";
})};

getResult();
getTotal();
getRank(markSheets.sort((a,b)=> b.total-a.total));
console.table(markSheets);