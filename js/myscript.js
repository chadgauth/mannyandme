var startOver = (function start(){
    $('body').append($('Hello'));

    return start; //return the function itself to reference
}()); //auto-run
