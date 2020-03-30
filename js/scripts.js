$(document).ready(function() {

  $("form#survey").submit(function(event){
    event.preventDefault();

    var food = $("#favorite1").val();
    //console.log(food);
    var animal = $("#favorite2").val();
    //console.log(animal);
    var vehicle = $("#favorite3").val();
    //console.log(vehicle);

    var result = [food, animal, vehicle];
   

    var brandNewarray=[];
    brandNewarray.push(result[1]);
    brandNewarray.push(result[0]);
    brandNewarray.push(result[2]);
    console.log(brandNewarray)
    $("#output").text(result);

    // result.pop();
    // console.log(result);

  });
});