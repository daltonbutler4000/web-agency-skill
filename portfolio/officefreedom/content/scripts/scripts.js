// var offices = require('./offices').offices;
import { places } from './offices.js';

///////////////////////// ALL PAGES //////////////////////////


// Media query 
var downSM = window.matchMedia("screen and (max-width:575px)").matches;
var upSM = window.matchMedia("screen and (min-width:567px)").matches;
var downMD = window.matchMedia("screen and (max-width:767px)").matches;
var upMD = window.matchMedia("screen and (min-width:768px)").matches;
var downLG = window.matchMedia("screen and (max-width:991px)").matches;
var upLG = window.matchMedia("screen and (min-width:992px)").matches;
var downXL = window.matchMedia("screen and (max-width:1199px)").matches;
var upXL = window.matchMedia("screen and (min-width:1200px)").matches;

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isInViewportTop = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementTop + 200 < viewportBottom;
};

//>>>>>>>>>>>>>>>>>> RECENT SEARCH COOKIE SET/GET/CHECK <<<<<<<<<<<<<<<<<<<//

// create Recent Search Array 
var rsArr = ["Shoreditch", "Hackney"];

// Recent Search set Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    var cookieStr = '';

    // Loop over the array
    for(var i=0;i<cvalue.length;i++) {
        cookieStr += cvalue[i]+',';
    }

    // Remove the last comma from the final string
    cookieStr = cookieStr.substr(0,cookieStr.length-1);
    document.cookie = cname+'='+cookieStr+';expires='+expires+';domain='+document.domain;
}

// add New Recent Search to array
function updateCookie(cname, cvalue, exdays){
  let sCookies = getCookie(cname);
  let saCookies = sCookies.split(',');

  if(!saCookies.includes(cvalue)){
    saCookies.push(cvalue);
  } else {
    return;
  }

  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  var cookieStr = '';

  // Loop over the array
  for(var i=0;i<saCookies.length;i++) {
      cookieStr += saCookies[i]+',';
  }

  // Remove the last comma from the final string
  cookieStr = cookieStr.substr(0,cookieStr.length-1);
  document.cookie = cname+'='+cookieStr+';expires='+expires+';domain='+document.domain;
}

// Get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check cookie
function checkCookie(cname) {
    var rsearch = getCookie(cname);
    if (rsearch != "") {
        return true;
        console.log(rsearch)
    } else {
        return false;
        console.log('No cookie')
    }
}


// Set Recent Search Cookie if empty manually for testing
if(checkCookie('of_rs') == false) {
    setCookie('of_rs', rsArr, 1);
}

//>>>>>>>>>>>>>>>>>> NEARBY OFFICES FUNCTIONALITY <<<<<<<<<<<<<<<<<<<//

let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
        const spinnerContainer = document.createElement('div');
        spinnerContainer.setAttribute('class','d-flex align-items-center geo-spinner');
        const spinner = document.createElement('div');
        spinner.setAttribute('class','spinner-border text-primary');
        const spinnerTxt = document.createTextNode('loading');
        spinnerContainer.appendChild(spinner)
        spinnerContainer.appendChild(spinnerTxt);
        const geolocation = document.getElementById('nearby-offices-container');
        geolocation.innerHTML = "";
        geolocation.appendChild(spinnerContainer);
    } else { 
        x.parentNode.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Convert Degrees to Radians
function deg2rad(degrees){
    var pi = Math.PI;
    return degrees * (pi/180);
}

// Convert Radians to Degrees
function rad2deg(radians){
    var pi = Math.PI;
    return radians * (180/pi);
}

// Get distance between two points
function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2, $unit = 'Mi') {
    let $theta = $longitude1 - $longitude2;
    let $distance = Math.sin(deg2rad($latitude1)) * Math.sin(deg2rad($latitude2)) + Math.cos(deg2rad($latitude1)) * Math.cos(deg2rad($latitude2)) * Math.cos(deg2rad($theta));

    $distance = Math.acos($distance); 
    $distance = rad2deg($distance); 
    $distance = $distance * 60 * 1.1515;

    switch($unit) 
    { 
        case 'Mi': break;
        case 'Km' : $distance = $distance * 1.609344; 
    }

    return (Math.round($distance,2)); 
}

// Create List of Nearby offices
function showPosition(position) {
    let x = document.getElementById('nearby-offices-container');

    // get user coordinates
    let myLat = position.coords.latitude;
    let myLng = position.coords.longitude;

    // x.innerHTML = "Your Latitude: " + myLat + 
    // "<br>Your Longitude: " + myLng + "<br>";
    x.innerHTML = "";
    let nearbyOffices = false;
    // loop for all offices locations
    for (let i = 0; i < places.offices.length; i++) {
        // check distance between user location and office loacation in kilometers
        let distance = getDistanceBetweenPointsNew(places.offices[i].lat, places.offices[i].lng, myLat, myLng, 'Km');
        // set the distance range
        let range = 68;

        let a = document.createElement("DIV");
        a.setAttribute("class", "nearby-office");

        // if distance is lower than range display office names
        if(distance <= range){
            nearbyOffices = true;
            // x.innerHTML = x.innerHTML + places.offices[i].title + '<br>';
            // let b = document.createElement("DIV");
            let inp = document.getElementById('myLocation');
            a.innerHTML += places.offices[i].title;
            /*insert a input field that will hold the current array item's value:*/
            a.innerHTML += "<input type='hidden' value='" + places.offices[i].title + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            a.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
            });
            // a.appendChild(b);
            x.appendChild(a)
        } 
    } 

    if(!nearbyOffices) {
      const c = document.createElement('div');
      c.setAttribute('class', 'nearby-offices')
      const d = document.createTextNode('Sorry, there are no offices nearby')
      c.appendChild(d);
      x.appendChild(c);
  }
}

// Show errors if getlocation has and issues
function showError(error) {
    let x = document.getElementById('nearby-offices-container');
    x.setAttribute('class', 'geolocation-error');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

// Mobile back arrow functionality
let backArr = document.getElementsByClassName('backArr')[0];
if(backArr){
  backArr.addEventListener('click', function(e){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('search-active');
      let inp = document.getElementById('myLocation');
      inp.classList.remove('open');
      let nearbyActive = document.getElementById('nearby-offices-container');
      if(nearbyActive){
          nearbyActive.parentNode.removeChild(nearbyActive);
      }
  
      if(body.classList.contains('home-page')){
        inp.setAttribute('placeholder','e.g. London or NW1')
      } else {
        inp.setAttribute('placeholder','Shoreditch')
      }
      inp.value = "";
      let autocomplete = document.getElementById('myLocation-autocomplete-list');
      if(autocomplete){
          autocomplete.parentNode.removeChild(autocomplete);
      }
      if(document.body.classList.contains('listing-page')) {
          document.getElementsByClassName('footer-mobile-menu')[0].style.display = 'block';
      }
  })
}


// Autocomplete
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;

      // After Search Input Click show dropdown with Nearby button and Recent Search list
      inp.addEventListener("click", function(e){

        if(document.getElementById('nearby-offices-container')){ return; }

        const body = document.getElementsByTagName('body')[0];      
        // remove 
        inp.setAttribute('placeholder','');

        // For mobile
        if(downMD){
          body.classList.add('search-active');

          if(body.classList.contains('listing-page')) {
              document.getElementsByClassName('footer-mobile-menu')[0].style.display = 'none';
          }
        }

        // Nearby
        let nerby = document.createElement("DIV");
        nerby.setAttribute('id', 'nearby-offices-container');

        // Nearby offices list container
        let nerbyOffices = document.createElement("DIV");
        nerbyOffices.classList.add('nearby-offices');

        let getlocation = document.createElement('a');
        getlocation.setAttribute('href', "#");
        getlocation.setAttribute('id', "getlocation");

        let text = document.createTextNode('Nearby');
        getlocation.appendChild(text);

        this.parentNode.appendChild(nerby);
        nerby.appendChild(nerbyOffices);
        nerbyOffices.appendChild(getlocation);

        
        // Recent Search
        const rsList = document.createElement("div");
        rsList.setAttribute('id', 'recent-search-container');
        
        let rsCookie = getCookie('of_rs').split(",");

        // If cookie with Recent Search is set create Recent Searches list
        if(rsCookie.length > 1){
          
          // Create title element
          const rsListH3 = document.createElement('h3');
          const h3text = document.createTextNode('Recent Searches');
          rsListH3.appendChild(h3text);
          rsList.appendChild(rsListH3);
          nerby.appendChild(rsList);


          const rsListItems = document.createElement('div');
          rsList.appendChild(rsListItems);

            for(let i=0; i<rsCookie.length; i++){
                let rsItem = document.createElement('div');
                let rsInput = document.createElement('input');
                rsInput.setAttribute('type','hidden');
                rsInput.setAttribute('value',rsCookie[i]);

                rsItem.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  let nearby = document.getElementById('nearby-offices-container');
                  if(nearby) {
                    nearby.parentNode.removeChild(nearby);
                    inp.classList.remove('open')
                  }
                })

                rsItem.appendChild(document.createTextNode(rsCookie[i]))
                rsItem.appendChild(rsInput);

                rsListItems.appendChild(rsItem);
            }
        } 

        getlocation.addEventListener('click', function(e) {
            // e.preventDefault();
            e.stopPropagation();
            getLocation();
        })
        
        nerby.style.display = "block"
        this.classList.add('open');
      })
    

    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "-autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);

        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            if(b) {
              a.classList.add('list-visible')
              inp.classList.add('open');
              let nearby = document.getElementById('nearby-offices-container')

              if(nearby && upMD){
                  nearby.parentNode.removeChild(nearby);
              }
            }
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "-autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.key == "Escape") {
          this.classList.remove('open');
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            // e.preventDefault();
            if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
            }
        }
    });

    inp.addEventListener("search", 
    function(event){
      if(event.type === "search"){
        if(event.currentTarget.value !== ""){
          // hitSearchAjax(event.currentTarget.value);
        } else {
          inp.classList.add('open');
          console.log('cleared search')
        }
      }
    });

    const sof = document.getElementById('search-offices-form');
    sof.addEventListener('submit', function(e){
      // e.preventDefault();
      let cname = inp.value;
      updateCookie('of_rs', cname, 1)
    })

    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        var c = document.getElementById('myLocation');
        
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            } 
            c.classList.remove('open');
        }
    }

    inp.addEventListener('click', function(e){
      e.stopPropagation();
    })

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
        let nearby = document.getElementById('nearby-offices-container');
        let body = document.getElementsByTagName('body')[0];
        if(nearby){
          nearby.parentNode.removeChild(nearby);
          inp.classList.remove('open');
          if(body.classList.contains('home-page')){
            inp.setAttribute('placeholder','e.g. London or NW1')
          } else {
            inp.setAttribute('placeholder','Shoreditch')
          }
        }
    });
}

var mlocation = document.getElementById("myLocation");

if(mlocation) {
  // array of locations created manually, for final should be provided from main Places array
  var locations = ["London, UK", "London Bridge, Central London UK", "Long Island, New York State, US", "Kings Road, York, UK", "Green Lane, Watford, UK", "Chester Road, Telford, UK", "Church Street, Leeds, UK", "Park Road, Hull, HU27 UK", "King Street, Dundee, UK", "Highfield Road, Taunton, UK", "Main Road, Outer Hebrides, UK", "West Street, Worcester, UK", "Grove Road, Guildford, UK", "Victoria Road, Hereford, UK", "The Grove, Brighton, UK", "South Street, Galashiels, UK", "Windsor Road, Southall, UK", "Kingsway, EAST London, UK", "George Street, Aberdeen, UK", "The Avenue, Shrewsbury, UK", "Broadway, Durham, UK", "Park Avenue, Slough, UK", "Alexander Road, Preston, UK"];
  autocomplete(document.getElementById("myLocation"), locations);
}

// Navigation hidde on scroll down and show after scroll up
var myElement = document.getElementById("site-header");
var headroom  = new Headroom(myElement, options);
headroom.init();


// Remove button stay clicked state on mobile 
document.addEventListener('click', function(e) { 
  if(document.activeElement.toString() == '[object HTMLButtonElement]'){ 
    document.activeElement.blur(); 
  } 
});

// Avoid 100vh On Mobile Web
function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};
addEventListener('resize', setDocHeight)
addEventListener('orientationchange', setDocHeight)   
setDocHeight();

$(document).ready(function(){

  $('.site-header').show();

  // Open/close Menu Dropdown
  $('.hamburger-btn .nav-link').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('show');
    $('.menu-dropdown').toggleClass('show').trigger('menuActive');
    event.stopPropagation();
  });

  $('.menu-dropdown').on('click', function(event){
      event.stopPropagation();
  });

  // Close Menu Dropdown after click outside
  $('body').on('click', function(e){
    $('.menu-dropdown, .hamburger-btn .nav-link').removeClass('show');
    headroom.unfreeze();
  })

  $('.menu-dropdown').on('menuActive', function(){
    if($(this).hasClass('show')){
      headroom.freeze();
    } else {
      headroom.unfreeze();
    }
  })

  // detect if element is in viewport
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  })

  // Mobile menu functionality
  $("#admin-slideout-button").click(function () {
    $(".mobile-menu").toggleClass("active"),
    $(".screen-overlay").toggleClass("active");
  })

  $("#close").click(function () {
    $(".mobile-menu").toggleClass("active"),
    $(".screen-overlay").toggleClass("active");
  })

  // Mobile menu submenu
  $(".next").click(function () {
    $('#initial').removeClass('active');
    $('#currentMenu').addClass('active');
    var target = $("#" + $(this).data("target"));
    $("#currentMenu").text(target.data("name"));
    $("#back").attr("data-target", $(".menu.active").attr("id"));
    $(".menu.active").removeClass("active");
    $(target).addClass("active");
    if (!$(".root-menu").hasClass("active")) {
        $("#back").addClass("active");
    } else {
        $("#back").removeClass("active");
    }
  });
  
  $("#back").click(function () {
      var target = $("#" + $(".menu.active").data("parent"));
      $("#currentMenu").text(target.data("name"));
      $("#back").attr("data-target", $(target).attr("id"));
      $(".menu.active").removeClass("active");
      $(target).addClass("active");
      if (!$(".root-menu").hasClass("active")) {
          $("#back").addClass("active");
      } else {
          $("#back").removeClass("active");
          $('#initial').addClass('active');
          $('#currentMenu').removeClass('active');
      }
  });

  // Retina Support for inline BG Images
  if(window.devicePixelRatio >= 1.2){
    var elems = document.getElementsByTagName('*');
    for(var i=0;i < elems.length;i++){
      var attr = elems[i].getAttribute('data-2x');
      if(attr){
        elems[i].style.cssText += 'background-image: url('+attr+')';
      }
    }
  }

  // Footer show more
  $('.menu-more').click(function(event) {
    event.preventDefault();
    $(this).siblings(".more-hidden").toggle(),
    $(this).toggleClass('show');
    var x = $(this).children('.more-less')[0];
    if (x.innerHTML === "More") {
      x.innerHTML = "Less";
    } else {
      x.innerHTML = "More";
    }
  });
});

    
// Initialize slick slider for Text Below Nav
$('.txt-below-nav').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 0,
  slidesToShow: 3,
  variableWidth: true,
  waitForAnimate: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      }
    }
  ]
});
$('.txt-below-nav').show();

// Initialize slick slider for Recently viewed offices section
$('.offices-carousel').each( function() {
  $(this).slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $(this).parents('.offices-carousel-section').find('.slider-navigation'),
    prevArrow: '<a class="slick-prev slick-arrow"><span></span></a>',
    nextArrow: '<a class="slick-next slick-arrow"><span></span></a>',
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
  $('.offices-carousel').show();
});

$('.save-offer').click(function(event){
  event.preventDefault();
  if($(this).hasClass('saved')){
    $(this).removeClass('saved');
    $(this).css('fill', '#DEE1E4');
    $(this).on('mouseleave touchend',function(){
      $(this).css('fill', '');
    })
    place.saved = false;
    
  } else {
    $(this).addClass('saved');
    if(document.body.classList.contains('listing-page')){
      place.saved = true;
    }
  }
});



//////////////////////// HOME PAGE ///////////////////////////

if(document.body.classList.contains('home-page')){

    $(document).ready(function(){

    // random hero image
    var random = Math.floor(Math.random() * $('.hero-image').length);
    $('.hero-image').eq(random).show();

    // Initialize slick slider for Office Suppliers section
    $('.office-suppliers-carousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendArrows: $('.major-office-navigation'),
      prevArrow: '<a class="slick-prev slick-arrow"><span></span></a>',
      nextArrow: '<a class="slick-next slick-arrow"><span></span></a>',
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
    $('.office-suppliers-carousel').show();

    // Initialize slick slider for Office Suppliers section
    $('.office-suppliers-carousel-home').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      appendArrows: $('.major-office-navigation'),
      prevArrow: '<a class="slick-prev slick-arrow"><span></span></a>',
      nextArrow: '<a class="slick-next slick-arrow"><span></span></a>',
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
    $('.office-suppliers-carousel-home').show();

    // Initialize slick slider for Case Study section
    $('.case-study-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      appendDots: $('.case-study-bullets'),
      appendArrows: $('.case-study-arrows'),
      prevArrow: '',
      nextArrow: '<a class="slick-next slick-arrow"><span></span></a>',
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            arrows: false
          }
        },
      ]
    });
    $('.case-study-carousel').show();
  });
}

//////////////////////// LISTING PAGE ///////////////////////////

$(document).ready(function() {

// Quick Enquiry form 
  if(document.body.classList.contains('listing-page-new')) {
    $('#enquiry-contact-form').on('submit', function(e) {
      e.preventDefault();
      $('.qformtab-1').hide();
      $('.consultant, .formtab-end-contact').show()
      document.getElementById('enquiry-contact-form').reset();
    });
  }

  if(document.body.classList.contains('listing-page') && !document.body.classList.contains('listing-page-new')){
    
    // Range sliders
    var slider = document.getElementById('team-range');
    noUiSlider.create(slider, {
      start: 1,
      connect: 'lower',
      tooltips: true,
      range: {
          'min': 1,
          'max': 100
      },
      format: wNumb({
        decimals: 0,
      }),
    });

    var slider = document.getElementById('price-range');
    noUiSlider.create(slider, {
      start: [0, 14000],
      connect: true,
      tooltips: true,
      range: {
          'min': 0,
          'max': 18000
      },
      format: wNumb({
        decimals: 0,
        thousand: ',',
        prefix: '£'
      }),
    });


    var slider = document.getElementById('m-price-range');
    noUiSlider.create(slider, {
      start: [0, 600],
      connect: true,
      tooltips: true,
      range: {
          'min': 0,
          'max': 800
      },
      format: wNumb({
        decimals: 0,
        thousand: ',',
        prefix: '£'
      }),
    });

    // Show more filters 
    $('.show-more').click(function(event){
      event.preventDefault();
      $(this).toggleClass('show'),
      $('.more-filters').toggle('fast');
      var x = $(this).children('.more-less')[0];
      if (x.innerHTML === "More") {
        x.innerHTML = "Less";
      } else {
        x.innerHTML = "More";
      }
    });

    // Reset filters
    $('.reset-filters').click(function(event){
      event.preventDefault();
      $('.form-check-input').prop("checked",false);
    });

    $("#footer-mmenu-filters").click(function () {
      $(".mobile-filters-menu").toggleClass("active"),
      $(".screen-overlay").toggleClass("active");
    })

    $("#mclose").click(function () {
      $(".mobile-filters-menu").toggleClass("active"),
      $(".screen-overlay").toggleClass("active");
    })
  };
});

if(document.body.classList.contains('listing-page')){

//////////////////////// MAP VIEW ///////////////////////////

  // Map View
  $('#map-view').on('click', function(e){
    $('.column-right, .sortby-dropdown').toggle()
    $('#map').toggle();
    $('body, .column-left, .wrapper-xxl-left').toggleClass('map-active');
    document.getElementById('offices-popup').innerHTML = "";
    $('.popup-container').removeClass('active');
    if(!$('.column-left').hasClass('map-active')){
      $('.offices-thumbnails').slick('setPosition');
    }

    const elem = $(this).find('span');
    if (elem.text()=="View map") elem.html("Close map");
    else elem.html("View map");
  });

  $('#map-view-md').on('click', function(e){
    $('body').toggleClass('map-active-md');
    $('.column-right, .column-rigth, .sortby-dropdown').toggle();
    $('#map').toggle();
    document.getElementById('offices-popup').innerHTML = "";
    $('.popup-container').removeClass('active');
  
    if(!$('.column-left').hasClass('map-active')){
      $('.offices-thumbnails').slick('setPosition');
    }
    const elem = $(this).find('span');
    if (elem.text()=="View map") elem.html("Close map")
    else elem.html("View map")
  })


  $('#footer-mmenu-map').on('click', function(e){
    $('#mapMobile').toggle().toggleClass('mobile-map-active')
    $('main, footer').toggle();
    $(this).toggleClass('active')
    const elem = $(this).contents().last()[0];
    if (elem.textContent == "Map View") {
      elem.textContent="Listings view";
    } else {
      elem.textContent="Map View";
    }
  });

  // List/Grid view
  $('#switch-view').click(function(event){
    event.preventDefault();
    $('#offices .item').toggleClass('list-group-item'),
    $('#offices, .aera-guide').toggleClass('grid-view'),
    $(this).toggleClass('grid');
    
    if ($('body').hasClass('map-active')){
      $('.wrapper-xxl-left, .column-left, body').removeClass('map-active')
      $('#map-view-canvas, #map, .column-right, .sortby-dropdown').toggle()
      $('.offices-thumbnails').slick('setPosition')
      const elem = $('#map-view').find('span')
      if (elem.text()=="View map") elem.html("Close map")
      else elem.html("View map")
    }
  });

  var bindEvent = function (element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        element.attachEvent('on' + type, handler);
    }
  };

  var myLatLng = {lat: 51.55322, lng: -0.217752};

  function initMapView() {
    var mapView = new google.maps.Map(document.getElementById('map-view-canvas'), {
      center: myLatLng,
      zoom: 14,    
      // disableDefaultUI: false,
      mapTypeControl: false,
      scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    });

    function initPublicTransportControl(mapView) {
      
      const transitLayer = new google.maps.TransitLayer();
      const checkBox = document.querySelector("#public-transport-check-2");
    
      checkBox.addEventListener( 'change', function() {
          if(this.checked) {
            transitLayer.setMap(mapView);
          } else {
            transitLayer.setMap(null);
          }
      });

      mapView.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
        document.querySelector(".public-transport-control-2")
      );
    }
    initPublicTransportControl(mapView);

    //Offices info popup located top left corner of the map
    function mapPopup(mapView) {
      mapView.controls[google.maps.ControlPosition.LEFT_TOP].push(
        document.querySelector("#offices-popup")
      );
    }
    mapPopup(mapView);

    setButtonsMap(mapView);
  }
  google.maps.event.addDomListener(window, 'load', initMapView);


  function initMapMobile() {
    var mapViewMobile = new google.maps.Map(document.getElementById('mapMobile'), {
      center: myLatLng,
      zoom: 14,    
      // disableDefaultUI: true,
      mapTypeControl: false,
      // scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: false,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    });

    //Offices info popup located top left corner of the map
    function mmapPopup(mapViewMobile) {
      mapViewMobile.controls[google.maps.ControlPosition.LEFT_TOP].push(
        document.querySelector("#offices-popup")
      );
    }
    mmapPopup(mapViewMobile);

    setButtonsMap(mapViewMobile);
  }
  google.maps.event.addDomListener(window, 'load', initMapMobile);


  function setButtonsMap(mapViewMobile) {
    class Popup extends google.maps.OverlayView {
      constructor(position, content, price, saved, id) {
        super();
        this.position = position;          
        this.containerDiv = document.createElement("div");
        // this.containerDiv.setAttribute("href", url);
        this.containerDiv.classList.add("marker-btn");
        this.containerDiv.innerHTML = price;
        this.containerDiv.classList.add(`marker-${id}`)
        const heartlink = document.createElement('a');
        heartlink.href = `#${id}`;
        
        const heart = document.createElement("span");
        heartlink.classList.add('save-offer');

        heartlink.appendChild(heart);

        this.containerDiv.appendChild(heartlink);
        if(saved){
          this.containerDiv.classList.add("saved");
        }
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);

      }
      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
        var me = this;

        google.maps.event.addDomListener(this.containerDiv, 'click', function() {
          google.maps.event.trigger(me, 'click');
          $('.marker-btn').removeClass('active')
          this.classList.add('active')
        });
      }
      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }
      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        );
        // Hide the popup when it is far out of view.
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";

        if (display === "block") {
          this.containerDiv.style.left = divPosition.x + "px";
          this.containerDiv.style.top = divPosition.y + "px";
        }

        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }
      }
    }

    for (var i = 0; i < places['offices'].length; i++) {
      var place = places['offices'][i];
      var popup = new Popup(
        new google.maps.LatLng(place.lat,place.lng),
        document.getElementById("map-popup"),
        place.price,
        place.saved,
        place.id,
      );
      popup.setMap(mapViewMobile);

      bindEvent(popup['containerDiv'].children[0], 'click', (function(place,i) {
        return function(e) {
          e.preventDefault();
          $(`.marker-${this.hash.substring(1)}`).toggleClass('saved')
          $(`.office-${this.hash.substring(1)} .save-offer-map`).toggleClass('saved')
          if($(`.marker-${this.hash.substring(1)}`).hasClass('saved')){
            place.saved = true;
          } else {
            place.saved = false;
          }
        }
      })(place,i));

      google.maps.event.addListener(popup, 'click', (function (place) {

        return function (e) {
            var template = Handlebars.compile(document.getElementById('map-popup').innerHTML)
            var content = document.getElementById('offices-popup');
            content.innerHTML = template(place);
            $('.offices-thumbnails').not('.slick-initialized').slick({
              dots: true,
              arrows: true,
              infinite: true,
              autoplay: false,
              slidesToShow: 1,
            });

            $('.save-offer-map').click(function(e){
              e.preventDefault();
              $(this).toggleClass('saved');
              $(`.marker-${this.hash.substring(1)}`).toggleClass('saved');
              if($(`.marker-${this.hash.substring(1)}`).hasClass('saved')){
                place.saved = true;
              } else {
                place.saved = false;
              }
            });
            
        }
      })(place))

      google.maps.event.addDomListener(mapViewMobile, "click", function(event) {
        document.getElementById('offices-popup').innerHTML = "";
        $('.marker-btn').removeClass('active')
      });
    }
  }

  // Wait for the dom or entire document before initialize slick
  window.addEventListener('load', () => {
    $(document).ready(function () {
      if(document.body.classList.contains('listing-page')){
        // Initialize slick slider for Offices preview
        $('.offices-thumbnails').slick({
          dots: true,
          arrows: true,
          infinite: true,
          autoplay: false,
          slidesToShow: 1,
        });
        $('.offices-thumbnails').show();

        $('.save-offer').click(function(event){
          event.preventDefault();
          $(this).toggleClass('saved');
          $(`.marker-${this.hash.substring(1)}`).toggleClass('saved');
        });
      };
    });
  }, false);


  //////////////////////// ASIDE MAP ///////////////////////////

  function initMapList() {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 14,    
      mapTypeControl: false,
      scrollwheel: false,
      stretViewControl: true,
      fullscreenControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    });

    function initPublicTransportControl(map) {

      const transitLayer = new google.maps.TransitLayer();
      const checkBox = document.querySelector("#public-transport-check");
    
      checkBox.addEventListener( 'change', function() {
          if(this.checked) {
            transitLayer.setMap(map);
          } else {
            transitLayer.setMap(null);
          }
      });

      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        document.querySelector(".public-transport-control")
      );
    }

      initPublicTransportControl(map);

      setButtons(map);
  }

  google.maps.event.addDomListener(window, 'load', initMapList);

  function setButtons(map) {
    // Create buttons markers
    class ButtonMarker extends google.maps.OverlayView {
      constructor(position, price, saved, id) {
        super();
        this.position = position;          
        this.containerDiv = document.createElement("div");
        // this.containerDiv.setAttribute("href", url);
        this.containerDiv.classList.add("marker-btn");
        this.containerDiv.innerHTML = price;
        this.containerDiv.classList.add(`marker-${id}`)

        const heartlink = document.createElement('a');
        heartlink.href = `#${id}`;
        
        const heart = document.createElement("span");
        heartlink.classList.add('save-offer');

        heartlink.appendChild(heart);

        this.containerDiv.appendChild(heartlink);

        if(saved){
          this.containerDiv.classList.add("saved");
        }

        ButtonMarker.preventMapHitsAndGesturesFrom(this.containerDiv);
      }
      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
      }
      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }
      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        );
        // Hide the popup when it is far out of view.
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";

        if (display === "block") {
          this.containerDiv.style.left = (divPosition.x - 45) + "px";
          this.containerDiv.style.top = (divPosition.y - 15) + "px";
        }

        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }
      }
    }

    // Create popup for buttons markers
    class Popup extends google.maps.OverlayView {
      constructor(position, content) {
        super();
        this.position = position;
        // content.classList.add("popup-bubble");
        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement("div");
        bubbleAnchor.classList.add("popup-bubble-anchor");
        // bubbleAnchor.appendChild(content);
        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);

        bubbleAnchor.innerHTML = content;
        // Optionally stop clicks, etc., from bubbling up to the map.
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      }
      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
      }
      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }
      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        );
        // Hide the popup when it is far out of view.
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";
  
        if (display === "block") {
          // this.containerDiv.style.left = (divPosition.x + 40) + "px";
          this.containerDiv.style.top = (divPosition.y - 20) + "px";
          this.containerDiv.style.left = divPosition.x + "px";
          // this.containerDiv.style.top = divPosition.y + "px";
        }
  
        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }
      }
    }

    var listItems = [];
    var popup;
    var popupActive = [];

    function addOverlay() {
        popupActive.push(popup);
        popup.setMap(map);
    }
    
    function removeOverlay() {
      clearOverlays();
    }

    function clearOverlays() {
      while(popupActive.length) { 
        popupActive.pop().setMap(null); 
      }
    }

    // Buttons Markers
    for (var i = 0; i < places['offices'].length; i++) {
      
      var place = places['offices'][i];

      var buttonMarker = new ButtonMarker(
        new google.maps.LatLng(place.lat,place.lng),
        place.price,
        place.saved,
        place.id
      );
      buttonMarker.setMap(map);


      bindEvent(buttonMarker['containerDiv'], 'click', (function(place) {
        return function(e){
          clearOverlays();
          $('.marker-btn').removeClass('popup-open');
          var myLatLng = {lat: place.lat, lng: place.lng};

          var bounds = map.getBounds();
          if (!bounds) return;

          // The position of the infowindow
          var position = myLatLng;

          // The dimension of the infowindow
          var iwWidth = 216;
          var iwHeight = 276;

          // The offset position of the infowindow
          var iwOffsetX = -109;
          var iwOffsetY = -306;

          // Padding on the infowindow
          var padX = 40;
          var padY = 40;

          // The degrees per pixel
          var mapDiv = map.getDiv();
          var mapWidth = mapDiv.offsetWidth;
          var mapHeight = mapDiv.offsetHeight;

          var boundsSpan = bounds.toSpan();

          var longSpan = boundsSpan.lng();
          var latSpan = boundsSpan.lat();
          var degPixelX = longSpan / mapWidth;
          var degPixelY = latSpan / mapHeight;

          // The bounds of the map
          var mapWestLng = bounds.getSouthWest().lng();
          var mapEastLng = bounds.getNorthEast().lng();
          var mapNorthLat = bounds.getNorthEast().lat();
          var mapSouthLat = bounds.getSouthWest().lat();

          // The bounds of the infowindow
          var iwWestLng = place.lng + (iwOffsetX - padX) * degPixelX;
          var iwEastLng = place.lng + (iwOffsetX + iwWidth + padX) * degPixelX;
          var iwNorthLat = place.lat - (iwOffsetY - padY) * degPixelY;
          var iwSouthLat = place.lat - (iwOffsetY + iwHeight + padY) * degPixelY;

          // calculate center shift
          var shiftLng =
              (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
              (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
          var shiftLat =
              (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
              (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);

          // The center of the map
          var center = map.getCenter();

          // The new map center
          var centerX = center.lng() - shiftLng;
          var centerY = center.lat() - shiftLat;
          
          map.panTo(new google.maps.LatLng(centerY, centerX));

          var source = document.getElementById('popup-map-template').innerHTML;
          var template = Handlebars.compile(source);

          popup = new Popup(
            new google.maps.LatLng(place.lat,place.lng),
            template(place)
          );
          addOverlay();
        }
      })(place));

      bindEvent(buttonMarker['containerDiv'], 'click', (function(i) {
        return function(e) {
            e.preventDefault();
            $(this).toggleClass('popup-open');
        }
      })(i));

      bindEvent(buttonMarker['containerDiv'].children[0], 'click', (function(place,i) {
        return function(e) {
          e.preventDefault();
          $(`.marker-${this.hash.substring(1)}`).toggleClass('saved')
          $(`.office-${this.hash.substring(1)} .save-offer-map`).toggleClass('saved')
          $(`.item-${i+1}`).find('.save-offer').toggleClass('saved')

          if($(`.marker-${this.hash.substring(1)}`).hasClass('saved')){
            place.saved = true;
          } else {
            place.saved = false;
          }
        }
      })(place,i));

      google.maps.event.addDomListener(map, "click", function(event) {
        removeOverlay();
        $('.marker-btn').removeClass('popup-open');
      });

      // Generate Offices List
      var source = document.getElementById('listing-item-template').innerHTML;
      var template = Handlebars.compile(source);
      var node = document.createElement('div')
      node.classList.add('item','list-group-item', 'item-'+place.id);
      node.innerHTML = template(place);
  
      var listItem = document.getElementById('offices').appendChild(node);
      
      listItems[i] = listItem;

      bindEvent(listItems[i], 'mouseenter', (function (place) {
        return function (e) {
            e.preventDefault();
            $(`.marker-${place.id}`).addClass('active');
        }
      })(place));

      bindEvent(listItems[i], 'mouseleave', (function (place) {
        return function (e) {
            e.preventDefault();
            $(`.marker-${place.id}`).removeClass('active');
        }
      })(place));


      bindEvent(buttonMarker['containerDiv'], 'mouseenter', (function (place) {
        return function (e) {
            e.preventDefault();
            $(`.item-${place.id}`).addClass('linked');
        }
      })(place));

      bindEvent(buttonMarker['containerDiv'], 'mouseleave', (function (place) {
        return function (e) {
            e.preventDefault();
            $(`.item-${place.id}`).removeClass('linked');
        }
      })(place));

    };
  }
}


  //////////////////// BUSINESS CENTER OLD /////////////////////


// map for BC page
if(document.body.classList.contains('business-center')){

  if(!document.body.classList.contains('business-center-new')) {

    var myLatLng = {lat: 51.55322, lng: -0.217752};
    function initMap() {
      var map = new google.maps.Map(document.getElementById('bc-map'), {
        center: myLatLng,
        zoom: 14,    
        disableDefaultUI: true,
        mapTypeControl: false,
        // scrollwheel: false,
        stretViewControl: true,
        fullscreenControl: false,
        zoomControl: false,
      });


      var icon = "./content/images/map-marker.svg";

      // Add marker to the map
      var marker = new google.maps.Marker({
        position: myLatLng,
        icon: icon,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'WeWork - 12 Devonshire Square'
      });
    }

    google.maps.event.addDomListener(window, 'load', initMap);

  }

  $(document).ready(function(){

    $('.save-offer-map').click(function(event){
      event.preventDefault();
      $(this).toggleClass('saved');

      if($(this).hasClass('saved')){
        place.saved = true;
      } else {
        place.saved = false;
      }
    });

    $('#bc-save-btn').click(function(event){
      event.preventDefault();
      if($(this).hasClass('saved')){
        $(this).removeClass('saved');
        $(this).find('.heart').css('fill', '#fff').css('stroke', '#000');
        $(this).on('mouseleave touchend', function(){
          $(this).find('.heart').css('fill', '').css('stroke', '');
        })
        place.saved = false;
      } else {
        $(this).addClass('saved');
        if(document.body.classList.contains('listing-page')){
          place.saved = true;
        }
      }
    });

    var $temp = $("<input>");
    var $url = $(location).attr('href');

    $('#bc-share-btn').click(function(event){
      event.preventDefault()
      $('body').append($temp)
      $temp.val($url).select()
      document.execCommand("copy")
      $temp.remove()
      setTimeout(function() { 
        $('[data-toggle="tooltip"]').tooltip('hide');
      }, 1500);
    });



//////////////////// ENQUIRY FORM FOR BC PAGE OLD /////////////////////////

// if(!document.body.classList.contains('business-center-new')) {

    const enquriyForm = document.getElementsByClassName('mobile-container')[0];
    var options = {
      offset: 51,
      tolerance: {
        up: 5,
        down: 0
      },
      classes : {
        initial : "headroomm",
        pinned : "headroomm--pinned",
        unpinned : "headroomm--unpinned",
        top : "headroomm--top",
        notTop : "headroomm--not-top",
        bottom : "headroomm--bottom",
        notBottom : "headroomm--not-bottom",
        frozen: "headroomm--frozen",
        pinned: "headroomm--pinned foo bar"
      },
      scroller : enquriyForm
    }

    // Navigation hidde on scroll down and show after scroll up
    var myElementM = document.getElementById("enquiry-nav");
    var headroomEnguiry  = new Headroom(myElementM, options);

    enquire.register('screen and (max-width:600px)', {
      match : headroomEnguiry.init.bind(headroomEnguiry), 
      unmatch : headroomEnguiry.destroy.bind(headroomEnguiry) 
    });


    // Initialize days form carousel
    $('#form-date-slider').slick({
      arrows: true,
      infinite: false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: false,
      prevArrow: '<a class="slick-prev slick-arrow"></a>',
      nextArrow: '<a class="slick-next slick-arrow"></a>',
    });
    $('#form-date-slider').show();

    // Form oppened overlay
    $(document).on('click', function (e) {
      if ($(e.target).closest('.enquiry-form-container.active').length === 0) {
        $('.screen-overlay').removeClass('active')
        $('.sticky-top').removeClass('focused')
      } else {
        $('.screen-overlay').addClass('active')
        $('.sticky-top').addClass('focused')
        window.scrollTo({
          top: 290,
          behavior: 'smooth'
        })
      }
    });

    // Formtab 1
    $('.init-enquiry-form').on('click', function(e){
      $('.fromtab-nav, .formtab-1, .enquiry-type-switch').show();
      $('.formtab-init, .consultant').hide();
      $('.enquiry-form-container').addClass('active')
      $('input[name="toggle-form"]').attr('checked',false);
    })

    // Formtab 1 from Modal
    $('.office-modal-enquiry-btn').click(function(){
      $('#office-modal-xl').modal('hide')

      // Functionality for mobile
      if(downMD){
        $('.sticky-top').addClass('focused-m')
        $('.enquiry-form-container').addClass('mobile-active');
        $('.fromtab-nav, .formtab-1, .enquiry-type-switch, .enquiry-form-container.mobile-active').show();
        $('.formtab-init, .consultant, .trustpilot-wg-sidebar, #enquiry-back').hide();
        $('form-date-slider').slick('setPosition')
      
      } else {
        // Functionality for desktops
        $('.enquiry-form-container, .screen-overlay').addClass('active');
        $('.fromtab-nav, .formtab-1, .enquiry-type-switch, .enquiry-form-container').show();
        $('.formtab-init, .consultant, .trustpilot-wg-sidebar').hide();
        $('form-date-slider').slick('setPosition')

        $('#office-modal-xl').on('hidden.bs.modal', function (e) {
          $('.enquiry-form-container, .screen-overlay').addClass('active')
          $('.sticky-top').addClass('focused')
          window.scrollTo({
            top: 290,
            behavior: 'smooth'
          })
        })
      }

    })

    // Remove overlay if click modal close
    $('.office-modal-close').on('click', function(){
      $('#office-modal-xl').on('hidden.bs.modal', function (e) {
        $('.screen-overlay').removeClass('active')
        $('.sticky-top').removeClass('focused')
      })
    })

    // Formtab 1 for Mobile
    $('.office-modal-enquiry-btn-mobile').click(function(){
        $('.sticky-top').addClass('focused-m')
        $('.enquiry-form-container').addClass('mobile-active');
        $('.fromtab-nav, .formtab-1, .enquiry-type-switch, .enquiry-form-container.mobile-active').show();
        $('.formtab-init, .consultant, .trustpilot-wg-sidebar, #enquiry-back').hide();
        $('form-date-slider').slick('setPosition')
    })

    //Toggle Quick enquiry / Book a viewing
    $('input[type=radio][name=toggle-form]').change(function() {
      if (this.value == 'quick-enquiry-form') {
        $('.forms-wrapper').addClass('contact-form-enabled')
          $('.forms-wrapper').removeClass('book-form-enabled')
      }
      else if (this.value == 'book-a-viewing') {
          $('.forms-wrapper').removeClass('contact-form-enabled')
          $('.forms-wrapper').addClass('book-form-enabled')
          $('#form-date-slider').slick('setPosition')
      }
    });

    if(!document.body.classList.contains('business-center-new')) {
      // Contact form submit
      $('#enquiry-contact-form').on('submit', function(e) {
        e.preventDefault();
        $('.formtab-1, .enquiry-type-switch, #enquiry-back').hide();
        $('.consultant, .formtab-end-contact').show()
        $('.mobile-container').scrollTop(0)
        document.getElementById('enquiry-contact-form').reset();

        if( !$('.enquiry-form-container').hasClass('mobile-active')){
          $('.sticky-top').removeClass('focused')
          $('.enquiry-form-container, .screen-overlay').removeClass('active')
        }
      })

      // mobile enquiry form close
      $('#close-mobile-forms').on('click', function(){
        $('.enquiry-form-container').hide().removeClass('mobile-active');
        $('.formtab-init, .consultant').show()
        $('#contact-form-sent').hide()
        $('.sticky-top').removeClass('focused-m')
      })
    }

    if(document.body.classList.contains('business-center-new')) {
      // Contact form submit
      $('#enquiry-contact-form').on('submit', function(e) {
        e.preventDefault();
        $('.formtab-1, .enquiry-type-switch, #enquiry-back').hide();
        $('.what-happens, .formtab-end-contact').show()
        $('.mobile-container').scrollTop(0)
        document.getElementById('enquiry-contact-form').reset();

        if( !$('.enquiry-form-container').hasClass('mobile-active')){
          $('.sticky-top').removeClass('focused')
          $('.enquiry-form-container, .screen-overlay').removeClass('active')
        }
      })

      // mobile enquiry form close
      $('#close-mobile-forms').on('click', function(){
        $('.enquiry-form-container').hide().removeClass('mobile-active');
        $('.formtab-init, .consultant').show()
        $('#contact-form-sent').hide()
        $('.sticky-top').removeClass('focused-m')

        if( !$('.enquiry-form-container').hasClass('mobile-active')){
          $('.sticky-top').removeClass('focused')
          $('.enquiry-form-container, .screen-overlay').removeClass('active')
        }
      })
    }

    // Allow only one Viewing type checkbox slected
    $('input[name="viewing-type"]').on('change', function() {
      $('input[name="viewing-type"]').not(this).prop('checked', false);
    });

    // Validation for Book form Step 1
    let day;
    const $submit = $(".book-form-footer").hide(),
    $valDay = $('input[name="day"]').click(function() {
      // $submit.toggle( $valDay.is(":checked") );
      day = $valDay.is(":checked")
    });

    // Show/Hide next step for Book form
    $(document).on('click', function (e) {
      if (day === true 
        && ($("#book-hours input:checkbox:checked").length > 0) 
        && ($("#viewing-type input:checkbox:checked").length > 0)) {
        $submit.slideDown('fast')
      } else {
        $submit.hide()
      }
    })

    // Go to Book form step 2
    $('#enquiry-book-submit').on('click', function(e) {
      if (!$(this).hasClass('submit-btn')) {
        e.preventDefault(); // only for static vebsite to prevent page reload after form submit
        $(this).attr('type','submit').addClass('submit-btn').blur()
        $('.enquiry-type-switch, .step-1').hide()
        $('.step-2, #enquiry-back, .book-signup-check').show()
        $('.mobile-container').scrollTop(0)
      }
    })

    // Book form submit
    $('#enquiry-book-form').on('submit', function(e){
        e.preventDefault(); // only for static vebsite to prevent page reload after form submit
        $('.formtab-1, .enquiry-type-switch, #enquiry-back').hide();
        $('.formtab-end-book, .what-happens').show()
        $('.mobile-container').scrollTop(0)
        document.getElementById('enquiry-book-form').reset();

        if( !$('.enquiry-form-container').hasClass('mobile-active')){
          $('.sticky-top').removeClass('focused')
          $('.enquiry-form-container, .screen-overlay').removeClass('active')
        }
    })

    // Back to initial enquiry forms
    $('#enquiry-back').on('click', function(e){
      e.preventDefault();
      if(!$('#enquiry-book-submit').hasClass('submit-btn')) {
        $('.formtab-init, .trustpilot-wg-sidebar, .consultant').show()
        $('.formtab-1, .enquiry-type-switch, .fromtab-nav').hide()
        $('.forms-wrapper').removeClass('book-form-enabled')
        $('.forms-wrapper, .enquiry-form-container').removeClass('active')
        $('.sticky-top').removeClass('focused')
        $('#toggle-on').prop("checked", true)
        $('.forms-wrapper').addClass('contact-form-enabled')
        $('.forms-wrapper').removeClass('book-form-enabled')
      } else {
        if($('.enquiry-form-container').hasClass('mobile-active')){
          $(this).hide()
        }
        $('.step-2, .book-signup-check').hide()
        $('.step-1, .enquiry-type-switch').show()
        $('#form-date-slider').slick('setPosition')
        $('#enquiry-book-submit').removeClass('submit-btn').attr('type','button')
      }
    });
  // }
  ////// END OF ENQUIRY FORM FOR BC PAGE /////////////

    
    // Features show more
    $('#bc-features-more').on('click', function(e){
      e.preventDefault();
      $('.bc-features .more-hidden, .bc-features .more-hidden-lg').toggleClass('show');
      const elem = $(this);
      if (elem.text()=="View more") elem.html("View less");
      else elem.html("View more");
    })
    

    $('#bc-benefits-more').on('click', function(e){
      e.preventDefault();
      $('.bc-benefits .more-hidden, .bc-benefits .more-hidden-lg').toggleClass('show');
      const elem = $(this);
      if (elem.text()=="View more") elem.html("View less");
      else elem.html("View more");
    })

    if(upSM) {
      // Initialize slick slider for Business Center Hero
      $('.bc-hero-carousel').slick({
        arrows: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
        dots: true,
        dotsClass: 'bc-hero-paging',
        customPaging: function (slider, i) {
            return  (i + 1) + ' / ' + slider.slideCount;
        },
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
      });
      $('.bc-hero-carousel').show();
    }

    if(downSM) {
      $('.bc-hero-carousel').slick({
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        dots: true,

      });
      $('.bc-hero-carousel').show();
    }


    /////////////////////// NEW BC PAGE INQUIRDY MODAL ///////////////////
    if(document.body.classList.contains('business-center-new')) {

      if(upMD) {
        // For Quick links navigation to act simultaneously with Headeroom header
        // Ovserve if headroom is pinned or not and add/remove class for qucick links to change it's top postion using CSS
        var elemToObserve = document.getElementById('site-header');
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if(mutation.attributeName == "class"){
                  // console.log(mutation.target.classList.contains('headroom--pinned'));
                    var headroomPinned = mutation.target.classList.contains('headroom--pinned');

                    window.addEventListener("scroll", (event) => {
                      let myscroll = window.scrollY;

                      if(headroomPinned){
                          $('.bc-quick-links').addClass('with-headroom')
                      }

                      var headroomUnPinned = mutation.target.classList.contains('headroom--unpinned');
                      if(headroomUnPinned || myscroll < 247 ){
                        $('.bc-quick-links').removeClass('with-headroom')
                      }
                    });
                }
            });
        });
        observer.observe(elemToObserve, {attributes: true});
      }


      // Quick links Smooth Scroll to ID
      $(document).ready(function() {
        $("a[href*=#]").click(function(event){     
          event.preventDefault();

          $('html,body').animate({
            scrollTop:$(this.hash).offset().top - 60}, 500);
        });
      });

      $('.init-enquiry-form-new').on('click', function(e){
        console.log('clicked');
        // $('#office-modal-new').addClass('show');
      })
    }

///////////////////////// MODAL ////////////////////////////


    // Refresh BC slick for modal
    $('#office-modal-xl').on('shown.bs.modal', function (e) {
      $('.bc-hero-carousel').slick('setPosition')
    });

    // Refresh BC slick for tabs
    $('.nav-link').on('shown.bs.tab', function() {
      let $tabPane = $($(this).attr('href'));
      $('.bc-hero-carousel', $tabPane).slick('setPosition');
    });

    // Office Modal Tab Functionality
    $('#office-modal-xl').on('show.bs.modal', function (e) {
      $('.bc-hero-carousel').slick('setPosition');
      $('.wrap-modal-slider').addClass('open');
      var button = $(e.relatedTarget)
      var tab = button.data('tab')
      var modal = $(this)
      if(tab == 'photos-tab') {
        modal.find('#photos-view-tab').addClass('active').attr('aria-selected', true)
        modal.find('#photos-view').addClass('show active')
      } else if ( tab === 'map-tab') {
        modal.find('#map-view-tab').addClass('active').attr('aria-selected', true)
        modal.find('#map-view').addClass('show active')
      } else if ( tab === 'street-view-tab') {
        modal.find('#street-view-tab').addClass('active').attr('aria-selected', true)
        modal.find('#street-view').addClass('show active')
      } else if ( tab === 'shop-tab') {
        modal.find('#shop-view-tab').addClass('active').attr('aria-selected', true)
        modal.find('#shop-view').addClass('show active')
      } else {
        modal.find('#video-view-tab').addClass('active').attr('aria-selected', true)
        modal.find('#video-view').addClass('show active')
      }
    });

    // Clear tabs after Office Modal close
    $('#office-modal-xl').on('hidden.bs.modal', function (e) {
      var modal = $(this)
      modal.find('.nav-link').removeClass('active').attr('aria-selected', false)
      modal.find('.tab-pane').removeClass('show active')
    })
    
    // Google Modal Map
    function intMap() {

      var myLatLng = {lat: 51.55322, lng: -0.217752};

      var modalMap = new google.maps.Map(document.getElementById('modalMap'), {
        center: myLatLng,
        zoom: 14,    
        disableDefaultUI: true,
        zoomControl: true,
        // scrollwheel: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
      });


      // Transport custom map control
      const transitLayer = new google.maps.TransitLayer();
      const checkBox = document.querySelector("#transport-check");

      checkBox.addEventListener( 'change', function() {
          if(this.checked) {
            transitLayer.setMap(modalMap);
          } else {
            transitLayer.setMap(null);
          }
      });
  
      modalMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        document.querySelector(".transport-control")
      );
      modalMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        document.querySelector(".restaurants-control")
      );
      modalMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        document.querySelector(".gyms-control")
      );
      modalMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        document.querySelector(".print-control")
      );
      modalMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(
        document.querySelector(".markets-control")
      );

      var icon = "./content/images/map-marker.svg";

      // Add marker to the map
      var marker = new google.maps.Marker({
        position: myLatLng,
        icon: icon,
        map: modalMap,
        animation: google.maps.Animation.DROP,
        title: 'WeWork - 12 Devonshire Square'
      });

    } // end map intMap

    let panorama;

    function intPanorama() {
      panorama = new google.maps.StreetViewPanorama(
        document.getElementById("modalStreetMap"),
        {
          position: { lat: 51.5136722, lng: -0.1363511 },
          pov: { heading: 153.8, pitch: 20},
          panoId: 'BFX40PajBBMajSxc1S7M_Q',

        }
      );
    }

    var initMapOnce = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                intMap();
                intPanorama();
            }
        };
    })();

    $('#office-modal-xl').on('shown.bs.modal', function (e) {
      initMapOnce();
    });

    // Refresh BC slick for tabs
    $('.nav-link').on('shown.bs.tab', function() {
      google.maps.event.trigger(intPanorama(), "resize");
    });

  }); // end of document ready for BC Page
};


// Most Popular page

if (window.matchMedia("(max-width: 768px)").matches) {
  // Initialize slick slider for Recently viewed offices section
  $('.most-popular-areas-carousel').each( function() {
    $(this).slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',

    });
    $('.offices-carousel').show();
  });
}

///////////////////////////////// MOST POPULAR /////////////////////////////

import { places_mp } from './offices-mp.js';

if(document.body.classList.contains('most-popular')) {

  // Cluster svg
  var icon = function () {
    var encoded = window.btoa('<svg width="35px" height="36px" viewBox="0 0 35 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Group 3</title> <defs> <ellipse id="path-1" cx="13.5" cy="14" rx="13.5" ry="14"></ellipse> <filter x="-22.2%" y="-17.9%" width="144.4%" height="142.9%" filterUnits="objectBoundingBox" id="filter-2"> <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology> <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset> <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite> <feColorMatrix values="0 0 0 0 0.434499547   0 0 0 0 0.434499547   0 0 0 0 0.434499547  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="London-Offices-Mobile@2x" transform="translate(-160.000000, -488.000000)"> <g id="Oval" transform="translate(164.000000, 491.000000)"> <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use> <use stroke="#FFFFFF" stroke-width="2" fill="#5C489C" fill-rule="evenodd" xlink:href="#path-1"></use> </g> </g> </g> </svg>');
    return ('data:image/svg+xml;base64,' + encoded);
  };

  // Cluster styles
  var cluster_styles = [
    {
        width: 35,
        height: 35,
        url: icon(),
        textColor: 'white',
        textSize: 14,
        lineHeight: 35
    },
  ];

    var MC;
    var MC_Opc = {
    gridSize: 50,
    maxZoom: 18,
    styles: cluster_styles

    };
    var MARKER;
    var MARKERS = [];
    var map;
    var overlay = [];

    function initialize() {
    var opts = {
        zoom: 14,
        center: new google.maps.LatLng(51.55322, -0.217752),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        scrollwheel: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
        },
        styles: [
        {
            featureType: 'poi',
            elementType: 'labels.icon',
            stylers: [
            {
                visibility: 'off'
            }
            ]
        }
        ]
    };





    map = new google.maps.Map(document.getElementById("map-view-canvas"), opts);

    google.maps.event.addDomListener(map, "click", function(event) {
        // google.maps.event.trigger(be, "click");

        // $('.marker-btn-small').removeClass('active')
        // this.classList.add('active');
    });

    function initPublicTransportControl(map) {
        const transitLayer = new google.maps.TransitLayer();
        const checkBox = document.querySelector("#public-transport-check-2");

        checkBox.addEventListener( 'change', function() {
            if(this.checked) {
                transitLayer.setMap(map);
            } else {
                transitLayer.setMap(null);
            }
        });

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
            document.querySelector(".public-transport-control-2")
        );
    }
    initPublicTransportControl(map);

    //Offices info popup located top left corner of the map
    function mapPopup(map) {
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(
            document.querySelector("#offices-popup")
        );
    }
    mapPopup(map);


    MC = new MarkerClusterer(map, [], MC_Opc);
    for (var i = 0; i < places_mp['offices'].length; i++) {
        var place = places_mp['offices'][i];
        overlay[i] = new CustomMarker(new google.maps.LatLng(place.lat, place.lng), map, " ", null);
        MARKERS.push(overlay[i]);


        var place = places_mp['offices'][i];
        google.maps.event.addListener(overlay[i], 'click', (function (place, event) {
            return function (e) {
                var content = document.getElementById('offices-popup');
                content.innerHTML='';
                var template = Handlebars.compile(document.getElementById('map-popup').innerHTML)
                content.innerHTML = template(place);
                $('.offices-thumbnails').not('.slick-initialized').slick({
                    dots: true,
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    slidesToShow: 1,
                });
            }
        })(place))

    }
    MC = new MarkerClusterer(map, MARKERS, MC_Opc);
  }

  google.maps.event.addDomListener(window, "load", function() {
    initialize();
  });

  function CanvasCrear(texto, height_, div) {
    var context;
    var canvas = document.createElement("canvas");
    div.setAttribute('class', 'marker-btn-small')
    //   canvas.style.cssText = 'color: #fff; background: #ffffff; background: url(data:image/svg+xml; base64, PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmI0NDIiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+); background: -moz-linear-gradient(top, #ffffff 0%, #ffb442 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #ffb442)); background: -webkit-linear-gradient(top, #ffffff 0%, #ffb442 100%); background: -o-linear-gradient(top, #ffffff 0%, #ffb442 100%); background: -ms-linear-gradient(top, #ffffff 0%, #ffb442 100%); background: linear-gradient(to bottom, #ffffff 0%, #ffb442 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#ffb442", GradientType=0); border-width: 1px; -moz-border-radius: 2px; -webkit-border-radius: 2px; border-radius: 2px; font-family:"Lucida Grande", "Arial", sans-serif; pointer-events: none;';

    var txtWidth;
    txtWidth = canvas.getContext("2d");
    txtWidth.font = "12px Sans-Serif";

    var width_ = txtWidth.measureText(texto).width; //Calculando el width de la letra
    //console.log(width_);
    //canvas.style.border = "thin solid black";
    canvas.setAttribute("width", (width_ + "px"));
    canvas.setAttribute("height", (height_ + "px"));

    context = canvas.getContext("2d");
    context.font = "12px Sans-Serif";

    context.fillStyle = "white";
    context.fillText(texto, 0, 12);

    return div.appendChild(canvas);
  }


  function CustomMarker(position, map, text, icon) {
    this.latlng_ = position;
    this.text_ = text;
    this.icon = icon;
    // Once the LatLng and text are set, add the overlay to the map.  This will
    // trigger a call to panes_changed which should in turn call draw.
    this.setMap(map);
  }


  CustomMarker.prototype = new google.maps.OverlayView();
  CustomMarker.prototype.getDraggable = function() {
    return false;
  };


  CustomMarker.prototype.draw = function() {
    var me = this;

  // Check if the div has been created.
    var div = this.div_;
    if (!div) {
        // Create a overlay text DIV
        div = this.div_ = document.createElement('DIV');
        // Create the DIV representing our CustomMarker
        // div.style.border = "none";
        div.style.position = "absolute";
        div.style.paddingLeft = "0px";
        div.style.cursor = 'pointer';


        CanvasCrear(this.text_, 15, div)

        google.maps.event.addDomListener(div, "click", function(event) {
            google.maps.event.trigger(me, "click");
            $('.marker-btn-small').removeClass('active')
            this.classList.add('active');
        });


    // Then add the overlay to the DOM
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
    }

  // Position the overlay 
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
    }
  };

  CustomMarker.prototype.remove = function() {
  // Check if the overlay was on the map and needs to be removed.
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
  };

  CustomMarker.prototype.getPosition = function() {
    return this.latlng_;
  };


  function addOverlay() {
    overlay.setMap(map);
  }

  function removeOverlay() {
    overlay.setMap(null);
  }
};


///////////////////////////////// CONTACT US /////////////////////////////


if(document.body.classList.contains('contactus-page')) {

  // Contact Form Labels animation
  const FloatLabel = (() => {
    
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);   
    };

    // register events
    const bindEventsTextarea = (element) => {
      const floatField = element.querySelector('textarea');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);   
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        } 
        
        bindEvents(element);
      });

      const floatContainersTextarea = document.querySelectorAll('.float-container-textarea');

      floatContainersTextarea.forEach((element) => {
        if (element.querySelector('textarea').value) {
            element.classList.add('active');
        } 
        
        bindEventsTextarea(element);
        
      });
    };
    
    return {
      init: init
    };
  })();

  FloatLabel.init();

};


///////////////////////////////// ABOUT US /////////////////////////////


if(document.body.classList.contains('aboutus-page')) {

  function deferVideo() {

    //defer html5 video loading
    $("video source").each(function() {
      var sourceFile = $(this).attr("data-src");
      $(this).attr("src", sourceFile);
      var video = this.parentElement;
      video.load();
      // uncomment if video is not autoplay
      //video.play();
    });
  }
  window.onload = deferVideo;

  // Count numbers without comma
  $('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });

  // Count numbers with comma
  $('.counter-count-comma').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
  });

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  function setProvidersSectionsHeight(e) {
    if (e.matches) {
      console.log('Media Query Matched!')
          $('.au-providers').css('min-height', `${window.innerHeight}px`)
          $('.au-providers .au-providers-desc').css('min-height', `${window.innerHeight}px`)

          var o = $(".au-providers"),
            i = $(".col-left"),
            a =
                ($(".col-right"),
                function () {
                    r();
                }),
            r = function () {
                $(window).on("scroll", c), $(window).on("resize", c), c(null);
            },
            c = function () {
                var e = o.outerHeight(),
                    n = o.offset().top,
                    a = $(window).height(),
                    r = $(window).scrollTop();
              if (r >= n && n + e - a >= r && window.innerWidth > 768) i.addClass("col-fixed").css({ top: 0 });
              else {
                  var c = r - n;
                  (c = Math.max(0, c)), (c = Math.min(e - a, c)), i.removeClass("col-fixed").css({ top: c });
              }
            };
          a();
      } else {
        $('.au-providers').css('min-height', 'auto')
        $('.au-providers .au-providers-desc').css('min-height', 'auto')
        $(".col-left").removeClass("col-fixed")
        console.log('Media Query Matched MD down!')
      }
    };

    // Register event listener
    mediaQuery.addListener(setProvidersSectionsHeight)

    // Initial check
    setProvidersSectionsHeight(mediaQuery)


    function addScroll() {

      if (window.matchMedia("(max-width: 991px)").matches) {
        var instance = OverlayScrollbars(document.querySelectorAll("#au-scroll"), { 
          overflowBehavior : {
            x : "scroll",
            y : "hidden"
          },
          autoUpdate: null, });
        instance.options("overflowBehavior.y", "hidden");

      }
    };
    addEventListener('resize', addScroll)
    addEventListener('orientationchange', addScroll)   
    addScroll();
};

///////////////////////////////// ABOUT US & HOW IT WORKS /////////////////////////////

if(document.body.classList.contains('aboutus-page') || document.body.classList.contains('howitworks-page')) { 

  $(window).load(function() {
    var tags = $(".ofFadeIn")
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
      
      if ($(tag).isInViewportTop) {
        $(tag).addClass("visible")
      } else {  
        $(tag).removeClass("visible")
      }
    }
  });

  $(window).on("resize scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".ofFadeIn")
    
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
      
      if ($(tag).offset().top + 200 < pageBottom) {
        $(tag).addClass("visible")
      } else {  
        $(tag).removeClass("visible")
      }
    }
  });
};


