mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0b20iLCJhIjoiY2o5NmN0dHB4MDNoaDJ3bWw1N2JvemlpaSJ9.McVFy9qwVkdrV_anNWv7jw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/setom/cjhxw9byy11ct2rmuzfmj3ji1',
    center: [2, 30],
    zoom: 1.5
});


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
    [-1.0827, 53.9576]
];



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

    //Matt Routes Data
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
            "line-width": 1
        }
    });
    //Anna Routes Data
    map.addSource('annaRoutes', {
        type: "geojson",
        data: 'https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/annaRoutes.geojson'
    });
    map.addLayer({
        id: "AnnaRoutes",
        type: "line",
        source: "annaRoutes",
        "paint": {
            "line-color": "#888",
            "line-width": 1
        }
    });
    //Nate Routes Data
    map.addSource('nateRoutes', {
        type: "geojson",
        data: 'https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/nateRoutes.geojson'
    });
    map.addLayer({
        id: "NateRoutes",
        type: "line",
        source: "nateRoutes",
        "paint": {
            "line-color": "#888",
            "line-width": 1
        }
    });
    //Daman Routes Data
    map.addSource('damanRoutes', {
        type: "geojson",
        data: 'https://raw.githubusercontent.com/setom/setom.github.io/master/assets/files/GeoJsons/damanRoutes.geojson'
    });
    map.addLayer({
        id: "DamanRoutes",
        type: "line",
        source: "damanRoutes",
        "paint": {
            "line-color": "#888",
            "line-width": 1
        }
    });


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
