const API_KEY="1891b5a6"; 
const BASE_API_URL=`https://www.omdbapi.com/`;

document.querySelector('#btnSearch')
    .addEventListener('click', async function(){
        let title = document.querySelector('#title').value;
        
        let p = {
            'apikey': API_KEY,
            's': title,
        }

        // to pass in a query string to the endpoint,
        // place it in the params property of the second arg
        let response = await axios.get(BASE_API_URL,{
            'params': p // => ?apikey=1981ab3&s=rings
        });
        
        // let response = await axios.get(`${BASE_API_URL}&t=${title}&type=movie`);
        console.log(response.data.Search);
        for (let eachMovie of response.data.Search) {
            document.querySelector('#titles')
                    .innerHTML += `<li>${eachMovie.Title} (${eachMovie.Year})</li>`
        }
    })