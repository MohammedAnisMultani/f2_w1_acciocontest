/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map(yourFunction);
    function yourFunction(value){
      
        console.log(value)
      }
    
    yourFunction();
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach(myFunction);
    function myFunction(value){
     
      console.log(value)
      
    }
    myFunction()
  
  }
  
  function addData() {
    let obj1 =
    {id:4,name:"susan",age:"20",marks:45}
    arr.push(obj1)
    console.log(arr)
  }
  
  function removeFailedStudent() {
  
    arr.pop(obj1)
    arr.pop(obj1)
    console.log(arr)
  }
  
  
  function concatenateArray() {
    let newarr = [
      { id: "star1", name: "john-cena", age: "38", specilization: "WWE" },
      { id: "star2", name: "jack-ma", age: "50", specilization: "Industrialist" },
      { id: "star3", name: "karen-carter", age: "49",specilization: "actor" },
    ];
    console.log(newarr)
  }
  