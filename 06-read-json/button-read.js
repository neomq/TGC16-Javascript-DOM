
let btn = document.querySelector('#loadBtn');
btn.addEventListener('click', async function(){

    /* OLD METHOD */
    // the first parameter is the relative URL of the file
    // instruct javascript to fetch data.json
    // axios.get('data.json').then(function(response){
    //     console.log("data has been fetched finished");
    //     let movie = response.data;
    //     document.querySelector('#title').innerHTML = movie.title;
    //     document.querySelector('#year_released').innerHTML = movie.year_released;
    // })

    // AWAIT/ASYNC
    // if we put await in front of an async function
    // JavaScript will wait for it to return before
    // moving to the next line
    let response = await axios.get('data.json');
    let movie = response.data;
    document.querySelector('#title').innerHTML = movie.title;
    document.querySelector('#year_released').innerHTML = movie.year_released;

})
