import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .menu__list, .header__button, body').toggleClass('active');
    })
})