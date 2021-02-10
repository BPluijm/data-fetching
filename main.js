// TESTEN OF AXIOS HET DOET
// console.log(axios.get)

// ASYNC FUNCTIE MAKEN
async function displayPrizes(){
    // console.log('Hi');

    // REQUEST MAKEN MET AXIOS  --> AWAIT  = afwachten tot data er is
    const response = await axios.get("https://ignoble-api.herokuapp.com/prizes?year=2020");
    // console.log("RES", response.data.prizes);

    // LIJST SELECTEREN
    const prizeList = document.getElementById("prize-list");
    // console.log(prizeList);

    // LOOP OVER PRIZES
    for (const prize of response.data.prizes) {
        // console.log("PRIZE:", prize);

    // LI AANMAKEN
        const listItem = document.createElement('li')

    // TEXTCONTENT TOEVOEGEN
        listItem.textContent = `${prize.year} - ${prize.type}: ${prize.description}`;
        // console.log("LISTITEM", listItem);

    // LI APPENDEN
        prizeList.appendChild(listItem);
    }
}

displayPrizes();