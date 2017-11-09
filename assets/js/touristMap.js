//My data geojson placeholder
var myData;
var map = L.map('map').setView([35, 0], 2);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, &mdash; Data from: http://data.un.org/DocumentData.aspx?id=375',
    maxZoom: 16
}).addTo(map);

//Get fill colours. Returns a fill colour based on what the value of the param is
function getColor(d) {
    return d > 140 ? '#006d2c' :
            d > 83 ? '#31a354' :
            d > 49 ? '#74c476' :
            d > 31 ? '#a1d99b' :
            d > 0 ? '#c7e9c0' :
            d > -54 ? '#fcbba1' :
            //default
            '#EEEEEE';
}

//gets the style for each polygon (since the fill is different)
function style(feature) {
    return {
        fillColor: getColor(feature.properties.Change),
        weight: 1,
        opacity: 0.75,
        color: 'white',
        fillOpacity: 0.75
    };
}

//interaction handlers (credit: http://leafletjs.com/examples/choropleth/)

// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

//get the change in visitors, if no data return No Data
getChange = function (props) {
    if (props.hasOwnProperty('Change')) {
        return props.Change + "% change";
    } else {
        return "No Data";
    }
};

info.update = function (props) {
    this._div.innerHTML = '<h4>Change in Incoming Tourists 2004 - 2014</h4>' + (props ?
            '<b>' + props.CNTRY_NAME + '</b><br />' + getChange(props)
            : 'Hover over a state');
};

info.addTo(map);

//highlight a polygon when mouseover it
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}
//unhighlight when you remove the mouseover
function resetHighlight(e) {
    myData.resetStyle(e.target);
}
//zoom to a feature when you click the polygon
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

//add a mouse listener to each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

//Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
            grades = [-54, 30, 50, 80, 140],
            labels = ["< 0%", "0 - 31%", "32 - 49%", "50 - 83%", "> 84%"];


    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 5) + '"></i> ' + labels[i] + '<br>';
    }

    return div;
};

legend.addTo(map);

//Reset extent button
// Thanks to http://www.coffeegnome.net/control-button-leaflet/
//reset the extent on a click
resetExtent = function () {
    map.setView([35, 0], 2);
};

//the button
var customControl =  L.Control.extend({

  options: {
    position: 'topright'
  },

  onAdd: function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

    container.style.backgroundColor = 'white';  
    container.style.backgroundImage = "url(images/globeIcon.png)";
    container.style.backgroundSize = "30px 30px";
    container.style.width = '30px';
    container.style.height = '30px';

    container.onclick = function(){
      resetExtent();
    };

    return container;
  }
});

map.addControl(new customControl());


//MAKE THE MAP! :)
myData = L.geoJson(tourism, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
