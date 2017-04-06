var $introduction = $('<div class="announcement-container">' + 
                      '<div class="announcement delay 1500">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 3000">But you should know upfront,</div>' +
                      '<div class="announcement delay 4500">this is not a traditional love story.</div>' +
                      '</div>');

function start($screenContent){
    $('body').append($screenContent);
    var $delay = $('.delay');
    var delays = [];
    for(d in $delay){
      if ($delay[d].classList != undefined)
        delays.push(($delay[d].classList[2]));
    }
    for(dIdx in delays){
       delayDisplay($($delay[dIdx]), parseInt(delays[dIdx]));
    }
    return start; //return the function itself to reference
};

function delayDisplay($content, delay){
    setTimeout(function(){$content.css("opacity", 1)}, delay); 
};

$($('audio')[0].play());
$(start($introduction));
