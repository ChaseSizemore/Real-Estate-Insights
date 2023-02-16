// BUTTON
let input = document.querySelector('#userInput').value
let button = document.querySelector('button')

button.addEventListener('click', ()=>{
    console.log('buttoned')
    // request()
})


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68472990admsh21660c6e0a592c0p1a1890jsn9766bb4a8a13',
		'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
	}
};

// fetch('https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=27514&offset=0&limit=42', options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log

//     })
// 	.catch(err => console.error(err));

    const request = async () => {
        const response = await fetch('https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=10027&offset=0&limit=42', options);
        const json = await response.json();
        let medPrice = json.data.geo.geo_statistics.housing_market.median_listing_price;
        let medRent = json.data.geo.geo_statistics.housing_market.median_rent_price;







        //   let price = document.createElement('div')
        //   price.setAttribute('id', 'price');
          document.querySelector('#med-sale').innerHTML =  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
            Math.trunc(medPrice));
        document.querySelector('#med-rent').innerHTML = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
            Math.trunc(medRent));
        //   document.querySelector('body').appendChild(price)


    }
    // GET ZIP
    const zipCodeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68472990admsh21660c6e0a592c0p1a1890jsn9766bb4a8a13',
            'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
    };

    const zip = new RegExp('[0-9]{5}')
    
    fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&result_type=postal_code&language=en', options)
    	.then(response => response.json())
    	.then(response => {
            let zipCode = response.results[0]["formatted_address"].match(zip)[0];
            
        })

    request()