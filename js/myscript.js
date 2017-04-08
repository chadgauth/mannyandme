var $introduction = $('<div class="announcement-container fade-slow full">' + 
                      '<div class="announcement delay 0 opacity 1 start-hidden fade-slow">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 3710 opacity 1 start-hidden fade-slow">But you should know upfront,</div>' +
                      '<div class="announcement delay 6700 opacity 1 start-hidden fade-slow">this is not a traditional love story.</div>' +
                      '</div>');
var $introGo = $('<div class="heart-icon delay 9000 opacity 1 start-hidden fade-slow" id="heart"></div>' +
                 '<div class="heart delay 9000 opacity 1 start-hidden fade-slow">continue</div>')
              .bind("click", navigate2);
$introduction.append($introGo);

var $phoneScreen = $('<div class="phone-container delay 0 opacity 1 start-hidden fade-slow full">');
var $grindrGo = $('<div class="grind"></div>').bind("click", navigate3);
$phoneScreen.append($grindrGo);

var $grindrScreen = $('<div class="grindr-container full">' +
                      '<div class="grindr-header" style="opacity: 1;">' +
                      '<div class="grind"></div></div></div>');

var $grindrContent = $('<div class="grindr-content"><div class="manny photo">' +
                       '<p>hquinnzel</p></div></div>');
var $chadGo = $('<div class="chad delay 4500 border-width 3px photo">' +
                '<p>waddup boys</p><div class="message delay 4500 opacity 1">2</div></div>')
              .bind("click", navigate4);
$grindrContent.append($chadGo).append(addPhoto("I'm boring")).append(addPhoto("Not worth it"))
.append(addPhoto("I won't respond")).append(addPhoto("I smell like fritos")).append(addPhoto("Who wants donuTs?"))
.append(addPhoto("U nekkid yet?")).append(addPhoto("eunuch 4 eunuch"));
$grindrScreen.append($grindrContent);
function addPhoto(text) {
  return $('<div class="photo"><p>' + text +'</p></div>')
}

var $chatContent = $('<div class="grindr-messages delay 500 height 500px"><div class="im-in" style="width:91px">The Flash!</div>' +
                     '<div class="im-in flash"></div>');
var $chatOptionsGo = $('</div><div class="choices delay 500 height 120px">' +
                     '<div class="choice">OMG so awesome!!!</div><div class="choice">Love it!!!</div>' +
                     '<div class="choice">ur a qt !!!!!1!! </div><div class="choice">Let\'s hang out :)</div></div>')
                    .bind("click", navigate5);
$chatContent.append($chatOptionsGo);

var $unremarkableScreen = $('<div class="announcement-container fade-slow full b-yellow">' + 
                      '<div class="announcement delay 0 opacity 1 start-hidden fade-slow meetc">Most days of the year are unremarkable.</div>' +
                      '<div class="announcement delay 0 opacity 1 start-hidden fade-slow meetc"> </div>' +      
                      '<div class="announcement delay 3210 opacity 1 start-hidden fade-slow meetc">They begin and they end with</div>' +
                      '<div class="announcement delay 3210 opacity 1 start-hidden fade-slow meetc">no lasting memory made in between.</div>' +
                      '<div class="announcement delay 3210 opacity 1 start-hidden fade-slow meetc"> </div>' +
                      '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow meetc">Most days have no impact</div>' +
                      '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow meetc">on the course of a life.</div>' +
                      '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow meetc"> </div>' +
                      '<div class="announcement delay 10700 opacity 1 start-hidden fade-slow meetc">But this was not one of those days.</div>' +
                      '</div>');

var $achievementGo = $('<div class="a-unlocked delay 12000 opacity 1 start-hidden fade-quick">Achievement Unlocked<br>New Friend</div>')
  .bind("click", navigate6);

$unremarkableScreen.append($achievementGo);


var $chadChat1 = $('<p class="speech">Android, Google, Band 12, Nexus 5x, Tmobile, samsung sucks, and I\'m Chad</p>');
var $chadChar = $(`<div class='kawaii'>
  <div class='head-wrap'>
    <div class='head'>
      <div class='hair-part-front skater'></div>
      <div class='hair-part-back skater'></div>
      <div class='skull'>
        <div class='face'>
          <div class='eye left'></div>
          <div class='eye right'></div>
          <div class='mouth'></div>
        </div>
      </div>
    </div>
  </div>
  <div class='torso'>
    <div class='shirt black square'></div>
    <div class='arm black left'></div>
    <div class='arm black right'></div>
    <div class='leg shoe left'></div>
    <div class='leg shoe right'></div>
    <div class='shorts long blue'></div>
  </div>
</div>`);


var $mannyChar = $(`<div class='kawaii'>
  <div class='head-wrap'>
    <div class='head'>
      <div class='hair-part-front skater puff'></div>
      <div class='hair-part-back skater puff'></div>
      <div class='skull'>
        <div class='face'>
          <div class='eye left'></div>
          <div class='eye right'></div>
          <div class='mouth'></div>
        </div>
      </div>
    </div>
  </div>
  <div class='torso'>
    <div class='shirt square'></div>
    <div class='arm left'></div>
    <div class='arm right'></div>
    <div class='leg shoe left'></div>
    <div class='leg shoe right'></div>
    <div class='shorts'></div>
  </div>
</div>`);

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
  $phoneScreen.remove();
  start($grindrScreen);
  $('meta[name="theme-color"]')[0].content = "#000";
}

function navigate4(){
  $grindrContent.remove();
  $('.grind').remove();
  $grindrScreen.append($chatContent);
  executeDelays();
}

function navigate5(){
 $grindrScreen.remove();
 $('meta[name="theme-color"]')[0].content = "#fff0c8";
 start($unremarkableScreen);
}

function navigate6(){
  $('.announcement').remove();
  $($achievementGo).remove();
  $chadChar.addClass('walkin');
  $chadChat1.addClass('walkin');
  $mannyChar.addClass('mannychar slide-up');
  $unremarkableScreen.append($chadChat1);
  $unremarkableScreen.append($chadChar);
  $unremarkableScreen.append($mannyChar);
}
