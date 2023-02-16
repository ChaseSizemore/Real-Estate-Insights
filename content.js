// chrome.runtime.getURL(
//   path: string,
// )

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     console.log(url)
//     // use `url` here inside the callback because it's asynchronous!
// });


// {/* <div jstcache="364" class="mLuXec" jsan="7.mLuXec">40.82227, -73.94197</div>
// let coords = document.querySelector('[jstcache="364"] .mLuXec [jsan="7.mLuXec"]');
// console.log(coords) */}

// document.addEventListener('click', async  ()=>{
//     await navigator.clipboard.write()

// })

// let regex = new RegExp('/d/d/.d/d/d/d/d/, /d/d/.d/d/d/d/d/')

// document.addEventListener('click', ()=>{
//     let coords = document.querySelector('[data-index=0]') 
//     console.log(coords);
 
// });

// function onmousemove(e){
//     console.log("mouse location:", e.clientX, e.clientY)
// }

// document.addEventListener('click', function onmousemove(e){
//     console.log("mouse location:", e.clientX, e.clientY)
// });


// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('test');

// });


// let clipboard = '';
// chrome.clipboard.onClipboardDataChanged.addListener(
//     function() {
//         chrome.clipboard.readText(function(text) {
//             clipboard = text;
//             console.log(clipboard);
//         });
//     }
// );

// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (console.log(clipText))
//   );


console.log('test');