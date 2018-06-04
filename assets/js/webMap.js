mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0b20iLCJhIjoiY2o5NmN0dHB4MDNoaDJ3bWw1N2JvemlpaSJ9.McVFy9qwVkdrV_anNWv7jw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/setom/cjhxw9byy11ct2rmuzfmj3ji1',
    center: [2, 30],
    zoom: 1.5
});

//Data for the lines
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

var destinationDaman = [
    [4.8897, 52.374],
    [-77.4875, 39.0437],
    [-122.2007, 47.6104],
    [-84.1594, 39.6284],
    [-96.8067, 32.7831],
    [-118.2437, 34.0522],
    [-122.1936, 37.4369],
    [-122.0785, 37.406],
    [-75.6929, 45.4207],
    [-112.074, 33.4484],
    [-122.6762, 45.5234],
    [-111.6341, 40.2139],
    [-119.8525, 47.2343],
    [-122.3952, 37.7757],
    [-121.895, 37.3394],
    [-122.292, 47.6639],
    [-84.2588, 30.429],
    [139.6917, 35.6895],
    [-77.0508, 38.9016],
    [-1.0827, 53.9576],
];

//Make the Routes Lines
routesMatt = [];
routesAnna = [];
routesNate = [];
routesDaman = [];
//Make Matt Routes
for (var i = 0; i < destinationMatt.length; i++) {
    // A simple line from origin to destination.
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
//Make Anna Routes
for (var i = 0; i < destinationAnna.length; i++) {
    // A simple line from origin to destination.
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
//Make Nate Routes
for (var i = 0; i < destinationNate.length; i++) {
    // A simple line from origin to destination.
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
//Make Daman Routes
for (var i = 0; i < destinationNate.length; i++) {
    // A simple line from origin to destination.
    var route = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destinationDaman[i]
                    ]
                }
            }]
    };
    routesDaman.push(route);
}

map.on('load', function () {
    //Matt Points Data
    map.addSource("mattPoints", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/mattHistory.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
    map.addLayer({
        id: "Matt",
        type: "circle",
        source: "mattPoints",
        filter: ["has", "point_count"],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
                "step",
                ["get", "point_count"],
                "#4daf4a",
                2,
                "#4daf4a",
                5,
                "#4daf4a"
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                2,
                30,
                5,
                40
            ],
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "MattPts",
        type: "circle",
        source: "mattPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": "#4daf4a",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    /*//Code for adding numbers to the clusters
     map.addLayer({
     id: "cluster-count",
     type: "symbol",
     source: "mattPoints",
     filter: ["has", "point_count"],
     layout: {
     "text-field": "{point_count_abbreviated}",
     "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
     "text-size": 12
     }
     });
     */
    //Nate Points Data
    map.addSource("natePoints", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/nateHistory.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
    map.addLayer({
        id: "Nate",
        type: "circle",
        source: "natePoints",
        filter: ["has", "point_count"],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
                "step",
                ["get", "point_count"],
                "#377eb8",
                2,
                "#377eb8",
                5,
                "#377eb8"
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                2,
                30,
                5,
                40
            ],
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "NatePts",
        type: "circle",
        source: "natePoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": "#377eb8",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    //Anna Points Data
    map.addSource("annaPoints", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/annaHistory.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
    map.addLayer({
        id: "Anna",
        type: "circle",
        source: "annaPoints",
        filter: ["has", "point_count"],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
                "step",
                ["get", "point_count"],
                "#e41a1c",
                2,
                "#e41a1c",
                5,
                "#e41a1c"
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                2,
                30,
                5,
                40
            ],
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "AnnaPts",
        type: "circle",
        source: "annaPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": "#e41a1c",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    //Daman Points Data
    map.addSource("damanPoints", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/damanHistory.geojson",
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    });
    map.addLayer({
        id: "Daman",
        type: "circle",
        source: "damanPoints",
        filter: ["has", "point_count"],
        paint: {
            // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            "circle-color": [
                "step",
                ["get", "point_count"],
                "#984ea3",
                2,
                "#984ea3",
                5,
                "#984ea3"
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                20,
                2,
                30,
                5,
                40
            ],
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "DamanPts",
        type: "circle",
        source: "damanPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": "#984ea3",
            "circle-radius": 4,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#fff"
        }
    });


    map.addSource('mattRoutes', {
        type: "geojson", 
        data: 'https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/mattRoutes.geojson'
    });
    map.addLayer({
        id: "MattRoutes",
        type: "line",
        source: "mattRoutes",
        "paint": {
            "line-color": "#888",
            "line-width": 8
        }
    });
    //Anna Routes Data
    for (var i = 0; i < routesAnna.length; i++) {
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
    //Nate Routes Data
    for (var i = 0; i < routesNate.length; i++) {
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
    //Daman Routes Data
    for (var i = 0; i < routesDaman.length; i++) {
        map.addSource('routeD' + i, {
            "type": "geojson",
            "data": routesDaman[i]
        });

        map.addLayer({
            "id": "routeD" + i,
            "source": "routeD" + i,
            "type": "line",
            "paint": {
                "line-width": 1.5,
                "line-color": "#FFFFFF"
            }
        });
    }

    //Matt Cluster zoom/click functionality
    map.on('click', 'Matt', function (e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates,
            zoom: map.getZoom() + 2
        });
    });
    //Anna Cluster zoom/click functionality
    map.on('click', 'Anna', function (e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates,
            zoom: map.getZoom() + 2
        });
    });
    //Nate Cluster zoom/click functionality
    map.on('click', 'Nate', function (e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates,
            zoom: map.getZoom() + 2
        });
    });
    //Daman Cluster zoom/click functionality
    map.on('click', 'Daman', function (e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates,
            zoom: map.getZoom() + 2
        });
    });

    //Matt Points click functionality
    map.on('click', 'MattPts', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = "<h3>" + e.features[0].properties.City + "</h3><h4>" + e.features[0].properties.Country + "</h4><p>" + e.features[0].properties.SiteName + " at IP: " + e.features[0].properties.IP_Number + "</p>";
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
    });
    map.on('mouseenter', 'MattPts', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'MattPts', function () {
        map.getCanvas().style.cursor = '';
    });
    //Anna Points click functionality
    map.on('click', 'AnnaPts', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = "<h3>" + e.features[0].properties.City + "</h3><h4>" + e.features[0].properties.Country + "</h4><p>" + e.features[0].properties.SiteName + " at IP: " + e.features[0].properties.IP_Number + "</p>";
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
    });
    map.on('mouseenter', 'AnnaPts', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'AnnaPts', function () {
        map.getCanvas().style.cursor = '';
    });
    //Nate Points click functionality
    map.on('click', 'NatePts', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = "<h3>" + e.features[0].properties.City + "</h3><h4>" + e.features[0].properties.Country + "</h4><p>" + e.features[0].properties.SiteName + " at IP: " + e.features[0].properties.IP_Number + "</p>";
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
    });
    map.on('mouseenter', 'NatePts', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'NatePts', function () {
        map.getCanvas().style.cursor = '';
    });
    //Daman Points click functionality
    map.on('click', 'DamanPts', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = "<h3>" + e.features[0].properties.City + "</h3><h4>" + e.features[0].properties.Country + "</h4><p>" + e.features[0].properties.SiteName + " at IP: " + e.features[0].properties.IP_Number + "</p>";
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
    });
    map.on('mouseenter', 'DamanPts', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'DamanPts', function () {
        map.getCanvas().style.cursor = '';
    });

});

//Toggle the layers on/off
var toggleableLayerIds = ['Anna', 'Daman', 'Matt', 'Nate'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            map.setLayoutProperty(clickedLayer + "Pts", 'visibility', 'none');
            map.setLayoutProperty(clickedLayer + "Routes", 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            map.setLayoutProperty(clickedLayer + "Pts", 'visibility', 'visible');
            map.setLayoutProperty(clickedLayer + "Routes", 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
