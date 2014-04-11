$(function(){
  var $sectionEl = $(".slide");
  var i = 0;
  var interval = setInterval(function () {
    i = i % $sectionEl.length;
    var nextObj = $($sectionEl[i]);
    nextObj.addClass("active").siblings().removeClass("active");
    //nextObj.find("h1").textillate();
    i++;
  }, 6000);
});
