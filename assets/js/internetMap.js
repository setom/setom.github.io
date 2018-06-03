mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0b20iLCJhIjoiY2poeHdjMnYzMGc5djNxbnRjeWN4ejF6aiJ9.MVaFR4ssaI7Bc_h0q-9vjw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/setom/cjhxw9byy11ct2rmuzfmj3ji1',
    center: [-96, 37.8],
    zoom: 3
});

// Tacoma
var origin = [-122.4443, 47.2529];

// Washington DC
//var destination = [4.8897, 52.374];
var destination = [
    [4.8897, 52.374],
    [-77.4875, 39.0437]
];

routes = [];

for (var i = 0; i < destination.length; i++) {
    console.log(i);
}

for (var i = 0; i < destination.length; i++) {
    // A simple line from origin to destination.
    console.log("Total Destinations: " + destination.length);
    console.log("Processing: " + destination[i]);
    var route = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destination[i]
                    ]
                }
            }]
    };
    /*
     // Calculate the distance in kilometers between route start/end point.
     var lineDistance = turf.lineDistance(route.features[0], 'kilometers');
     var arc = [];
     
     // Number of steps to use in the arc and animation, more steps means
     // a smoother arc and animation, but too many steps will result in a
     // low frame rate
     var steps = 500;
     
     // Draw an arc between the `origin` & `destination` of the two points
     for (var i = 0; i < lineDistance; i += lineDistance / steps) {
     var segment = turf.along(route.features[0], i, 'kilometers');
     arc.push(segment.geometry.coordinates);
     }
     
     // Update the route with calculated arc coordinates
     route.features[0].geometry.coordinates = arc;
     */

    routes.push(route);
}
console.log("Routes Pre-Loading" + routes.length);

//Draw the map
map.on('load', function () {

    for (var i = 0; i < routes.length; i++) {
        console.log("Routes: " + routes.length);
        map.addSource('route' + i, {
            "type": "geojson",
            "data": routes[i]
        });

        map.addLayer({
            "id": "route" + i,
            "source": "route" + i,
            "type": "line",
            "paint": {
                "line-width": 2,
                "line-color": "#007cbf"
            }
        });
    }

});