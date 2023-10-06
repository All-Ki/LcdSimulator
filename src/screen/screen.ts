import { get_character } from "../character";

/**
 * The `Screen` class represents a text display screen with three lines. It allows for manipulation
 * of content to be displayed and provides methods to reset, set, push, and print text content.
 */
export default class Screen {
	/** The complete content to be displayed on the screen. */
	content: string = "";

	first_line: string = "";
	second_line: string = "";
	third_line: string = "";
	max_size: number;
	/**
	 * Creates a new Screen instance with optional initial content.
	 *
	 * @param initial_content - The initial content to be displayed on the screen.
	 */
	constructor(max_size: number = 80, initial_content: string = "",) {
	  this.max_size = max_size;
	  this.set_content(initial_content);
	}

	/**
	 * Resets all the lines of text content on the screen.
	 */
	reset() {
	  this.content = "";
	  this.first_line = "";
	  this.second_line = "";
	  this.third_line = "";
	}

	/**
	 * Sets the content of the screen to the specified string.
	 *
	 * @param content - The new content to be displayed on the screen.
	 */
	set_content(content: string) {
	  this.reset();
	  this.push_content(content);
	}

	/**
	 * Appends the specified content to the screen.
	 *
	 * @param content - The content to be added to the screen.
	 */
	push_content(content: string) {
	  const chars = content.split('');
	  chars.forEach(char => {
		const character = get_character(char);
		if (!character) {
		  throw "Character not registered";
		}
		this.content += character.key;
		this.first_line += character.first_line;
		this.second_line += character.second_line;
		this.third_line += character.third_line;
	  });
	}

	/**
	 * Prints the content of the screen, displaying each line on a new line in the console.
	 */
	print() {
	  console.log(this.first_line);
	  console.log(this.second_line);
	  console.log(this.third_line);
	}
  }
