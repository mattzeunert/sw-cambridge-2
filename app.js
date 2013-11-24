

var app = new function () {
	this.init =  function() {
		
		var height = $(window).height();
		$(".app_window").css("height" , height);
	}
	
	this.from_location = "";
	
	this.to_location = "";
	
	this.updatemap =  function(data_array, map_port) {
		$("#" + map_port).html("");
		var lat            = data_array[0].lat;
    var lon            =  data_array[0].lon;
    var zoom           = 5;
	
	var colors = { "vgood" : "#008000", "good" : "#4ca64c" , "passive" : "#fdb813" , "bad" : "#c8382a" , "vbad" : "#c22313" } ;
	
    var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position       = new OpenLayers.LonLat(lon, lat).transform( fromProjection, toProjection);
    
    map = new OpenLayers.Map(map_port);
	console.log("...maps..");
    //var mapnik         = new OpenLayers.Layer.MQ();
    var mapnik         = new OpenLayers.Layer.Google();
    map.addLayer(mapnik);
 
    var markers = new OpenLayers.Layer.Markers( "Markers" );
	 map.addControl(new OpenLayers.Control.LayerSwitcher());
	 var vectorMap = [];
	
	for (var i=0;i<data_array.length;i++)
	{ 
		
		var col = "#0077CC";
		var styleMap = new OpenLayers.StyleMap(OpenLayers.Util.applyDefaults( {fillColor: col, fillOpacity: 1, strokeOpacity: 0.2 ,cursor:"pointer" , strokeColor: "black" ,pointRadius : 6 },OpenLayers.Feature.Vector.style["default"]));
		
		
		var vectors = new OpenLayers.Layer.Vector(data_array[i].name, {styleMap: styleMap});
		
		var point = new OpenLayers.Geometry.Point(data_array[i].lon, data_array[i].lat).transform( fromProjection, toProjection);
		
		var reg_ref = new OpenLayers.Feature.Vector(point,data_array[i].area);
		
		map.addLayer(vectors);
		
		vectors.addFeatures([reg_ref]);
		
		vectorMap[i] = vectors;
		/*
		vectors.events.on({
                "click": function(e) {
					console.log("selected...." + i);
                }
            });
		*/
	}

	for(var j =0 ; j < vectorMap.length ; j++) {
		//console.log(vectorMap[j]);
		
		
		 
		vectorMap[j].events.on({
			"featureselected": function(e) {
			var feature = e.feature;
			//console.log(feature.layer.name);
			var select_city = feature.layer.name
			popup = new OpenLayers.Popup.FramedCloud(feature.layer.name, 
                                 feature.geometry.getBounds().getCenterLonLat(),
                                 null,
                                 "<div style='font-size:.8em; height:100px; width:300px;'> <span style='font-size:14px; font-weight:700;'> " + select_city +" City</span><br> <span style='font-size:20px; font-weight:700;'> 10 </span> Bus Companies <br> <span style='font-size:20px; font-weight:700;'> 1000 </span> Journeys out </div>",
                                 null, true, function(){this.destroy()} );
			feature.popup = popup;
			map.addPopup(popup);
			
			}
		});
		
		vectorMap[j].events.on({
			"click": function(e) {
				console.log(e.feature );
			}
		});
	}
	
	var styleMapl = new OpenLayers.StyleMap(OpenLayers.Util.applyDefaults( {fillColor: colors.good, fillOpacity: 0.5, strokeOpacity: 0.1 ,cursor:"pointer" , strokeColor: "black" ,pointRadius : 50 },OpenLayers.Feature.Vector.style["default"]));
	
	var vectorsl = new OpenLayers.Layer.Vector("BIG CIRCLE" , {styleMap: styleMapl});
	
		
	map.addLayer(vectorsl);
	
	selectControl = new OpenLayers.Control.SelectFeature(
                vectorMap,
                {
                    clickout: true, toggle: false,
                    multiple: false, hover: false, featurehighlighted : false,
                    toggleKey: "ctrlKey", // ctrl key removes from selection
                    multipleKey: "shiftKey" // shift key adds to selection
                }
          );	
	
	map.addControl(selectControl);
	
	selectControl.activate();
	
	
	map.setCenter(position, zoom);
	
	}
}

$(".app-location-from").on( "click", function( event ){
	$(".app-cities-list-from").html("");
	for(var i= 0 ; i < cities.length ; i ++ ) {
		if(cities[i].name != app.to_location ) {
			$(".app-cities-list-from").append("<div  class='app-location-select'><div class='app-location-select-var'> " + cities[i].name + " </div></div>");
		}
	}
	$.mobile.changePage("#app_search_city_from" ,
			{
			  transition: "flip"
			});
	$(".app-location-select").on( "click", function( event ){
		//console.log(($(this).find("div").html()).trim());
		app.from_location = ($(this).find("div").html()).trim();
		$(".app-location-from").find("div").html(app.from_location);
		history.back();
	});
	
});



$(".app-location-to").on( "click", function( event ){
	
	$(".app-cities-list-to").html("");
	//
	for(var i= 0 ; i < cities.length ; i ++ ) {
		if(cities[i].name != app.from_location ) {
			$(".app-cities-list-to").append("<div  class='app-location-select'><div class='app-location-select-var'> " + cities[i].name + " </div></div>");
		}
	}
	$.mobile.changePage("#app_search_city_to" ,
			{
			  transition: "flip"
			});
	$(".app-location-select").on( "click", function( event ){
		//console.log(($(this).find("div").html()).trim());
		app.to_location = ($(this).find("div").html()).trim();
		$(".app-location-to").find("div").html(app.to_location);
		history.back();
	});
	
});

$(".app-search-date").on( "click", function( event ){
	
	
});

$(".app-menu-search").on( "click", function( event ){
	$.mobile.changePage("#app_search" ,
			{
			  transition: "slide"
			});
			
			console.log("test app menu search");
});
$(".app-location-view").on( "click", function( event ){
	
	$.mobile.changePage("#app_map2" ,
			{
			  transition: "flip"
			});
	
	var twopoints = [];
	for(var i= 0 ; i < cities.length ; i ++ ) {
		if(cities[i].name == app.from_location ) {
			
			twopoints.push(cities[i]);
		}
		if(cities[i].name == app.to_location ) {
			twopoints.push(cities[i]);
		}
	}
	$.mobile.loading('show');
	setTimeout(function(){app.updatemap(twopoints,"app-map-viewer2"); $.mobile.loading('hide');},1000);
	//console.log(twopoints );
	//app.updatemap(twopoints);	
});


$(".app-menu-map").on( "click", function( event ){
	$.mobile.changePage("#app_map" ,
			{
			  transition: "slide"
			});
	app.updatemap(cities,"#app-map-viewer");
	
});

$(".map-search-back").on( "click", function( event ){
	
	history.back();
});


$(".app-menu-settings").on( "click", function( event ){
	
	
});


$(".app-menu-info").on( "click", function( event ){
	
	
});





app.init();
