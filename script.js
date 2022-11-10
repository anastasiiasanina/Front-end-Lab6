const load = document.getElementById('download');
const info = document.querySelector('.info')
const blockAmount = 5;

const loadInfo = async () => {
  let infoBlock = ``;

  for(let i = 0; i < blockAmount; i++) {
    let response = await fetch("https://randomuser.me/api").then(res => res.json());
    let picture = response.results[0].picture.large;

    infoBlock += `
      <div class = "info-block">
        <img src=${picture}>
      </div>
    `;
  }

  info.innerHTML = infoBlock;
}

load.addEventListener('click', loadInfo);