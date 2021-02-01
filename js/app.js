const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/';
const card  = document.querySelector("section.card");


// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/6/members/13`)
                .then(response => response.json())
                .then(data => {
                    console.log('fetch', data);
                    return data;
                });

async function makeCard() {
    const data = await teams;

    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile");
    card.appendChild(profileContainer);

    const profileIMG = document.createElement("img");
    profileIMG.src = data.mugshot;
    profileContainer.appendChild(profileIMG);

    const gitLink = document.createElement("a");
    gitLink.href = data.githubHandle;

    const gitIMG = document.createElement("img");
    gitIMG.src = 'github.svg';
    gitLink.appendChild(gitIMG);

    profileContainer.appendChild(gitLink);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");
    card.appendChild(infoContainer);

    const nameH1 = document.createElement("h1");
    nameH1.textContent = `${data.name} ${data.surname}`;
    infoContainer.appendChild(nameH1);

    const functionH2 = document.createElement("h2");
    functionH2.textContent = "student";
    infoContainer.appendChild(functionH2);

    const otherUL = document.createElement("ul");

    for (const element in data.other) {
        const itemLI = document.createElement("li");
        itemLI.innerHTML = `<strong>${element}:</strong> ${data.other[element]}`;
        otherUL.appendChild(itemLI);
    }
    infoContainer.appendChild(otherUL);
}

makeCard();
// // PUT REQUEST
// const putData = {
//     githubHandle:"https://github.com/lars-ruijs"
// }

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }
  
// postData(`${url}/squads/2/teams/6/members/13`, putData)
//     .then(data => {
//         console.log('put', data);
//     });
