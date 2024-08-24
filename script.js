const getDifferentColor = () => {
    const letters ="0123456789ABCDEF";
    let color ='#';
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Create the first grid
const container = document.getElementById('container');
for(let i = 0; i < 16 * 16; i++){
    const div = document.createElement('div');
    div.classList.add('chart');
    div.style.width = `calc(800px / 16)`;
    div.style.height = `calc(700px / 16)`;
    div.addEventListener('mouseover', () => { 
        div.style.background = getDifferentColor();
    })
    container.appendChild(div);
}
//Add event to button, validation of number entered 
document.getElementById('button').addEventListener('click', () => {
    let number = parseInt(document.getElementById('number-entered').value);
    if (isNaN(number) || number <= 0 || number > 100 ){
        alert("Please, enter a valid number from 1 to 100");
        return;
    }
    const container = document.getElementById('container');
    container.textContent= '';
    const cellWidth = 800 / number;
    const cellHeight = 700 /number;

//Generates the grid based on the number entered by the user.
    for (let j = 0; j < number * number; j++) {
        const div = document.createElement('div');
        div.classList.add('chart');
        div.style.width = `${cellWidth}px`;
        div.style.height = `${cellHeight}px`;

        div.addEventListener('mouseover', () => {
            div.style.background = getDifferentColor();
        });
        container.appendChild(div);
    }
});


