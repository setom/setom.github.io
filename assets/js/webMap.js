mapboxgl.accessToken = 'pk.eyJ1Ijoic2V0b20iLCJhIjoiY2o5NmN0dHB4MDNoaDJ3bWw1N2JvemlpaSJ9.McVFy9qwVkdrV_anNWv7jw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/setom/cjhxw9byy11ct2rmuzfmj3ji1',
    center: [2, 30],
    zoom: 1.5
});

var mattColour = '#74ee15';
var annaColour = '#ffe700';
var nateColour = '#f000ff';
var damanColour = '#4deeea';

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
                mattColour,
                2,
                mattColour,
                5,
                mattColour
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                6,
                2,
                8,
                5,
                10
            ],
            "circle-stroke-width": 8,
            "circle-stroke-color": mattColour,
            "circle-stroke-opacity": 0.75
        }
    });
    map.addLayer({
        id: "MattPts",
        type: "circle",
        source: "mattPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": mattColour,
            "circle-radius": 6,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "Mattcluster-count",
        type: "symbol",
        source: "mattPoints",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Magda Clean Mono Offc Pro Regular", "Arial Unicode MS Bold"],
            "text-size": 14
        },
        paint:
                {
                    "text-color": "#000000"
                }
    });

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
                nateColour,
                2,
                nateColour,
                5,
                nateColour
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                6,
                2,
                8,
                5,
                10
            ],
            "circle-stroke-width": 8,
            "circle-stroke-color": nateColour,
            "circle-stroke-opacity": 0.75
        }
    });
    map.addLayer({
        id: "NatePts",
        type: "circle",
        source: "natePoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": nateColour,
            "circle-radius": 6,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "Natecluster-count",
        type: "symbol",
        source: "natePoints",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Magda Clean Mono Offc Pro Regular", "Arial Unicode MS Bold"],
            "text-size": 14
        },
        paint:
                {
                    "text-color": "#000000"
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
                annaColour,
                2,
                annaColour,
                5,
                annaColour
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                6,
                2,
                8,
                5,
                10
            ],
            "circle-stroke-width": 8,
            "circle-stroke-color": annaColour,
            "circle-stroke-opacity": 0.75
        }
    });
    map.addLayer({
        id: "AnnaPts",
        type: "circle",
        source: "annaPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": annaColour,
            "circle-radius": 6,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "Annacluster-count",
        type: "symbol",
        source: "annaPoints",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Magda Clean Mono Offc Pro Regular", "Arial Unicode MS Bold"],
            "text-size": 14
        },
        paint:
                {
                    "text-color": "#000000"
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
                damanColour,
                2,
                damanColour,
                5,
                damanColour
            ],
            "circle-radius": [
                "step",
                ["get", "point_count"],
                6,
                2,
                8,
                5,
                10
            ],
            "circle-stroke-width": 8,
            "circle-stroke-color": damanColour,
            "circle-stroke-opacity": 0.75
        }
    });
    map.addLayer({
        id: "DamanPts",
        type: "circle",
        source: "damanPoints",
        filter: ["!has", "point_count"],
        paint: {
            "circle-color": damanColour,
            "circle-radius": 6,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#fff"
        }
    });
    map.addLayer({
        id: "Damancluster-count",
        type: "symbol",
        source: "damanPoints",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Magda Clean Mono Offc Pro Regular", "Arial Unicode MS Bold"],
            "text-size": 14
        },
        paint:
                {
                    "text-color": "#000000"
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
            "line-color": mattColour,
            "line-width": 1,
            "line-opacity": 0.25
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
            "line-color": annaColour,
            "line-width": 1,
            "line-opacity": 0.25
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
            "line-color": nateColour,
            "line-width": 1,
            "line-opacity": 0.25
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
            "line-color": damanColour,
            "line-width": 1,
            "line-opacity": 0.25
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
        var description = "<h3>" + e.features[0].properties.SiteName + "</h3><h4>" + e.features[0].properties.City + ", " + e.features[0].properties.Country + "</h4><p> at IP: " + e.features[0].properties.IP_Number + "</p>";
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
        var description = "<h3>" + e.features[0].properties.SiteName + "</h3><h4>" + e.features[0].properties.City + ", " + e.features[0].properties.Country + "</h4><p> at IP: " + e.features[0].properties.IP_Number + "</p>";
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
        var description = "<h3><a href=\"" + e.features[0].properties.SiteName + "\">"+ e.features[0].properties.SiteName +"</a></h3><h4>" + e.features[0].properties.City + ", " + e.features[0].properties.Country + "</h4><p> at IP: " + e.features[0].properties.IP_Number + "</p>";
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
        var description = "<h3>" + e.features[0].properties.SiteName + "</h3><h4>" + e.features[0].properties.City + ", " + e.features[0].properties.Country + "</h4><p> at IP: " + e.features[0].properties.IP_Number + "</p>";
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
}
);

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
            map.setLayoutProperty(clickedLayer + "cluster-count", 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            map.setLayoutProperty(clickedLayer + "Pts", 'visibility', 'visible');
            map.setLayoutProperty(clickedLayer + "Routes", 'visibility', 'visible');
            map.setLayoutProperty(clickedLayer + "cluster-count", 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
