

// chrome.runtime.onInstalled.addListener(function() {
//     const zipCodeOptions = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '68472990admsh21660c6e0a592c0p1a1890jsn9766bb4a8a13',
//             'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
//         }
//     };
//     const housingOptions = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '68472990admsh21660c6e0a592c0p1a1890jsn9766bb4a8a13',
//             'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
//         }
//     };
    
//     const zip = new RegExp('[0-9]{5}')
//     // fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&result_type=postal_code&language=en', options)
//     // 	.then(response => response.json())
//     // 	.then(response => {
//     //         console.log(response.results[0]["formatted_address"].match(zip)[0])
    
            
//     //     })
//         // .catch(err => console.error(err));
    
    
//     console.log('test');
//     document.querySelector('button').addEventListener('click', () => {
//         // const buttonInput = document.querySelector('input').value;
//         // const input= `${buttonInput}`.replace(', ', '%2C')
//         console.log('test');
//         fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=${input}&result_type=postal_code&language=en`, zipCodeOptions)
//         .then(response => response.json())
//         .then(response => {
//             const div = document.querySelector('.final');
//          let zipCode = response.results[0]["formatted_address"].match(zip)[0];
            
//             fetch(`https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode=${zipCode}&offset=0&limit=42`, housingOptions)
//                 .then(response => response.json())
//                 .then(response => {
                    
//                 }
                    
//                     )
//                 .catch(err => console.error(err));
//         })
    
//     });
    
    
    
//     // 40.75503402540833, -73.99414400837877
// });

