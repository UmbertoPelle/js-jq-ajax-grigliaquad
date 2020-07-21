function randomNumInside() {
  var randomNum = $("#randomNum");
  var svuota = $("#svuota");
  var cell = 0;

  svuota.click(function () {
    cell = 0;
    $(".square").text("");
    $(".square").css("background-color","")
  });

  randomNum.click(function () {

    if (cell <=35) {
      $.ajax({

        url:'https://flynn.boolean.careers/exercises/api/random/int',
        metod:'GET',
        success:function (data,state) {
          var success = data['succes'];
          var number = data['response'];

          if (number <= 5) {
            var posizione = "#" + cell;
            // $(posizione).addClass("yellow");
            $(posizione).css("background-color","yellow");
            $(posizione).append(number);
            cell++;
          } else {
            var posizione = "#" + cell;
            // $(posizione).addClass("green");
            $(posizione).css("background-color","green");
            $(posizione).append(number);
            cell++;
          }


        },
        error :function (request,state,error) {
          console.log("error");
        }
      });
    }else {
      alert("le celle sono piene!");
    }

  })

}


function init() {
  randomNumInside();
}

$(document).ready(init);
