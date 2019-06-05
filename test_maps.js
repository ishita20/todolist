console.log("Hi")
require('es6-promise').polyfill();
require('isomorphic-fetch');
const performance = require('perf_hooks').performance;
startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

async function fetchSingle(name){
    let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.448175,77.079376&radius=1500&type="+name+"&key=AIzaSyAf3047gIm4fZNtQ6e5_5KD-BGzqYkO8BI"
    console.log("Starting API call for "+name+" at "+ executingAt())
    userDetails = await fetch(url)
    userDetailsJSON = await userDetails.json();
    console.log("Finished API call for " + name + "at " + executingAt())
    //console.log("userDetailsJSON", userDetailsJSON);
    return userDetailsJSON
}

async function fetchAll(){
    let singleUsersDetailsPromises = [];
    for (name of ["pet_store", "pharmacy", "atm"]) {
        let promise = fetchSingle(name);
        console.log("Created Promise for API call of " + name + " at " + executingAt());
        singleUsersDetailsPromises.push(promise);
      }
    console.log("Finished adding all promises at " + executingAt());
    let allUsersDetails = await Promise.all(singleUsersDetailsPromises);
    console.log("Got the results for all promises at " + executingAt());
    console.log(allUsersDetails)//array of responses
}
module.exports.fetchAll = fetchAll
//fetchAll()