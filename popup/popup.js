// BUTTON
// let input = document.querySelector('#userInput').value
let button = document.querySelector('button')

button.addEventListener('click', ()=>{
    // console.log('buttoned')
    if(document.querySelector('#userInput').value.length === 5){
        let input = document.querySelector('#userInput').value
        request(input);
    }
    if(document.querySelector('#userInput').value){
        let coordArr = [a,b] = document.querySelector('#userInput').value.split(', ')
        // let input = document.querySelector('#userInput').value
        // console.log(input);
        // console.log(Number(coordArr[0]))
        // request(input);
        requestZipFromCoords(Number(coordArr[0]), Number(coordArr[1]));
    }

})


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

// fetch('https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=27514&offset=0&limit=42', options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log

//     })
// 	.catch(err => console.error(err));

    // const request = async (zipcode) => {
    //     const response = await fetch('https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=10011&offset=0&limit=42', options);
    //     const json = await response.json();
    //     let medPrice = json.data.geo.geo_statistics.housing_market.median_listing_price;
    //     let medRent = json.data.geo.geo_statistics.housing_market.median_rent_price;


    //     //   let price = document.createElement('div')
    //     //   price.setAttribute('id', 'price');
    //       document.querySelector('#med-sale').innerHTML =  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    //         Math.trunc(medPrice));
    //     document.querySelector('#med-rent').innerHTML = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    //         Math.trunc(medRent));
    //     //   document.querySelector('body').appendChild(price)


    // }

    const request = async (zipcode) => {
        const response = await fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=${zipcode}&offset=0&limit=42`, options);
        const json = await response.json();
        let medPrice = json.data.geo.geo_statistics.housing_market.median_listing_price;
        let medRent = json.data.geo.geo_statistics.housing_market.median_rent_price;
        console.log(json)
        //   let price = document.createElement('div')
        //   price.setAttribute('id', 'price');
        
        document.querySelector('#sale-text').innerHTML = 'Med Price:'
          document.querySelector('#med-sale').innerHTML =  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
            Math.trunc(medPrice));

        document.querySelector('#rent-text').innerHTML = ' Med Rent:'
        document.querySelector('#med-rent').innerHTML = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
            medRent);
        //   document.querySelector('body').appendChild(price)

        if(medPrice > 1000000){
            document.querySelector('#med-sale').style.color = 'red';
            document.querySelector('.answer').innerHTML = 'No.'
        }
        if(medRent > 5000){
            document.querySelector('#med-rent').style.color = 'red';
            document.querySelector('.answer').innerHTML = 'No.'
        }


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


    const requestZipFromCoords = async (lat, lng) => {
        const response = await fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=${lat}%2C${lng}&result_type=postal_code&language=en`, zipCodeOptions);
        const json = await response.json();
        // console.log(json);
        let zipCode = json.results[0]["formatted_address"].match(zip)[0];
        // console.log(zipCode);
        request(zipCode);
    }
    
    // fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&result_type=postal_code&language=en', options)
    // 	.then(response => response.json())
    // 	.then(response => {
    //         let zipCode = response.results[0]["formatted_address"].match(zip)[0];
    //         console.log(zipCode);
    //     })

    // request()

    let currentUrl = []

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
    currentUrl.push(tabs[0].url)
     });

    
     document.querySelector('body').addEventListener('click', ()=>{
        console.log(currentUrl)
     })
