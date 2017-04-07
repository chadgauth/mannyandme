var $introduction = $('<div class="announcement-container fade-slow">' + 
                      '<div class="announcement delay 0 opacity 1 start-hidden fade-slow">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 3710 opacity 1 start-hidden fade-slow">But you should know upfront,</div>' +
                      '<div class="announcement delay 6700 opacity 1 start-hidden fade-slow">this is not a traditional love story.</div>' +
                      '</div>');
var $introGo = $('<div class="heart-icon delay 9000 opacity 1 start-hidden fade-slow" id="heart"></div>' +
                 '<div class="heart delay 9000 opacity 1 start-hidden fade-slow">continue</div>')
              .bind("click", navigate2);
$introduction.append($introGo);

var $phoneScreen = $('<div class="phone-container delay 0 opacity 1 start-hidden fade-slow">');
var $grindrGo = $('<div class="grind"></div>').bind("click", navigate3);;
$phoneScreen.append($grindrGo);

var $grindrScreen = $('<div class="grindr-container">' +
                      '<div class="grindr-header" style="opacity: 1;">' +
                      '<div class="grind"></div></div></div>');

var $grindrContent = $('<div class="grindr-content"><div class="manny photo"> +
                       '<p>hquinnzel</p></div></div>');

var $chadGo = $('<div class="chad delay 1500 border-width 3px photo">' +
                '<p>waddup boys</p><div class="message delay 1500 opacity 1">2</div></div>');

$grindrContent.append($chadGo).append(addPhoto("I'm boring")).append(addPhoto("Not worth it"))
.append(addPhoto("I won't respond")).append(addPhoto("I smell like fritos")).append(addPhoto("Who wants donuTs?"))
.append(addPhoto("U nekkid yet?")).append(addPhoto("Eunuch 4 eunuch"));

$grindrScreen.append($grindrContent);

function addPhoto(text) {
  return $('<div class="photo"><p>' + text +'</p></div>')
}

function start($content){
    $('body').append($content);
    executeDelays(); 
};

function executeDelays(){
 var $delay = $('.delay');
    var delays = [];
    var props = [];
    var values = [];
    for(d in $delay){
      if ($delay[d].classList != undefined){
        delays.push(($delay[d].classList[2]));
        props.push(($delay[d].classList[3]));
        values.push(($delay[d].classList[4]));
      }
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

function navigate2(){
  $introduction.css('opacity', 0);
  start($phoneScreen);
  setTimeout(function(){
    $introduction.remove();
    $('meta[name="theme-color"]')[0].content = "#86B094";
  }, 2000) 
}

function navigate3(){
  $phoneScreen.css('opacity', 0);
  start($grindrScreen);
  setTimeout(function(){
    $phoneScreen.remove();
    $('meta[name="theme-color"]')[0].content = "#000";
  }, 2000) 
}
