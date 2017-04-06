var $introduction = $('<div class="announcement-container">' + 
                      '<div class="announcement delay 0">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 4310">But you should know upfront,</div>' +
                      '<div class="announcement delay 8700">this is not a traditional love story.</div>' +
                      '</div>').bind("click", function(){ $('meta[name="theme-color"]')[0].content = "#00FF00"; });

function start($screenContent){
    $('body').append($screenContent);
    executeDelays(); 
};

function delayDisplay($content, delay){
    setTimeout(function(){$content.css("opacity", 1)}, delay); 
};

function executeDelays(){
 var $delay = $('.delay');
    var delays = [];
    for(d in $delay){
      if ($delay[d].classList != undefined)
        delays.push(($delay[d].classList[2]));
    }
    for(dIdx in delays){
       delayDisplay($($delay[dIdx]), parseInt(delays[dIdx]));
    } 
}

$($('audio')[0].play());
$(start($introduction));
