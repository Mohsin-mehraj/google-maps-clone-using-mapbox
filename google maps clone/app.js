

mapboxgl.accessToken = 'pk.eyJ1IjoibW9oc2lubWVocmFqIiwiYSI6ImNrcHJ5YWc1YTAzM3Ayd3MyYWR5bjQ2NmoifQ.HuTi43m3aJqhlP04dH4__Q'; 

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true})



function successLocation(position){
setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
setupMap([-2.24, 53.48 ])
}

function setupMap(center){
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center : center,
    zoom : 15
  });

  map.addControl(new mapboxgl.NavigationControl());


  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    
  });
  

  map.addControl(directions, 'top-left');
  
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    }));

    const marker = new mapboxgl.Marker({
      color: "#FFFFFF",
      draggable: true
      }).setLngLat([30.5, 50.5])
      .addTo(map);

      

}

