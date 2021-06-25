let comp = document.querySelector("#numbers");
let digit = document.querySelector("#numbers1");


function myFunc(elem) {
    console.log(elem.value);
    if (elem.value%2 == 0) 
    digit = "H'0";
    else
    digit = "H'8";
    document.getElementById('numbers1').value = digit;
  }


function radioarray () {

    let Screening = document.getElementsByName('Screening');
    let Presentation= document.getElementsByName('Presentation');
    let Numbering = document.getElementsByName('Numbering');
    let Routing = document.getElementsByName('Routing');
}


function firststation () {
    let NAI = document.getElementsByName('NAI');
    var price = 0;
    $("input[type=radio][value]:checked").each(function(i, el) {
      price += +$(el).data("price");
    });
    $("#price").text(price);
    
}