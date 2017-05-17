let electron = require('electron');
let moment = require('moment');
global.jQuery = require('jquery');
require('bootstrap-loader');
require('./main.css');



window.addEventListener('load', function(event){
    let container = document.querySelector('#container');
    function updateTime(){
        container.innerHTML = moment().format('HH:mm:ss');
        setTimeout(updateTime, 1000);
    }
    setTimeout(updateTime, 1000);
});
