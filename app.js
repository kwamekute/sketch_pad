const pad = document.querySelector('#innerPad');
console.log(pad.clientHeight);
console.log(pad.clientWidth);

const cellheight = ((pad.clientHeight / 16)) + "px;";
console.log(cellheight)

const cellWidth = ((pad.clientWidth / 16)) + "px;";
console.log(cellWidth)



for (i = 0; i < 16; i++) {
    const grid = document.createElement("div");

    grid.setAttribute('class', 'padGrid');
    grid.setAttribute('style', `background: rgb(216, 215, 216); 
                                width:100%;
                                border: 0.1px 0.1px 0px 0.1px solid;
                                height:${cellheight};
                                display:flex;
                            flex-direction: row;
                                `)
    pad.appendChild(grid)

    for (j = 0; j < 16; j++) {
        const gridCell = document.createElement("div");

        gridCell.setAttribute('class', 'padGridCell');
        gridCell.setAttribute('style', `background:rgb(216, 215, 216); 
                                    border: 0.1px solid rgb(112, 112, 112);
                                    width:${cellWidth};
                                    height: 100%
                                    display:flex;
                                    justify-content: space-between;
                                    `)
        grid.appendChild(gridCell);
    }
}


