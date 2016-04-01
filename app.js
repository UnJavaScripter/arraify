"use strict";

let arraify = () => {
    const input = document.querySelector('#input');
    let output = document.querySelector('#output');
    let inputArr = input.value.split("\n");

    let addQuotes = (line, index, array) => {
        // Get the indentation spaces of the line to add them later back again
        const indentSpaces = line.match(/^(\s|\t)+/g) || '';

        // now we get rid of the spaces
        let aLine = line.trim();

        if(index !== 0 && index !== array.length -1 ){
            // An internal/"regular" line...
            return `\n${indentSpaces}'${aLine}'`;
        }else{
            // And the initial and last lines
            return index === 0 ? `[\n${indentSpaces}'${aLine}'` : `\n'${aLine}'\n].join('');`;
        }
    };
    
    output.value  = inputArr.filter((elem) =>  elem.trim().length > 0 ).map(addQuotes);

    output.select();
}


// Button click listener
document.querySelector('#go').addEventListener('click', (e) => arraify());