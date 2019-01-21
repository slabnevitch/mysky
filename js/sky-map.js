var skyMapMarkersImgs = {
	urlLg: 'img/contacts/sky-baloon-lg.png',
	urlSm: 'img/contacts/sky-baloon-sm.png'
};

var googleMarkers = [
	{
		lat: 55.752402,
		lng:  37.578567,
		icon: skyMapMarkersImgs.urlLg

	},

	{
		lat: 56.142536,
		lng: 40.406056,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 56.294871,
		lng: 43.924006,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 56.116054,
		lng: 47.262923,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 54.200023,
		lng: 45.178061,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 54.318287,		
		lng: 48.396187,
		icon: skyMapMarkersImgs.urlSm
	},

	{
		lat: 55.826600,
		lng: 49.035037,
		icon: skyMapMarkersImgs.urlSm
	}
];
function initMap() {
   //    	var marker = new google.maps.Marker({
   //    		position: {lat: 50.005531, lng: 36.233364},
			//     // title: 'Вне зоны доступа', // "Хинт"
			//     icon: image
			// });


	      map = new google.maps.Map(document.getElementById('contacts-map'), {
	        center: {lat: 56.025694, lng: 38.837973},
	        zoom: 7,
	        disableDefaultUI: true, 
	        zoomControl: true,
	        mapTypeControl: true,
	        fullscreenControl: true
	        // styles: style

	      });

	      googleMarkers.forEach(function(obj) {
	      	var marker = new google.maps.Marker({
	      		position: {lat: obj.lat, lng: obj.lng},
				    title: obj.hint, // "Хинт"
				    icon: obj.icon

				});
	      	marker.setMap(map);
	      });

  		

	      // contactsMap = new google.maps.Map(document.getElementById('contacts-map'), {
	      //   center: {lat: 50.005531, lng:  36.233364},
	      //   zoom: 16,
	      //   disableDefaultUI: true, //отмена всех дефолтных элементов управления
	       
	      //  // добавление необходимых элементов управления вручную
	      //   zoomControl: true,
	      //   mapTypeControl: true,
	      //   fullscreenControl: true
	      //   // styles: style
	      //   // gestureHandling: 'none' //запрет на прокручивание карты
	      // });
	      // marker.setMap(contactsMap);


    }