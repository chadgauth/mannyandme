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

var $theymeetGo = $('<div class="heart-icon delay 6000 opacity 1 start-hidden fade-slow meetcont" id="heart"></div>' +
                 '<div class="heart delay 6000 opacity 1 start-hidden fade-slow meetcont">continue</div>')
              .bind("click", navigate7);

var $loveGo = $('<div class="heart-icon delay 20500 opacity 1 start-hidden fade-slow lovecont" id="heart"></div>' +
                 '<div class="heart delay 20500 opacity 1 start-hidden fade-slow lovecont">continue</div>')
              .bind("click", navigate8);

var $finalAnnouncements = $('<div class="announcement delay 0 opacity 1 start-hidden fade-slow meetc">So they became friends</div>' +
                            '<div class="announcement delay 2200 opacity 1 start-hidden fade-slow meetc">and they did everything together.</div>' +
                            '<div class="announcement delay 5500 opacity 1 start-hidden fade-slow meetc">They watched movies and played video games</div>' +
                            '<div class="announcement delay 8500 opacity 1 start-hidden fade-slow meetc">Drank coffee and talked nerd stuff</div>' +
                            '<div class="announcement delay 8500 opacity 1 start-hidden fade-slow meetc">and they were there for each other.</div>' +
                            '<div class="announcement delay 8500 opacity 1 start-hidden fade-slow meetc"> </div>' +
                            '<div class="announcement delay 11500 opacity 1 start-hidden fade-slow meetc">The seasons changed, and so did Manny\'s hair</div>' +
                            '<div class="announcement delay 20500 opacity 1 start-hidden fade-slow meetc">And, one day they fell in love</div>');

var $happyBday = $('<div class="announcement delay 0 opacity 1 start-hidden fade-slow">I\'ve enjoyed your friendship.</div>' +
                    '<div class="announcement delay 2200 opacity 1 start-hidden fade-slow">I\'ve enjoyed your love.</div>' +
                    '<div class="announcement delay 4500 opacity 1 start-hidden fade-slow">I hope this is your best birthday ever</div>' +
                    '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow">Cheers to our years together</div>' +
                    '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow">and the years to come.</div>' +
                    '<div class="announcement delay 7200 opacity 1 start-hidden fade-slow"> </div>' +
                    '<div class="announcement delay 10500 opacity 1 start-hidden fade-slow">Happy birthday Manny, my love.</div>' +
                    '<div class="announcement delay 13500 opacity 1 start-hidden fade-slow">From the bottom of my heart</div>' +
                    '<div class="announcement delay 15000 opacity 1 start-hidden fade-slow">-Chad</div>');

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

var $mannyChat1 = $('<p class="speech manny1">He\'s funny and smart. I like him</p>');
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
  $unremarkableScreen.append($mannyChat1);
  $unremarkableScreen.append($mannyChar);
  $unremarkableScreen.append($theymeetGo);
  executeDelays();
}

function navigate7(){
  $chadChar.removeClass('walkin');
  $chadChat1.remove();
  $mannyChat1.remove();
  $mannyChar.removeClass('slide-up');
  $mannyChar.addClass('friends2');
  $chadChar.addClass('friends2');
  $theymeetGo.remove();
  $unremarkableScreen.append($finalAnnouncements);
  $unremarkableScreen.append($loveGo);
  executeDelays();
}

function navigate8(){
  $chadChar.remove();
  $mannyChar.remove();
  $unremarkableScreen.removeClass('b-yellow');
  $('.announcement').remove();
  $loveGo.remove();
  $unremarkableScreen.append($happyBday);
  executeDelays();
}
