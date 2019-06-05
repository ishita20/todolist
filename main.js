function get_list(){
    let todo=new Array;
    let todoStr=localStorage.getItem('todo');
    if(todoStr != null){
        todo=JSON.parse(todoStr);
    }
    //return list as array
    return todo;
}

function showList(){
    let list = get_list();
    let disp = '<ul>';
    for(let i=0;i<list.length;i++){
        disp+='<li>'+list[i]['task']+" "+list[i]['label']+'<button class="remove" id="'+i+'">X</button></li>';
    }
    disp+='</ul>';
    document.getElementById('list').innerHTML=disp;
    let buttons = document.getElementsByClassName('remove');
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',remove);
    }
}

function remove(){
    let removeButtonId=this.getAttribute('id');
    let list = get_list();
    // remove 1 element from index removeButtonId
    list.splice(removeButtonId,1);
    let tempList = JSON.stringify(list);
    localStorage.setItem('todo',tempList);
    showList();
    //check
    //return false;
}

function addTask(){
    let task=document.getElementById('addTask').value;
    let label = document.getElementById('label').value;
    let list = get_list();
    list.push({task:task,label:label});
    let tempList=JSON.stringify(list);
    localStorage.setItem('todo',tempList);
    //to refreash the list with updated items
    showList();
    //check use
    //return false;
}

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

async function initialize(){
    let service = new google.maps.places.PlacesService(document.getElementById('places'));
    function nearbySearch(request) {
        return new Promise(function(resolve) {
            service.nearbySearch(request, resolve);
        });
    }
    const watcher = navigator.geolocation.watchPosition(getPlaces, error, {distanceFilter:1500});
setTimeout(() => {
    navigator.geolocation.clearWatch(watcher);
  }, 60000);

   async function getPlaces(position){
    let allResponse = [];
    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        for (name of ["pet_store", "pharmacy", "atm"]) {
    var request = {
        location: pos,
        radius: '1500',
        type: [name]
      };
      //let response = service.nearbySearch(request, callback)
      let start = new Date()
      console.log("req strated:"+start.getTime());
      const res = await nearbySearch(request)
      console.log('1111', res)
    //   let response = service.nearbySearch(request, callback)
    //    allResponse.push(new Promise( service.nearbySearch(request, callback)))
    }
    // for(let i=0;i<allResponse.length;i++){
    //     console.log(allResponse[i])
    // }
    // console.log("response:" + Promise.all(allResponse))
    //alert(allResponse))
//    Promise.all(allResponse).then((result)=>{
//        console.log(11111, result)
//    })
}

// console.log("response:" + allResponse)

function callback(results, status){
    console.log()
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < (results.length>3?3:results.length); i++) {
          var place = results[i];
          console.log("types:"+place['types'])
          console.log(results[i]);
        }
        let end = new Date()
        console.log("req ends:"+end.getTime())
        return results;
      }
    }
}

document.getElementById('add').addEventListener('click',addTask);
showList();
window.addEventListener('load',initialize)


console.log("Hi")




// async function fetchSingle(pos, name){

//     var request = {
//         location: pos,
//         radius: '1500',
//         type: [name]
//       };
    
    // let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+posx+","+posy+"&radius=1500&type="+name+"&key=AIzaSyAf3047gIm4fZNtQ6e5_5KD-BGzqYkO8BI"
    //console.log(url)
    //console.log("Starting API call for "+name+" at "+ executingAt())
    // userDetails = await fetch(url)
    // userDetailsJSON = await userDetails.json();
    // console.log("Finished API call for " + name + "at " + executingAt())
    // console.log("userDetailsJSON", userDetailsJSON);
    // return userDetailsJSON
//     return service.nearbySearch(request, callback)
// }

// async function fetchAll(position){
//     var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    // var request = {
    //     location: pos,
    //     radius: '1500',
    //     type: ['restaurant']
    //   };



    // let posx = position.coords.latitude
    // let posy = position.coords.longitude
    // console.log(posx +" "+posy)
    // let singleUsersDetailsPromises = [];
    // for (name of ["pet_store", "pharmacy", "atm"]) {
    //     let promise = fetchSingle(pos, name);
    //     //console.log("Created Promise for API call of " + name + " at " + executingAt());
    //     singleUsersDetailsPromises.push(promise);
    //   }
    //console.log("Finished adding all promises at " + executingAt());
    // let allUsersDetails = await Promise.all(singleUsersDetailsPromises);
    //console.log("Got the results for all promises at " + executingAt());
    // console.log(allUsersDetails)
    // for(let i=0;i<allUsersDetails.length;i++){
    //   console.log(allUsersDetails[i])
    //   for(let j=0;allUsersDetails[i].length;j++){
    //     console.log(allUsersDetails[i][j]['name'])//array of responses
    //   }
    // }
    
    

