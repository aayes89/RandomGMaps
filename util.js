var points_count = 0; 	// counter for visited markers          
          var markers = [];         // array of marker
          var map;					// 
		  const radius = 1000;  	// 1 km   
		  let pos;					// actual location
		  		  
          function initMap() {    	// Google Map Initialization function		
	        getActualPos();       	// Get actual location, needs permission
  	        const centralPoint = { lat: 19.4152187, lng: -99.1375938 };      
			map = new google.maps.Map(document.getElementById('map'), {
				center: centralPoint,
				zoom: 15
			});
            var i = 0;
            while(i<9){							  	
              const position = getRandomLocation(centralPoint, radius);			  
              AddDPMarkerIco(position);     // add a new marker on map              
              i++;
            }
           }


           // This Function generates a random location based on a radius
           function getRandomLocation(centralPoint, radius) {		   
             // Convert the radius from meters to latitud and longitude degree
             const degRadius = radius / 111000; // 1 grado = 111km
             // Generates random coordinates
             const lat = centralPoint.lat + (Math.random() * 2 - 1) * degRadius;
             const lng = centralPoint.lng + (Math.random() * 2 - 1) * degRadius / Math.cos(centralPoint.lat * Math.PI / 180);
             return { lat, lng };
           }
 	   
	function getActualPos(){	
		// Try HTML5 geolocation
	 if (navigator.geolocation) {
	   navigator.geolocation.getCurrentPosition(position => {
		pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};		
		//alert(pos.lat+","+pos.lng);
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 15,
		mapTypeId: 'terrain'
	});
	/*bounds.extend(pos);
	infoWindow.setPosition(pos);
	infoWindow.setContent('Location found.');
	infoWindow.open(map);*/
	map.setCenter(pos);
	
	}, () => {// Browser supports geolocation, but user has denied permission
		handleLocationError(true, infoWindow);
	   });
	 }
	}
	
	// This Function will create a SVG icon with angle and add/display that marker on the map
            function AddDPMarkerIco(data) {
			//alert(data);
                var icon = { // daft punk icon
                    path: 'M776 1265 c-3 -8 -15 -15 -27 -15 -85 0 -219 -69 -268 -139 -21 -29 -51 -103 -51 -124 0 -17 29 26 30 43 0 26 123 148 154 154 16 3 36 12 45 19 17 15 38 23 84 31 26 5 27 3 29 -42 1 -26 2 -65 1 -87 0 -22 -1 -100 -2 -172 l-1 -133 -147 -1 c-82 -1 -140 -3 -131 -6 17 -4 20 -17 33 -175 5 -66 5 -68 -17 -68 -37 0 -46 12 -57 75 -17 98 -17 168 -1 173 12 4 -39 22 -109 38 -19 4 -22 2 -14 -8 11 -13 34 -140 38 -207 2 -38 17 -49 114 -83 38 -14 93 -22 174 -25 l117 -6 0 -73 0 -74 63 0 c56 0 116 10 172 27 17 5 18 4 7 -10 -8 -9 -10 -22 -6 -28 4 -7 3 -9 -4 -5 -12 7 -26 -29 -17 -44 3 -5 1 -10 -4 -10 -6 0 -11 -5 -11 -11 0 -5 4 -8 9 -5 5 4 7 -4 4 -16 -5 -18 2 -15 30 17 41 45 79 138 79 192 0 14 4 20 11 16 5 -3 7 -1 4 5 -9 14 3 43 14 36 17 -10 9 19 -8 32 -14 10 -15 15 -6 25 8 8 11 52 9 148 -3 112 -2 120 3 46 7 -86 7 -83 9 59 l2 148 -37 74 c-20 41 -43 80 -51 87 -13 11 -13 8 0 -18 21 -41 32 -88 18 -80 -5 3 -10 12 -10 19 0 8 -16 26 -36 41 -20 15 -42 42 -50 60 -7 18 -21 35 -30 39 -9 4 -14 9 -11 12 3 3 20 -2 39 -11 l33 -16 -33 29 c-30 27 -124 62 -164 62 -9 0 -18 -7 -22 -15z m-246 -139 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-143 -433 c-2 -16 -4 -3 -4 27 0 30 2 43 4 28 2 -16 2 -40 0 -55z M497 970 c-29 -5 -51 -21 -88 -61 -51 -56 -61 -76 -31 -64 9 4 24 8 32 10 8 2 17 4 20 5 3 1 8 2 12 1 4 0 4 7 1 16 -5 12 -2 15 9 11 18 -7 35 2 40 22 4 19 42 50 60 49 7 0 4 -5 -7 -10 l-20 -9 20 4 c11 3 38 12 60 20 l40 15 -55 -1 c-30 0 -72 -4 -93 -8z m-67 -96 c0 -8 -19 -13 -24 -6 -3 5 1 9 9 9 8 0 15 -2 15 -3z M1160 874 c0 -12 7 -24 15 -28 19 -7 19 5 0 30 -14 19 -14 19 -15 -2z M320 647 c0 -15 29 -57 30 -42 0 6 -3 20 -6 33 -7 24 -24 31 -24 9z M467 471 c8 -30 24 -71 34 -91 15 -26 18 -29 14 -10 -13 49 -9 120 6 120 5 0 8 -4 5 -8 -3 -4 10 -7 27 -6 18 1 37 -2 44 -7 7 -6 13 -6 17 -1 4 6 21 7 42 2 27 -6 41 -5 50 5 11 11 4 13 -44 12 -31 0 -73 5 -92 11 -19 5 -53 14 -76 19 l-41 9 14 -55z m27 23 c3 -9 6 -28 6 -42 -1 -31 -13 -15 -24 31 -7 29 8 38 18 11z M670 341 c0 -11 74 -23 94 -15 33 13 14 24 -39 24 -30 0 -55 -4 -55 -9z',
                    scale: 0.025,
                    fillColor: "#000", //<-- Icon Color, you can change it 
                    fillOpacity: 1,
                    strokeWeight: 0,
                    anchor: new google.maps.Point(0, 5),
                    rotation: data.angle //<-- Icon angle
                };

                var mark = { lat: data.lat, lng: data.lng };

                var marker = new google.maps.Marker({
                    position: mark,
                    icon: icon,
                    map: map
                });

                markers[data.key] = marker; // add marker in the markers array...
                document.getElementById("points").innerHTML = points_count;
            }
