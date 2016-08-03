$(document).ready(function(){
  $('#fullpage').fullpage({
    anchors: ['main', 'services', 'works', 'contacts'],
    menu: '#top-menu'
  });

  $(".video").get(0).play();
});
