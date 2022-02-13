// 1. Find the BASE_API_URL
const BASE_API_URL = "https://api.data.gov.sg/v1/";


window.addEventListener('DOMContentLoaded', async function(){
    let response = await axios.get(BASE_API_URL + 'transport/taxi-availability');
    let taxis = response.data.features[0].geometry.coordinates;
    // preselect the ul for performance
    let taxiList = document.querySelector('#taxis');
    for (let t of taxis) {
        // each t is an array with two elements
        // index 0 is the lng
        // index 1 is the lat
        taxiList.innerHTML += `
        <li>${t[0]}, ${t[1]}</li>
        `
    }
})