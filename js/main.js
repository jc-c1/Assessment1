window.onload = function (){

    let asmt = {}; 
  
      //Get Elements
        asmt.numInEl = document.getElementById("numIn")
        asmt.numOutEl = document.getElementById("numOut")
        asmt.plusEl = document.getElementById("plus")
        asmt.minusEl = document.getElementById("minus")
  
      //Set In and Out variabls for Calculation and Display
        asmt.numIn = 1
        asmt.numOut = 0
  
      //Set default value of Elements
        asmt.start = function () {
          asmt.numInEl.value = asmt.numIn
          asmt.numOutEl.textContent = asmt.numOut}
      
      //Addition/Subtraction Functions Declarations 
        asmt.plus = function(){
          //Update numIn with User Input
            asmt.numIn = parseInt(asmt.numInEl.value)
          //Apply Addition
            asmt.numOut+=asmt.numIn
          // Update Output Element with calculated Output
            asmt.numOutEl.textContent = `${asmt.numOut}`
            
            if (asmt.numOut<0){asmt.numOutEl.style.color = "red"}
            else {asmt.numOutEl.style.color = "black"}
        }
    
        asmt.minus = function(){
           //Update numIn with User Input
            asmt.numIn = parseInt(asmt.numInEl.value)
          //Apply Addition
            asmt.numOut-=asmt.numIn
          // Update Output Element with calculated Output
            asmt.numOutEl.textContent = `${asmt.numOut}`
            
            if (asmt.numOut<0){asmt.numOutEl.style.color = "red"}
            else {asmt.numOutEl.style.color = "black"}
        }
  
      //Event Listener for clics
  
        asmt.start()
        asmt.plusEl.addEventListener('click',asmt.plus)
        asmt.minusEl.addEventListener('click',asmt.minus)
  
    
  
  }
  
  