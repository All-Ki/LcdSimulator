import LcdScreen from "./screen/screen";

// check the available space

const columns: number = process.stdout.columns;
const max_chars = Math.floor(columns / 3);
const screen = new LcdScreen(max_chars);

var args = process.argv[2];
//check if args is a number
if(!args || isNaN(Number(args))){
	throw "Please provide a valid number to be printed. Usage : npm start -- <number>";
}



//everythiing is okay, print
screen.set_content(args);
console.log(screen.displayed_text);