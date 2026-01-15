function bmiCalculator(weight, height){
    var bmi_1 = Math.round(weight/(height * height ));
    return bmi_1;
}

var weight = parseInt(prompt("What is your weight? (in Kg) ", "Enter Weight..."));
var height = parseFloat(prompt("What is your height? (in meters) ", "Enter Height..."));
var bmi = bmiCalculator(weight, height);
//alert(bmi);

if ( bmi < 18.5 ){
    alert("Your BMI is " + bmi + ".  According to WHO, you are underweight" );
}
else if ( bmi > 25 &&  bmi < 30 ) {
    alert("Your BMI is " + bmi + ". According to WHO, you are overweight") ;
} 
else if (bmi > 30 ) {
    alert("Your BMI is " + bmi + ". According to WHO, You are obese");
}
else {
    alert("Your BMI is " + bmi + ". According to WHO, you are in optimal health");
}