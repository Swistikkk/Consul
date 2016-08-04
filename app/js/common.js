$(document).ready(function(){

  $('#fullpage').fullpage({
    anchors: ['main', 'services', 'works', 'contacts'],
    menu: '#top-menu'
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

  function hoverItem() {
    let work = document.querySelector('.works');
    console.log(work);
    let elements = document.querySelectorAll('.works-item');

    elements[0].addEventListener('mouseover', function(){
      work.classList.add('project_1');
    });
    elements[0].addEventListener('mouseout', function(){
      work.classList.remove('project_1');
    });

  }

  createMap();
  hoverItem();

});
