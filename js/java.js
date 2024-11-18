$(document).ready(function (){

    let $btns = $('.broduct-aria .button-group button');

    $btns.click(function(e){

        $('.broduct-aria .button-group button').removeClass('active');
        e.target.classList.add("active");





        let selector = $(e.target).attr('data-filter');
        $('.broduct-aria .aria').isotope({
            filter:selector
        });
    })
return false;


});