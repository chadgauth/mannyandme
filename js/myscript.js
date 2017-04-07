var $introduction = $('<div class="announcement-container full">' + 
                      '<div class="announcement delay 0 opacity 1 start-hidden fade-slow">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 4310 opacity 1 start-hidden fade-slow">But you should know upfront,</div>' +
                      '<div class="announcement delay 7700 opacity 1 start-hidden fade-slow">this is not a traditional love story.</div>' +
                      '</div>');
var $introGo = $('<div class="heart-icon delay 9000 opacity 1 start-hidden fade-slow" id="heart"></div>' +
                 '<div class="heart delay 9000 opacity 1 start-hidden fade-slow">continue</div>')
              .bind("click", function(){ $('meta[name="theme-color"]')[0].content = "#86B094"; start($phoneScreen) });
$introduction.append($introGo);

var $phoneScreen = $('<div class="phone-container full">');

function start($content){
    $('.full').remove();
    $('body').append($content);
    executeDelays(); 
};

function executeDelays(){
 var $delay = $('.delay');
    var delays = [];
    var props = [];
    var values = [];
    for(d in $delay){
      if ($delay[d].classList != undefined)
      delays.push(($delay[d].classList[2]));
      props.push(($delay[d].classList[3]));
      values.push(($delay[d].classList[4]));
    }
    for(idx in delays){
       delayCSS($($delay[idx]), parseInt(delays[idx]), props[idx], values[idx]);
    } 
}

function delayCSS($content, delay, cssProp, value){
    setTimeout(function(){$content.css(cssProp, value)}, delay); 
};

$($('audio')[0].play());
$(start($introduction));
