var $introduction = $('<div class="announcement-container">' + 
                      '<div class="announcement delay 500">This is a story of boy meets boy.</div>' +
                      '<div class="announcement delay 1000">But you should know upfront,</div>' +
                      '<div class="announcement delay 1500">This is not a traditional love story.</div>' +
                      '</div>');

function start($screenContent){
    $('body').append($screenContent);
    return start; //return the function itself to reference
};

$(start($introduction));
