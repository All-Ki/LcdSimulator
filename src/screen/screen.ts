import { E_FORBIDDEN_CHARACTER, get_character } from "../character/character";


export const E_CONTENT_TOO_LARGE = "Content too large";

/**
 * The `Screen` class represents a text display screen with three lines. It allows for manipulation
 * of content to be displayed and provides methods to reset, set, push, and print text content.
 */
export default class LcdScreen {
	/** The complete content to be displayed on the screen. */
	content: string = "";

	first_line: string = "";
	second_line: string = "";
	third_line: string = "";
	public get displayed_text(): string {
		return `${this.first_line}\n${this.second_line}\n${this.third_line}`;
	}
	max_size: number;
	/**
	 * Creates a new Screen instance with optional initial content.
	 * @param max_size - The maximum number of characters that can be displayed on the screen.
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
	  if(content.length > this.max_size) {
	    throw E_CONTENT_TOO_LARGE;
	  }
	  this.reset();
	  this.push_content(content);
	}

	/**
	 * Appends the specified content to the screen.
	 *
	 * @param content - The content to be added to the screen.
	 */
	push_content(content: string) {
	  if (content.length + this.content.length > this.max_size) {
		  throw E_CONTENT_TOO_LARGE;
	  }
	  const chars = content.split('');
	  chars.forEach(char => {
		const character = get_character(char);
		if (!character) {
		  throw E_FORBIDDEN_CHARACTER;
		}
		this.content += character.key;
		this.first_line += character.top_segment;
		this.second_line += character.middle_segment;
		this.third_line += character.bottom_segment;
	  });
	}
  }
