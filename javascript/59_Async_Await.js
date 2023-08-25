async function harry(){
    let delhiWeather=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("21 deg")
        }, 4000);
    })

    let punaWeather=new Promise((resolve)=>{
        setTimeout(() => {
            resolve("21 deg")
        }, 7000);
    })


    console.log("Waaiting for delhi weather")
    let dweather= await delhiWeather;
    console.log("delhi weather fetched")

    console.log("Waaiting for puna weather")
    let pweather= await punaWeather;
    console.log("puna weather fetched")

    return [dweather,pweather];
}

let h=harry();   //async function always returns promise;

h.then((value)=>{
    console.log(value)
})