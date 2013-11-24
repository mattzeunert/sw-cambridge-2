function searchCity(str){
	str = str || "";
	str = str.toLowerCase();
	if (str === ""){
		return cities;
	}

	var matches = _.filter(cities, function(city){
		return city.name.toLowerCase().indexOf(str) !== -1;
	})

	matches = _.sortBy(matches, function(city){
		return strStartsWith(city.name, str) ? -1 : 1;
	});

	return matches;
}

function strStartsWith(str, strStart){
	if (str.length < strStart.length){
		return false; 
	}
	return str.toLowerCase().indexOf(strStart.toLowerCase()) === 0;
}

var cities = [
	{id:"1", name:"Lima", region:"Lima", lon:"-77.0622", lat:"-12.04782"},
	{id:"2", name:"Arequipa", region:"Arequipa", lon:"-71.53689", lat:"-16.39882"},
	{id:"3", name:"Trujillo", region:"La Libertad", lon:"-79.0288", lat:"-8.112"},
	{id:"4", name:"Chiclayo", region:"Lambayeque", lon:"-79.84648", lat:"-6.776566"},
	{id:"5", name:"Piura", region:"Piura", lon:"-80.63333", lat:"-5.2"},
	{id:"6", name:"Iquitos", region:"Loreto", lon:"-73.25", lat:"-3.75"},
	{id:"7", name:"Cusco", region:"Cusco", lon:"-71.97222", lat:"-13.525"},
	{id:"8", name:"Huancayo", region:"Junín", lon:".", lat:"."},
	{id:"9", name:"Chimbote", region:"Ancash", lon:"-78.59357", lat:"-9.074544"},
	{id:"10", name:"Pucallpa", region:"Ucayali", lon:"-74.55", lat:"-8.383333"},
	{id:"11", name:"Tacna", region:"Tacna", lon:"-70.25097", lat:"-18.01757"},
	{id:"12", name:"Ica", region:"Ica", lon:"-75.74399", lat:"-14.06394"},
	{id:"13", name:"Juliaca", region:"Puno", lon:"-70.12708", lat:"-15.49072"},
	{id:"14", name:"Sullana", region:"Piura", lon:"-80.68333", lat:"-4.9"},
	{id:"15", name:"Cajamarca", region:"Cajamarca", lon:"-78.51063", lat:"-7.162099"},
	{id:"16", name:"Chincha Alta", region:"Ica", lon:"-76.13333", lat:"-13.45"},
	{id:"17", name:"Ayacucho", region:"Ayacucho", lon:"-74.21582", lat:"-13.15816"},
	{id:"18", name:"Huánuco", region:"Huánuco", lon:".", lat:"."},
	{id:"19", name:"Huacho", region:"Lima", lon:"-77.60206", lat:"-11.12407"},
	{id:"20", name:"Puno", region:"Puno", lon:"-70.02361", lat:"-15.84333"},
	{id:"21", name:"Tarapoto", region:"San Martín", lon:".", lat:"."},
	{id:"22", name:"Huaraz", region:"Ancash", lon:"-77.53333", lat:"-9.533334"},
	{id:"23", name:"Tumbes", region:"Tumbes", lon:"-80.45", lat:"-3.566667"},
	{id:"24", name:"Talara", region:"Piura", lon:"-81.27188", lat:"-4.579903"},
	{id:"25", name:"Huaral", region:"Lima", lon:"-77.20906", lat:"-11.50076"},
	{id:"26", name:"Paita", region:"Piura", lon:"-81.09972", lat:"-5.085"},
	{id:"27", name:"Jaén", region:"Cajamarca", lon:".", lat:"."},
	{id:"28", name:"Cerro de Pasco", region:"Pasco", lon:"-76.2625", lat:"-10.68639"},
	{id:"29", name:"Ilo", region:"Moquegua", lon:"-71.33603", lat:"-17.64531"},
	{id:"30", name:"Puerto Maldonado", region:"Madre de Dios", lon:"-69.19189", lat:"-12.60342"},
	{id:"31", name:"Chulucanas", region:"Piura", lon:"-80.16194", lat:"-5.099722"},
	{id:"32", name:"Pisco", region:"Ica", lon:"-76.20321", lat:"-13.70998"},
	{id:"33", name:"Barranca", region:"Lima", lon:"-77.76099", lat:"-10.75407"},
	{id:"34", name:"Moquegua", region:"Moquegua", lon:"-70.93118", lat:"-17.19395"},
	{id:"35", name:"Abancay", region:"Apurímac", lon:".", lat:"."},
	{id:"36", name:"Tingo María", region:"Huánuco", lon:".", lat:"."},
	{id:"37", name:"Yurimaguas", region:"Loreto", lon:"-76.1204", lat:"-5.902301"},
	{id:"38", name:"Lambayeque", region:"Lambayeque", lon:"-79.9", lat:"-6.7"},
	{id:"39", name:"Chancay", region:"Lima", lon:"-77.2715", lat:"-11.56573"},
	{id:"40", name:"Tarma", region:"Junín", lon:".", lat:"."},
	{id:"41", name:"Moyobamba", region:"San Martín", lon:".", lat:"."},
	{id:"42", name:"Sicuani", region:"Cusco", lon:"-71.22466", lat:"-14.28529"},
	{id:"43", name:"Chepén", region:"La Libertad", lon:".", lat:"."},
	{id:"44", name:"Huancavelica", region:"Huancavelica", lon:"-74.9764", lat:"-12.7862"},
	{id:"45", name:"Cañete", region:"Lima", lon:".", lat:"."},
	{id:"46", name:"Virú", region:"La Libertad", lon:".", lat:"."},
	{id:"47", name:"La Union", region:"Piura", lon:"-80.74915", lat:"-5.391436"},
	{id:"48", name:"Imperial", region:"Lima", lon:"-76.37531", lat:"-13.02953"},
	{id:"49", name:"Guadalupe", region:"La Libertad", lon:"-79.47312", lat:"-7.247041"},
	{id:"50", name:"Sechura", region:"Piura", lon:"-80.81711", lat:"-5.558964"},
	{id:"51", name:"Ferreñafe", region:"Lambayeque", lon:".", lat:"."},
	{id:"52", name:"La Arena", region:"Piura", lon:"-80.70758", lat:"-5.341671"},
	{id:"53", name:"Huamachuco", region:"La Libertad", lon:"-78.0487", lat:"-7.812098"},
	{id:"54", name:"Bagua Grande", region:"Amazonas", lon:"-78.45059", lat:"-5.757331"},
	{id:"55", name:"Nueva Cajamarca", region:"San Martín", lon:".", lat:"."},
	{id:"56", name:"Casa Grande", region:"La Libertad", lon:"-79.18589", lat:"-7.74744"},
	{id:"57", name:"Huanta", region:"Ayacucho", lon:"-74.2475", lat:"-12.93972"},
	{id:"58", name:"Perené", region:"Junín", lon:".", lat:"."},
	{id:"59", name:"Andahuaylas", region:"Apurímac", lon:".", lat:"."},
	{id:"60", name:"Huaura", region:"Lima", lon:"-77.61352", lat:"-11.06904"},
	{id:"61", name:"Quillabamba", region:"Cusco", lon:"-72.69305", lat:"-12.86333"},
	{id:"62", name:"Pichanaqui", region:"Junín", lon:".", lat:"."},
	{id:"63", name:"Pacasmayo", region:"La Libertad", lon:"-79.56259", lat:"-7.400599"},
	{id:"64", name:"Mala", region:"Lima", lon:"-76.63954", lat:"-12.6629"},
	{id:"65", name:"Bagua", region:"Amazonas", lon:"-78.53333", lat:"-5.633333"},
	{id:"66", name:"Tumán", region:"Lambayeque", lon:".", lat:"."},
	{id:"67", name:"Casma", region:"Ancash", lon:"-78.317", lat:"-9.467"},
	{id:"68", name:"Majes", region:"Arequipa", lon:"-72.23638", lat:"-16.23959"},
	{id:"69", name:"Espinar", region:"Cusco", lon:"-71.42184", lat:"-14.80283"},
	{id:"70", name:"Marcavelica", region:"Piura", lon:"-80.71313", lat:"-4.868157"},
	{id:"71", name:"Juanjuí", region:"San Martín", lon:".", lat:"."},
	{id:"72", name:"Nazca", region:"Ica", lon:"-74.94032", lat:"-14.8391"},
	{id:"73", name:"Chachapoyas", region:"Amazonas", lon:"-77.85", lat:"-6.216667"},
	{id:"74", name:"Mollendo", region:"Arequipa", lon:"-72.01667", lat:"-17.01667"},
	{id:"75", name:"Monsefú", region:"Lambayeque", lon:".", lat:"."},
	{id:"76", name:"Ilave", region:"Puno", lon:"-69.63216", lat:"-16.08809"},
	{id:"77", name:"Requena", region:"Loreto", lon:"-73.98457", lat:"-4.986713"},
	{id:"78", name:"Querecotillo", region:"Piura", lon:"-80.64795", lat:"-4.837792"},
	{id:"79", name:"Satipo", region:"Junín", lon:".", lat:"."},
	{id:"80", name:"Chanchamayo", region:"Junín", lon:".", lat:"."}

 ];
