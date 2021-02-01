const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/';

// The business card element
const card  = document.querySelector("section.card");


// GET request
const teams = fetch(`${url}/squads/2/teams/6/members/13`)
                .then(response => response.json())
                .then(data => {
                    console.log('fetch', data);
                    return data;
                });

// Function used to create the business card               
async function makeCard() {
    
    // Await the data fetch
    const data = await teams;

    // Create a container for the images
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile");
    card.appendChild(profileContainer);

    // Profile image (mugshot). Create <img> append to profileContainer
    const profileIMG = document.createElement("img");
    profileIMG.src = data.mugshot;
    profileContainer.appendChild(profileIMG);

    // Link to GitHub repo. Create <a>.
    const gitLink = document.createElement("a");
    gitLink.href = data.githubHandle;

    // GitHub image. Create <img> append to GitHub link
    const gitIMG = document.createElement("img");
    gitIMG.src = 'github.svg';
    gitLink.appendChild(gitIMG);

    // Append github link and github image to profileContainer
    profileContainer.appendChild(gitLink);

    // Create container for personal info.
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");
    card.appendChild(infoContainer);

    // Name. Create <h1>, set content to name, append to infoContainer
    const nameH1 = document.createElement("h1");
    nameH1.textContent = `${data.name} ${data.surname}`;
    infoContainer.appendChild(nameH1);

    // Function (student). Create <h2>, set content to "student", append to infoContainer.
    const functionH2 = document.createElement("h2");
    functionH2.textContent = "student";
    infoContainer.appendChild(functionH2);

    const otherUL = document.createElement("ul");

    // Create list items for all elements inside "other"    
    for (const element in data.other) {
        const itemLI = document.createElement("li");
        itemLI.innerHTML = `<strong>${element}:</strong> ${data.other[element]}`;
        otherUL.appendChild(itemLI);
    }
    infoContainer.appendChild(otherUL);
}

makeCard();

// // PUT request to modify data
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
