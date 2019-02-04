console.log("Mukesh practice");


// let firstName ="Mukesh";
// let lastName;
// lastName="munna";

// let name={firstName:'srikanth',
// lastName:'munna'}

// function output(name,lastName){

// console.log('Hello mukesh'+ name+ ''+lastName);

// }

// output("munna","ram");

    //find maximum number until it sees 0


    // var max=0;

    // var num;

    // num=prompt("Enter new value, or o to end");

    // while(num !=-0){
    //     if(parseFloat(num)>max){
    //         max=num
    //         num=prompt("Enter new value, or 0 to end");
    //     }
    //     document.write("<p> Max="+ max)
    // }
    

// Print curent date
var today=new Date();


// var hour = today.getHours();
// var min=today.getMinutes();
// var sec=today.getSeconds();
// var prepand=(hour>=12)?'PM':'AM';
// hour=(hour>=12)?hour-12:hour;
// // if (hour===0 && prepand==='PM'){

// //     if(min===0 && sec===0){
// //         hour=12;
// //     }
   
// // }

// console.log(hour+prepand)

// //Write a JavaScript program to get the current date.  
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var d=new Date();
var mon=d.getMonth();
var dd=d.getDate();
var yy=d.getFullYear();
console.log(mon+'-'+ dd +'-' + yy);
