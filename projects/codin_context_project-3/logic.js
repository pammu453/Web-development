let p = fetch("https://www.kontests.net/api/v1/at_coder");

p.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  let ihtml = "";
  for (let item in data) {
    console.log(data[item]);
    ihtml += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="https://source.unsplash.com/1600x900/?beach" class="card-img-top" alt="Not found">
          <h5 class="card-title">${(data[item].name).slice(0,30)}....</h5>
          <p >Start Time :${data[item].start_time}</p>
          <p >End Time :${data[item].end_time}</p>
          <p ">In 24 hours :${data[item].in_24_hours}</p>
          <a href="${data[item].url}" class="btn btn-primary">Visit</a>
        </div>
      </div>`;
  }
 
  cardContainer.innerHTML = ihtml;
});



// 