mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0b20iLCJhIjoiY2poeHdjMnYzMGc5djNxbnRjeWN4ejF6aiJ9.MVaFR4ssaI7Bc_h0q-9vjw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/setom/cjhxw9byy11ct2rmuzfmj3ji1',
    center: [-96, 37.8],
    zoom: 3
});

// Tacoma
var origin = [-122.4443, 47.2529];

// Everyone's destinations
var destinationMatt = [
    [4.8897, 52.374],
    [-77.4875, 39.0437],
    [-122.8032, 45.4899],
    [13.4105, 52.5244],
    [-71.0852, 42.3636],
    [-96.8067, 32.7831],
    [12.3713, 50.4779],
    [8.6842, 50.1155],
    [11.6012, 48.3233],
    [-95.3913, 29.7427],
    [-81.5428, 30.1376],
    [-118.3967, 33.955],
    [-117.1895, 33.6798],
    [-122.0785, 37.406],
    [-112.074, 33.4484],
    [-111.6341, 40.2139],
    [3.1746, 50.6942],
    [-122.4194, 37.7749],
    [-111.8879, 33.602],
    [-122.3321, 47.6062],
    [-82.5154, 28.0074],
    [110.3608, -7.7828]
];

var destinationAnna = [
    [4.8897, 52.374],
    [-149.9003, 61.2181],
    [-77.4875, 39.0437],
    [-84.388, 33.749],
    [-73.8659, 45.3168],
    [-86.4582, 39.2203],
    [-105.27, 40.015],
    [-77.5361, 38.7228],
    [-71.2011, 42.5085],
    [-86.1602, 39.9673],
    [-74.4489, 40.8219],
    [-96.8067, 32.7831],
    [-90.5779, 41.5232],
    [-6.2672, 53.344],
    [-84.4921, 42.6512],
    [-118.4055, 33.9222],
    [-95.4741, 29.8312],
    [-94.5786, 39.0997],
    [8.3858, 49.0047],
    [-2.2874, 53.0038],
    [-73.698, 40.7578],
    [6.6328, 46.516],
    [-118.3967, 33.955],
    [-77.5443, 38.7999],
    [-96.5976, 39.1957],
    [-122.0464, 47.3927],
    [-92.0452, 32.5483],
    [-122.0785, 37.406],
    [-74.0121, 40.8043],
    [11.0683, 49.4478],
    [-122.8698, 47.023],
    [-112.074, 33.4484],
    [-74.4664, 40.5397],
    [-121.8948, 37.6853],
    [-122.6762, 45.5234],
    [-111.6341, 40.2139],
    [-117.1721, 34.0488],
    [-86.6546, 34.6333],
    [-122.2488, 37.5324],
    [-77.3659, 38.9466],
    [3.1746, 50.6942],
    [-122.4137, 37.7484],
    [-121.895, 37.3394],
    [-122.3039, 37.5383],
    [-111.8879, 33.602],
    [-122.292, 47.6639],
    [-96.629, 43.7327],
    [-77.4286, 39.0062],
    [110.8317, -7.5561],
    [-122.7715, 45.4312],
    [-87.5402, 33.2162],
    [-77.834, 40.87],
    [16.3721, 48.2085]
];

var destinationNate = [
    [-77.4875, 39.0437],
    [-71.2011, 42.5085],
    [6.1392, 46.181],
    [-87.65, 41.85],
    [-96.8067, 32.7831],
    [-94.5786, 39.0997],
    [-121.9463, 37.2308],
    [-73.6155, 45.5067],
    [-122.0785, 37.406],
    [-122.8707, 47.0311],
    [-96.1747, 41.2094],
    [-122.1292, 37.4169],
    [2.3488, 48.8534],
    [-112.074, 33.4484],
    [-121.8948, 37.6853],
    [-122.6762, 45.5234],
    [-111.6341, 40.2139],
    [3.1746, 50.6942],
    [-122.3952, 37.7757],
    [-121.895, 37.3394],
    [-111.8879, 33.602],
    [-122.3321, 47.6062],
    [151.198, -33.8612]

];

routesMatt = [];
routesAnna = [];
routesNate = [];

for (var i = 0; i < destinationMatt.length; i++) {
    // A simple line from origin to destination.
    console.log("Total Destinations: " + destinationMatt.length);
    console.log("Processing: " + destinationMatt[i]);
    var route = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destinationMatt[i]
                    ]
                }
            }]
    };
    routesMatt.push(route);
}

for (var i = 0; i < destinationAnna.length; i++) {
    // A simple line from origin to destination.
    console.log("Total Destinations: " + destinationAnna.length);
    console.log("Processing: " + destinationAnna[i]);
    var route = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destinationAnna[i]
                    ]
                }
            }]
    };
    routesAnna.push(route);
}

for (var i = 0; i < destinationNate.length; i++) {
    // A simple line from origin to destination.
    console.log("Total Destinations: " + destinationNate.length);
    console.log("Processing: " + destinationNate[i]);
    var route = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destinationNate[i]
                    ]
                }
            }]
    };
    routesNate.push(route);
}

//Draw the map
map.on('load', function () {

    for (var i = 0; i < routesMatt.length; i++) {
        console.log("Routes: " + routesMatt.length);
        map.addSource('routeM' + i, {
            "type": "geojson",
            "data": routesMatt[i]
        });

        map.addLayer({
            "id": "routeM" + i,
            "source": "routeM" + i,
            "type": "line",
            "paint": {
                "line-width": 1.5,
                "line-color": "#00FF00"
            }
        });
    }

    for (var i = 0; i < routesAnna.length; i++) {
        console.log("Routes: " + routesAnna.length);
        map.addSource('routeA' + i, {
            "type": "geojson",
            "data": routesAnna[i]
        });

        map.addLayer({
            "id": "routeA" + i,
            "source": "routeA" + i,
            "type": "line",
            "paint": {
                "line-width": 1.5,
                "line-color": "#FF0000"
            }
        });
    }

    for (var i = 0; i < routesNate.length; i++) {
        console.log("Routes: " + routesNate.length);
        map.addSource('routeN' + i, {
            "type": "geojson",
            "data": routesNate[i]
        });

        map.addLayer({
            "id": "routeN" + i,
            "source": "routeN" + i,
            "type": "line",
            "paint": {
                "line-width": 1.5,
                "line-color": "#0000FF"
            }
        });
    }
});