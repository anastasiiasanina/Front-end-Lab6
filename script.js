const load = document.getElementById('download');
const state = document.getElementById('status');
const info = document.querySelector('.info');
const blockAmount = 5;

const loadInfo = async () => {
  let infoBlock = ``;

  for(let i = 0; i < blockAmount; i++) {
    let response = await fetch("https://randomuser.me/api").then(res => res.json()).catch(err => alert(err));
    let picture = response.results[0].picture.large;
    let gender = response.results[0].gender;
    let name = response.results[0].name.first + " " + response.results[0].name.last;
    let city = response.results[0].location.city;
    let postcode = response.results[0].location.postcode;
    let phoneNumber = response.results[0].phone;

    infoBlock += `
      <div class = "info-block">
        <img src=${picture}>
        <p>Name: ${name}</p>
        <p>Gender: ${gender}</p>
        <p>City: ${city}</p>
        <p>Postcode: ${postcode}</p>
        <p>Phone number: ${phoneNumber}</p>
      </div>
    `;
  }

  state.style.display = "block";
  info.innerHTML = infoBlock;
}

load.addEventListener('click', loadInfo);
