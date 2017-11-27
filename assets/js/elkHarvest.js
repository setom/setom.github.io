            var map = L.map('map', {
            center: [47.751, -120.740],
            zoom: 7
            });

            var esriStreets = L.esri.basemapLayer('Topographic').addTo(map); 

            //add feature polygons of elk harvests
            var elkHarvests = L.esri.featureLayer({url: 'https://gispublic.dfw.wa.gov/arcgis/rest/services/MapServices/HarvestStats/MapServer/3'}).addTo(map);

            //popup details 
            elkHarvests.bindPopup(function (layer) {
            return L.Util.template('<p><b>Total Elk Harvest: {Total_Harvest}.</b></p>', layer.feature.properties);
            });