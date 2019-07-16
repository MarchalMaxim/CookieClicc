"use strict";
let cookiesPerSecond = 1;
let clickValue;
let availablePowerups = [];
let numCookies = 0;
let clickListenerCallback;
let passiveIncome;

const UPDATE_INTERVAL = 100; // ms
const COOKIE_COUNTER = document.getElementById("cookie-counter");
const MAIN_COOKIE = document.getElementById("main-cookie");

class passiveIncomeGenerator {
    constructor() {
        this.cookiesPerSecond = 0.1;
        this.passiveIncomeCallback = () => {
            increaseCookies(this.cookiesPerSecond);
        }
    }
    
    init() {
        this.passiveIncomeInterval = setInterval(this.passiveIncomeCallback, UPDATE_INTERVAL);
    }

    increasePassiveIncome(amount) {
        clearInterval(passiveIncomeInterval);
        this.cookiesPerSecond += amount;
        this.passiveIncomeInterval = () => {
            increaseCookies(this.cookiesPerSecond);
        }
        MAIN_COOKIE.addEventListener(UPDATE_INTERVAL, this.passiveIncomeInterval);
    }

    setPassiveIncomeTo(amount) {
        this.cookiesPerSecond = amount;
        clearInterval(passiveIncomeInterval);
        this.passiveIncomeInterval = () => {
            increaseCookies(this.CookiesPerSecond);
        }
        MAIN_COOKIE.addEventListener(UPDATE_INTERVAL, this.passiveIncomeInterval);
    }
}

var main = function() {
    initializeClickListener();
    clickValue = 1;
    passiveIncome = new passiveIncomeGenerator();
    passiveIncome.init();
}

function initializeClickListener() {
    // Attaches a click listener to the big cookie
    setClickValue(clickValue);
}

function setClickValue(amount) {
    MAIN_COOKIE.removeEventListener('click',clickListenerCallback);

    clickListenerCallback = () => {
        numCookies += clickValue;   
    }
    MAIN_COOKIE.addEventListener('click',clickListenerCallback);
}



function increaseCookies(amount) {
    // increases the amount of cookies the player has.
    numCookies += amount;
    updateCookies();
}

function updateCookies() {
    // Updates the cookie-counter.
    COOKIE_COUNTER.innerHTML = Math.round(numCookies);
}


window.onload = main;