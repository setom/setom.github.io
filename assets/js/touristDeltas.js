var map = L.map('map').setView([ 47.2414, -122.4594], 12);

		L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
			
		}).addTo(map);

		//add the geoJson file that you converted to js - see that burglary is what I named the var not the file. Where ever you see burglary in this document (other than in places where it is written on the website, only the parts where it is in the js) replace it with what you named the variable in your js file. 

	//	L.geoJson(burglary).addTo(map);
	// control that shows what the user is hovering over - white box in the top right
		var info = L.control();

		info.onAdd = function (map) {	
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};
		//update this next bit with your property names (I think of properties as attribute titles) also update the text in the heading tags to describe your data. If you are creating a choropleth map you may want to add '<b>' + props.NAME + '</b><br /> infront of the props.burgCount section so the name of the country or county will update as well, see the leaflet example code if you need more help

		info.update = function (props) {
			this._div.innerHTML = '<h4>Number of Breaking and Entering or Burglaries Reported</h4>' +  (props ?
				 props.burgCount + ' Reported burglary or break and entering'
				: 'Hover over a cell');
		};

		info.addTo(map);
		

//// get color depending on burgCount which represents number of reports counted in the grid cell - first set color scheme
		function getColor(d) {
			return d > 20 ? '#800026' :
			       d > 15  ? '#E31A1C' :
			       d > 10   ? '#FD8D3C' :
			       d > 5   ? '#FEB24C' :
			       d > 0   ? '#FED976' :
			                  '#FFEDA0';
		}

//styling the polygon so that fill changes with the value associated with the cell and number of reported burglary and B and E calls
		function style(feature) {
    return {
        fillColor: getColor(feature.properties.burgCount),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

//highlighting features - change the style as you see fit
function highlightFeature(e) {
			var layer = e.target;

			layer.setStyle({
				weight: 5,
				color: '#666',
				dashArray: '',
				fillOpacity: 0.1
			});

			if (!L.Browser.ie && !L.Browser.opera) {
				layer.bringToFront();
			}

			info.update(layer.feature.properties);
		}
L.geoJson(burglary, {style: style}).addTo(map);


//keep going 

var geojson;

		function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

		function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
		}

		function onEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: zoomToFeature
			});
		}

		//style specific to file

		geojson = L.geoJson(burglary, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(map);

		map.attributionControl.addAttribution('Crime data &copy; <a href="https://data.cityoftacoma.org/">Open Data Tacoma</a>');


		//the static legend in the bottom right
		var legend = L.control({position: 'bottomright'});

		legend.onAdd = function (map) {

var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 5, 10, 15, 20, ],
				key_labels = [ "0-5", "6-10", "11-15", '16-20', '20+'],
				labels = ["Number of reported cases"],
				from, to;

								

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					 key_labels[i]);
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};

		legend.addTo(map);

			map.on('click', onMapClick);

