var $introduction = $('<div class="announcement-container">' + 
                      '<div class="announcement delay 500">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 1000">But you should know upfront,</div>' +
                      '<div class="announcement delay 1500">This is not a traditional love story.</div>' +
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
      setTimeout($delay[dIdx].css("opacity", 1), delays[dIdx]);  
    }
    return start; //return the function itself to reference
};

$(start($introduction));
