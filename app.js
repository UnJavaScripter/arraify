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

        let indentation = `\n${indentSpaces}`;
        let lineText = `'${aLine}'`;
        let arrayClosing = `\n].join('');`;

        // An array with a single line
        if(array.length === 1){
            return '[' + indentation + lineText + arrayClosing;
        }else{
            // Array's first line
            if(index === 0){
                return '[' + indentation + lineText;

            // Array's regular line
            }else if(index !== array.length -1){
              return indentation + lineText;  

            // Array's last line
            }else{
                return indentation + lineText + arrayClosing;
            }
        }

        
    };
    
    output.value  = inputArr.filter((elem) =>  elem.trim().length > 0 ).map(addQuotes);

    output.select();
}


// Button click listener
document.querySelector('#go').addEventListener('click', (e) => arraify());