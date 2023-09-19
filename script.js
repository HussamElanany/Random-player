function test(param) {
    console.log(param);
}

const inputName = document.querySelector('#player-name')
const gradeSelection = document.querySelector('#grades')
const playersDataContainer = document.querySelector('.players-data')
const namesEl = document.querySelector('.names')
const gradeEl = document.querySelector('.grade')


console.log(inputName, gradeSelection);
const grade3 = JSON.parse(localStorage.getItem('playerGrade3')) || [{
    name: '',
    grade: ''
}]


function showData() {
    let playerDataHtml = ''
    grade3.forEach((dataObject, index) => {

        const { name, grade } = dataObject
        let html = `
        <div class='flex-container'>
                <div class='the-tracker-num'> ${name} </div> 
                <div class='the-tracker-date'> ${grade} </div>  
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
function pushData() {
    const name = inputName.value;
    const grade = gradeSelection.value
    grade3.push({
        name,
        grade
    })
    showData()
}