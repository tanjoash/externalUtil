// INITIALISE MAP
var map = L.map('map').setView([1.3576, 103.8199], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   detectRetina: true,
   maxZoom: 19,
   minZoom: 11,
   preferCanvas: true,
   /** DO NOT REMOVE the OneMap attribution below **/
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var pinIcon = L.icon({
   iconUrl: './assets/pin.png',
   iconSize: [40, 40],
   popupAnchor: [0, -40],
   iconAnchor: [20, 40]
})

 d3.csv('amenities/external_util.csv', function(data) {
    data.forEach(function(item) {
        var latitude = parseFloat(item.latitude); // Extract latitude from CSV
        var longitude = parseFloat(item.longitude); // Extract longitude from CSV
 
        // Create a marker and add it to the map
        L.marker([latitude, longitude], {icon: pinIcon}).addTo(map)
            .bindPopup('Name: ' + item.name + '<br/> Type: ' + item.type + ' ' + item.power + '<br/> No. of Chargers: ' + item["# of chargers"] + '<br/> Price: ' + item.cost + '<br/> EVCO: ' + item.EVCO +'<br/> Peak Usage: ' + Number(item['peak utilisation']).toFixed(3) + '<br/> Hour that it occured: ' + item['when peak']) // Customize the popup content
    });
 });

 // SETTING FOR WHEN ZOOMING
 // resize image
//map.on('zoomend', function() {
//   currZoom = map.getZoom()
//   console.log(currZoom)
//   const foodIcon = document.querySelectorAll(".foodIcon");
//   if(currZoom < 15){
//      foodIcon.forEach(element => {
//         element.style.width = "15px";
//         element.style.height = "15px";
//         element.style.backgroundSize = "15px 15px";
//      })
//   } else {
//      foodIcon.forEach(element => {
//         element.style.width = "20px";
//         element.style.height = "20px";
//         element.style.backgroundSize = "20px 20px";
//      })
//   }
//   print(document.querySelector(".foodIcon").style.width)
//
//   //var newzoom = '' + (20*(map.getZoom()+2)) +'px';
//   //$('#map .foodIcon').css({'width':newzoom,'height':newzoom,'background-size':newzoom + ' ' + newzoom}); 
//});
//