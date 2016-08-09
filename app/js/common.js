console.log('hey');
$(function(){

  var mainPopup = document.querySelector('.main-popup');
  var button = document.querySelector('.button');
  var fullPage = document.getElementById('fullpage');

  $('#fullpage').fullpage({
    anchors: ['main', 'services', 'works', 'contacts'],
    menu: '#top-menu',

    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        if(index == 1 && direction =='down'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

        else if (index == 2 && direction =='up'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

        else if (index == 2 && direction =='down'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

        else if (index == 3 && direction =='up'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

        else if (index == 3 && direction =='down'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

        else if (index == 4 && direction =='up'){
          mainPopup.classList.remove('main-popup--active');
          fullPage.classList.remove('fullpage');
          $('.main-header .button').show();
        }

    }
  });

  function createMap() {
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,

            disableDefaultUI: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.723474, 37.651707),



            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dadada"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"},{"gamma":"10.00"},{"lightness":"23"}]}]
        };

        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.723420, 37.651767),
            map: map,
            icon: 'img/map_marker.png',
            title: 'Офис Consul Studio'
        });
    }
  }

  // аккардион

  function hoverItem() {
    var work = document.querySelector('.works');
    var elements = document.querySelectorAll('.works-item');

    function hoverElements() {
      elements[0].addEventListener('mouseover', function(e){
        if(e.currentTarget == this) {
          work.classList.add('project_1');
        }
      });
      elements[0].addEventListener('mouseout', function(e){
        if(e.currentTarget == this) {
          work.classList.remove('project_1');
        }
      });
      elements[1].addEventListener('mouseover', function(e){
        if(e.currentTarget == this) {
          work.classList.add('project_2');
        }
      });
      elements[1].addEventListener('mouseout', function(e){
        if(e.currentTarget == this) {
          work.classList.remove('project_2');
        }
      });
      elements[2].addEventListener('mouseover', function(e){
        if(e.currentTarget == this) {
          work.classList.add('project_3');
        }
      });
      elements[2].addEventListener('mouseout', function(e){
        if(e.currentTarget == this) {
          work.classList.remove('project_3');
        }
      });
      elements[3].addEventListener('mouseover', function(e){
        if(e.currentTarget == this) {
          work.classList.add('project_4');
        }
      });
      elements[3].addEventListener('mouseout', function(e){
        if(e.currentTarget == this) {
          work.classList.remove('project_4');
        }
      });
    }

    var arrayElements = [];

    for(var k = 0; k < elements.length; k++) {
      arrayElements.push(elements[k]);
    }

    for(var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function(e){
        var that = this;

        var number = arrayElements.indexOf(this)

        work.style = 'background: url("../img/project_' + (number + 1) + '.png") no-repeat; background-size: cover; background-position: center;';

        function addColorClass() {
          var className = 'color_project_' + (number + 1);
          for(var o = 0; o < work.classList.length; o++) {
            if(work.classList[o] == 'color_project_1' && work.classList[0] != className) {
              work.classList.remove('color_project_1');
            } else if(work.classList[o] == 'color_project_2' && work.classList[0] != className) {
              work.classList.remove('color_project_2');
            } else if(work.classList[o] == 'color_project_3' && work.classList[0] != className) {
              work.classList.remove('color_project_3');
            } else if(work.classList[o] == 'color_project_4' && work.classList[0] != className) {
              work.classList.remove('color_project_4');
            }
          }

          work.classList.add(className);
        }

        function checkAccardeon(){
          for(var b = 0; b < elements.length; b++) {
            if(elements[b].classList == "works-item works-item--active" && elements[b] != e.currentTarget) {
              elements[b].classList.remove('works-item--active');
            }
          }

          that.classList.add('works-item--active');
        }

        addColorClass();
        checkAccardeon();
      });
    }

    hoverElements();
  };

  // показывание top-menu при наведение на logo

  function hoverLogo() {
    var logo = document.querySelector('.logo');
    var topMenu = document.querySelector('.top-menu');

    logo.addEventListener('mouseover', function(){
      topMenu.classList.add('top-menu-list--active');
    });
    logo.addEventListener('mouseout', function(){
      topMenu.classList.remove('top-menu-list--active');
    });
  }

  // проигрывание видео на события мышки

  function viewVideos(){
    var videos = document.querySelectorAll('video');
    var item = $('.services .what-we-do .item');

    item.on('mouseover', function(){
      var video = this.querySelector('video');

      video.play();
    });

    item.on('mouseout', function(){
      var video = this.querySelector('video');

      video.pause();
    });
  }

  function activePopup() {
    var mainPopup = document.querySelector('.main-popup');
    var button = document.querySelector('.button');
    var fullPage = document.getElementById('fullpage');

    button.addEventListener('click', function(){
      mainPopup.classList.add('main-popup--active');
      fullPage.classList.add('fullpage');
      document.body.classList.add('bg-color');
      $('.main-header .button').hide();
    })

    $('.main-popup-close').on('click', function(){
      mainPopup.classList.remove('main-popup--active');
      fullPage.classList.remove('fullpage');
      $('.main-header .button').show();
      document.body.classList.remove('bg-color');
    });

  }

  function inputMask() {
    $('.js-number').inputmask("8 (999) 999-99-99");

    $('form').submit(function (e){
      var inputs = this.children;
      var name = inputs[0];
      var number = inputs[1];

      if(name.value.length < 3) {
        name.style.borderBottom = "2px solid red";
        return false;
      } else {
        name.style.borderBottom = "";
      }

      if(number.value.length < 11) {
        number.style.borderBottom = "2px solid red";
        return false;
      }
    });

    var nameBlock = $('.js-name');
    var numberBlock = $('.js-number');

    nameBlock.focus(function(){
      this.style.borderBottom = '';
    });

    numberBlock.focus(function(){
      this.style.borderBottom = '';
    });
  }

  hoverItem();
  activePopup();
  viewVideos();
  hoverLogo();
  createMap();
  inputMask();
});
