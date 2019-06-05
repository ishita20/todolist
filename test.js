"use strict"
// function initialize(){
//     let service = new google.maps.places.PlacesService(document.getElementById('places'));

//     const watcher = navigator.geolocation.watchPosition(getPlaces, error, {distanceFilter:1500});
// setTimeout(() => {
//     navigator.geolocation.clearWatch(watcher);
//   }, 60000);

//    function getPlaces(position){
//     let allResponse = [];
//     var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         for (name of ["pet_store", "pharmacy", "atm"]) {
//     var request = {
//         location: pos,
//         radius: '1500',
//         type: [name]
//       };
//       //let response = service.nearbySearch(request, callback)
//       let start = new Date()
//       console.log("req strated:"+start.getTime())
//        allResponse.push( service.nearbySearch(request, callback))
//     }
//     // for(let i=0;i<allResponse.length;i++){
//     //     console.log(allResponse[i])
//     // }
//     // console.log("response:" + Promise.all(allResponse))
//     //alert(allResponse))
//    return Promise.all(allResponse)
// }

// // console.log("response:" + allResponse)

// function callback(results, status){
//     console.log()
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < (results.length>3?3:results.length); i++) {
//           var place = results[i];
//           console.log("types:"+place['types'])
//           console.log(results[i]);
//         }
//         let end = new Date()
//         console.log("req ends:"+end.getTime())
//         return results;
//       }
//     }
// }
function initialize(){
const watcher = navigator.geolocation.watchPosition(getPlaces, error, {distanceFilter:1500});
setTimeout(() => {
    navigator.geolocation.clearWatch(watcher);
  }, 60000);

  async function getPlaces(position){
    let allResponse = [];
    for (name of ["pet_store", "pharmacy", "atm"]) {
        //console.log(callback)
        await allResponse.push(callback(name))
    }
    console.log(allResponse)
    function callback(name){
        return name
    }
}
window.addEventListener('load',initialize)