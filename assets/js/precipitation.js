var map;
require([
    "esri/map", "esri/layers/KMLLayer", 
    "dojo/parser", "dojo/dom-style",
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/domReady!"
], function (
        Map, KMLLayer,
        parser, domStyle
        ) {
    map = new Map("map3", {
        basemap: "dark-gray",
        center: [-98.663, 42],
        zoom: 4
    });

    parser.parse();
    
    //add the legend
    map.on("layers-add-result", function (evt) {
        var layerInfo = arrayUtils.map(evt.layers, function (layer, index) {
            return {layer: layer.layer, title: layer.layer.name};
        });
        if (layerInfo.length > 0) {
            var legendDijit = new Legend({
                map: map,
                layerInfos: layerInfo
            }, "legendDiv");
            legendDijit.startup();
        }
    });

    var kmlUrl = "http://www.wpc.ncep.noaa.gov/kml/winwx/Day1_psnow_gt_04inches.kml";
    var kml = new KMLLayer(kmlUrl);
    map.addLayer(kml);
    kml.on("load", function () {
        domStyle.set("loading", "display", "none");
    });
});