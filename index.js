let comp = document.querySelector("#numbers");
let digit = document.querySelector("#numbers1");


function myFunc() {

  const FirstPart = oddOrNot();
  function oddOrNot(){
    if (comp.value%2 == 0)
    digit = "H'0";
    else
    digit = "H'8";
  
  }
  const secondPart = firstOktet();  
  function firstOktet(){
    let num = 0;
    let rb1 = document.querySelector("#nai1");
    let rb2 = document.querySelector("#nai2");
    let rb3 = document.querySelector("#nai3");
    let rb4 = document.querySelector("#nai4");

    if (nai1.checked) {
      num = Number(nai1.value);
    } else if (nai2.checked) {
      num = Number(nai2.value);
    } else if (nai3.checked) {
      num = Number(nai3.value);
    } else if (nai4.checked) {
      num = Number(nai4.value);
    }
    return num.toString(16);
   }


   const parts1 = screeen();
   const parts2 = present();
   const parts3 = numberss();
   const parts4 = routs();
   function screeen(){
     let screening = 0b0;

     if (scren1.checked) {
      screening = Number(scren1.value);
    } else if (scren2.checked) {
      screening = Number(scren2.value);
    } else if (scren3.checked) {
      screening = Number(scren3.value);
    } else if (scren4.checked) {
      screening = Number(scren4.value);
    }
    return screening;
  }

  function present(){
    let presentation = 0b0;
    if (pres1.checked) {
      presentation = Number(pres1.value);
    } else if (pres2.checked) {
      presentation = Number(pres2.value);
    } else if (pres3.checked) {
      presentation = Number(pres3.value);
    } 
    return presentation;
  }

  function numberss(){

    let numbering = 0b0;
    if (numb1.checked) {
      numbering = Number(numb1.value);
    } else if (numb2.checked) {
      numbering = Number(numb2.value);
    } else if (numb3.checked) {
      numbering = Number(numb3.value);
    } 
    return numbering;
  }

  function routs(){
    let routing = 0b0;
    if (rou1.checked) {
      routing  = Number(rou1.value);
    } else if (rou2.checked) {
      routing  = Number(rou2.value);
    } 
    return routing;
  }

  let thirdPart = calculation();

  function calculation(){
    let calc = screeen();

    let calc1 = present();
    let calc2 = numberss();
    let calc3 = routs();
    const array1 = [parts4, parts3, parts2, parts1];
    const reducer = array1.reduce((acc, next) => acc | next)
    return  reducer.toString(16);
  }
   console.log(calculation().toString(16))



   document.getElementById('numbers1').value = digit + firstOktet() + calculation();

  }



