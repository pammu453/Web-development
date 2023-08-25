//by default it  is GET request
let p=fetch("https://api.openweathermap.org/data/2.5/forecast?q=Belagavi&unit=metric&appid=f4722ddcdb58b1a1a4481d984f8d300b")
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);  //response header
    return response.json();
})

.then((data) => {
    console.log(data)
});


// to set request header in fetch,we can use the header option

// let res=fetch(url,{
//     headers:{
//         authentication:"myauth"
//     }
// })


// async getData() {
//     try {
//         let response = await fetch('https://example.com/api');
//         let responseJson = await response.json();
//         console.log(responseJson);
//     } catch(error) {
//         console.error(error);
//     }
// }
