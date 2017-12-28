const electron = require('electron');
const moment = require('moment');
global.jQuery = require('jquery');
require('bootstrap-loader');
require('./main.css');


window.addEventListener('load', function(event){
    let time_bar = document.querySelector('#time_bar');
    function updateTime(){
        time_bar.innerHTML = moment().format('HH:mm:ss');
        setTimeout(updateTime, 1000);
    }
    setTimeout(updateTime, 1000);

    let about_button = document.querySelector('#about_button');
    about_button.addEventListener('click', function(event){
        jQuery('#about_model').modal();
    });

    let current_style = 'white';
    time_bar.style.backgroundColor = 'black';
    time_bar.style.color = 'white';

    let change_background_button = document.querySelector('#change_background_button');
    change_background_button.addEventListener('click', function(event){
        if(current_style === 'black') {
            time_bar.style.backgroundColor = 'black';
            time_bar.style.color = 'white';
            current_style = 'white';
        } else if(current_style === 'white') {
            time_bar.style.backgroundColor = 'white';
            time_bar.style.color = 'black';
            current_style = 'black';
        }
    });
});
