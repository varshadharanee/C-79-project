var name_array=[];

function submit(){

 var name_1=document.getElementById("student_1").value;       
 var name_2=document.getElementById("student_2").value;
 var name_3=document.getElementById("student_3").value;
 var name_4=document.getElementById("student_4").value;

 name_array.push(name_1);
 name_array.push(name_2);
 name_array.push(name_3);
 name_array.push(name_4);

 console.log(name_array);
 document.getElementById("display_array").innerHTML=name_array;
 document.getElementById("submit").style.display="none";
 document.getElementById("sort").style.display="inline";

}
function sort1(){
    console.log("hi");
    name_array.sort();
    document.getElementById("display_array").innerHTML=name_array;
    console.log(name_array);
}