
var studName = prompt ("Enter Your Name");
var fatherName = prompt ("Enter Your Father Name");
var rollNumber = +prompt ("Enter Your Roll number");
var inputMaths = +prompt("Enter your Marks of Maths");
var inputEnglish = +prompt("Enter your Marks of English");
var inputUrdu = +prompt("Enter your Marks of Urdu");
var inputChem = +prompt("Enter your Marks of Chemestry");
var inputPhys = +prompt("Enter your Marks of Physics");

document.getElementById("sname").innerHTML = studName;
document.getElementById("fname").innerHTML = fatherName;
document.getElementById("rnumb").innerHTML = rollNumber;
document.getElementById("maths").innerHTML = inputMaths;
document.getElementById("engl").innerHTML = inputEnglish;
document.getElementById("urdu").innerHTML = inputUrdu;
document.getElementById("chems").innerHTML = inputChem;
document.getElementById("phys").innerHTML = inputPhys;

var totalObtainedMarks = (inputMaths+inputEnglish+inputUrdu+inputChem+inputPhys);
var percentage = (totalObtainedMarks/500 * 100);
document.getElementById ("perct").innerHTML="Percentage Obtained: "+percentage +"%"+ "<br/>"

if (percentage >= 80) {
document.getElementById ("grade").innerHTML="Grade: A+";
}
else if (percentage >= 70){
document.getElementById ("grade").innerHTML="Grade: A";
}
else if (percentage >= 60){
    document.getElementById ("grade").innerHTML="Grade: B";
}
else if (percentage >= 50){
    document.getElementById ("grade").innerHTML="Grade: C";
}
else if (percentage >= 40){
   document.getElementById ("grade").innerHTML="Grade: D";
}
else {
   document.getElementById ("grade").innerHTML="Failed";
}
