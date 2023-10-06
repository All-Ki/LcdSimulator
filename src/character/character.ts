

export class Character {
	constructor(public key : string , public first_line : string, public second_line : string, public third_line : string) {
		if(key.length !== 1){
			throw "key should be 1 character long";
		}
		if(first_line.length !== 3){
			throw "first_line should be 3 characters long";
		}
		if(second_line.length !== 3){
			throw "second_line should be 3 characters long";
		}
		if(third_line.length !== 3){
			throw "third_line should be 3 characters long";
		}

	}
}



const characters = new Map<string, Character>();

export function set_character (key : string, first_line : string, second_line : string, third_line : string) {
	characters.set(key, new Character(key, first_line, second_line, third_line));
}
export function get_character(key : string) {
	if(!characters.has(key)){
		throw "ERROR : Character not registered";
	}
	return characters.get(key);
}

set_character("0", 	" _ ",
					"| |",
					"|_|"),

set_character("1", 	"   ",
					"  |",
					"  |"),

set_character("2", 	" _ ",
					" _|",
					"|_ ")

set_character("3", 	" _ ",
					" _|",
					" _|"),

set_character("4", 	"   ",
					"|_|",
					"  |"),

set_character("5", 	" _ ",
					"|_ ",
					" _|"),

set_character("6", 	" _ ",
					"|_ ",
					"|_|"),

set_character("7", 	" _ ",
					"  |",
					"  |"),

set_character("8", 	" _ ",
					"|_|",
					"|_|"),

set_character("9", 	" _ ",
					"|_|",
					" _|")

