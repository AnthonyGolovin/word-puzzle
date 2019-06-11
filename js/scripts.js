
var vow =["a","e","i","o","u"];
var string;
var newReplaced;
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
       string =($("input#inputString").val());
       // alert(string);'
       // string.toLowerCase();
       var newStringArray = string.split("");
       // alert(newStringArray);
      for (var index = 0; index <= newStringArray.length-1; index += 1) {
            if( vow.includes(newStringArray[index])){

              newStringArray[index]="-";
            }
      }
      alert(newStringArray.join(''));
    });
  });
