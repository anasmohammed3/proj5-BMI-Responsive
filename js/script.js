var heicm = document.querySelector("#heicm")
var weikg = document.querySelector("#weikg")
var sumbit = document.querySelector("#sumbit")
var bmi = document.querySelector("#bmi")
var num = document.querySelector("#num")
var word = document.querySelector("#word")
var wel = document.querySelector("#wel")


sumbit.onclick = function () {
    // Retrieve values from input fields
    var height = parseFloat(heicm.value) / 100;
    var weight = parseFloat(weikg.value);
    // Calculate BMI
    var bmiValue = weight / (height * height);
   
    // Display BMI result
    num.innerHTML = bmiValue.toFixed(1); // Round to one decimal place
    wel.style.display = "none";
    bmi.style.display = "block";
   
      // Determine BMI category
      if (bmiValue < 18.5) {
        word.innerHTML = "Underweight";
    } 
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) 
    {
        word.innerHTML = "Healthy weight";
    } 
    else if (bmiValue >= 25.0 && bmiValue <= 29.9) 
    {
        word.innerHTML = "Pre-obesity weight";
    } 
    else if (bmiValue >= 30.0 && bmiValue <= 34.9)
     {
        word.innerHTML = "Obesity class I";
    }
     else if (bmiValue >= 35.0 && bmiValue <= 39.9)
      {
        word.innerHTML = "Obesity class II";
    } 
    else 
    {
        word.innerHTML = "Obesity class III";
    }

    

   }