const pad = document.querySelector('#innerPad');
const smallBtn = document.querySelector('#smallBtn');
const medBtn = document.querySelector('#medBtn');
const bgBtn = document.querySelector('#bgBtn');
const gridCell1 = document.querySelector('.padGridCell');
const rain = document.querySelector('#rain');
let color = "black";

const cellheight = ((pad.clientHeight / 16)) + "px;";


const cellWidth = ((pad.clientWidth / 16)) + "px;";

function render(resolution) {
    for (i = 0; i < resolution; i++) {
        const grid = document.createElement("div");

        grid.setAttribute('class', 'padGrid');
        grid.setAttribute('style', `background: rgb(216, 215, 216);
                                    width:100%;
                                    border: 0.03px 0.03px 0px 0.03px solid;
                                    height:${cellheight};
                                    display:flex;
                                flex-direction: row;
                                    `)
        pad.appendChild(grid)

        for (j = 0; j < resolution; j++) {
            const gridCell = document.createElement("div");

            gridCell.setAttribute('class', 'padGridCell');
            gridCell.setAttribute('style', `background:rgb(216, 215, 216);
                                        border: 0.03px solid rgb(112, 112, 112);
                                        width:${cellWidth};
                                        height: 100%
                                        display:flex;
                                        justify-content: space-between;
                                        `)
            grid.appendChild(gridCell);


            gridCell.addEventListener('mouseover', () => {
                gridCell.style.backgroundColor = color;
            });

            rain.addEventListener('click', () => {
                gridCell.addEventListener('mouseover', () => {
                    gridCell.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);;
                });

            })

        }


    }


}

render(16);


smallBtn.addEventListener('click', () => {
    pad.innerHTML = "";
    render(16);
    smallBtn.style.backgroundColor = 'rgb(255, 237, 102)';
});

medBtn.addEventListener('click', () => {
    pad.innerHTML = "";
    render(28);
    medBtn.style.backgroundColor = 'rgb(255, 237, 102)';
});

bgBtn.addEventListener('click', () => {
    pad.innerHTML = "";
    render(36);
    bgBtn.style.backgroundColor = 'rgb(255, 237, 102)';
});



