function randomNumInside() {
  var randomNum = $("#randomNum");
  var cell = 0;

  randomNum.click(function functionName() {

    if (cell <=35) {
      $.ajax({

        url:'https://flynn.boolean.careers/exercises/api/random/int',
        metod:'GET',
        success:function (data,state) {
          var success = data['succes'];
          var number = data['response'];

          if (number <= 5) {
            var posizione = "#" + cell;
            $(posizione).append(number);
            $(posizione).addClass("yellow")
            cell++;
          } else if (number >= 5){
            var posizione = "#" + cell;
            $(posizione).append(number);
            $(posizione).addClass("green")
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
