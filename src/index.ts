import Screen from "./screen/screen";

const screen = new Screen();

var args = process.argv[2];

if(!args){
	throw "No argument provided";
}

//check if args is a number
if(isNaN(Number(args))){
	throw "Argument should be a number";
}

// check the available space
const columns: number = process.stdout.columns;
const max_chars = Math.floor(columns / 3);

if(args.length > max_chars){
	console.warn(`You can only print up to ${max_chars} characters on this screen, skipping ${args.length - max_chars} characters`);
	args = args.substring(0, max_chars);
}

//everythiing is okay, print
screen.set_content(args);
screen.print();