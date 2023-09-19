function test(param) {
    console.log(param);
}

const inputName = document.querySelector('#player-name')
const gradeSelection = document.querySelector('#grades')
const playersDataContainer = document.querySelector('.players-data')
const randomPlayerContainer = document.querySelector('.random-player')
const namesEl = document.querySelector('.names')
const gradeEl = document.querySelector('.grade')


console.log(inputName, gradeSelection);
// Save the input's values
const grade3 = JSON.parse(localStorage.getItem('playerGrade3')) || [{
    name: '',
    grade: ''
}]

// Show data that we saved
function showData() {
    let playerDataHtml = ''
    grade3.forEach((dataObject, index) => {

        const { name, grade } = dataObject
        let html = `
        <div class='grid-container'>
                <div class='the-random-name'> ${name} </div> 
                <div class='the-random-grade'> ${grade} </div>  
        </div>           
                   `;
        playerDataHtml += html
        console.log(index);
        console.log(dataObject);

    });
    playersDataContainer.innerHTML = playerDataHtml;
    localStorage.setItem('playerGrade3', JSON.stringify(grade3))
}
showData()

// clear Data
function clearData() {
    inputName.value = ''
    gradeSelection.value = ''
}

// push the data into our var
function pushData() {
    const name = inputName.value;
    const grade = gradeSelection.value
    grade3.push({
        name,
        grade
    })
    clearData()
    showData()
}

// Pick a random player func
function pickRandomPlayer() {
    let randomNum = Math.floor(Math.random() * grade3.length)
    if (randomNum === 0) {
        let Randomhtml = `
        <div class='grid-container'>
                <div class='the-random-name'> ${grade3[randomNum + 1].name} </div> 
                <div class='the-random-grade'> ${grade3[randomNum + 1].grade} </div>  
        </div>           
                   `;
        console.log(randomNum);
        randomPlayerContainer.innerHTML = Randomhtml;
    } else {
        let Randomhtml = `
        <div class='grid-container'>
                <div class='the-random-name'> ${grade3[randomNum].name} </div> 
                <div class='the-random-grade'> ${grade3[randomNum].grade} </div>  
        </div>           
                   `;
        randomPlayerContainer.innerHTML = Randomhtml;
    }


}
