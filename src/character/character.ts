
/**
 * Internal class representing a character with specific line patterns.
 */


export const E_FORBIDDEN_CHARACTER = "Character does not exist";
export const E_BAD_SEGMENTS = "Segments should contain only spaces, hyphens, and underscores and be exactly 3 characters long";
export const E_INVALID_KEY = "Key should be 1 character long";
class Character {
    /**
     * Constructor for the Character class.
     * @param key - The unique key of the character (1 character long).
     * @param top_segment - The top segment pattern (3 characters long).
     * @param middle_segment - The middle segment pattern (3 characters long).
     * @param bottom_segment - The bottom segment pattern (3 characters long).
     * @throws Throws errors if input parameters do not meet specified criteria.
     */
    constructor(public key: string, public top_segment: string, public middle_segment: string, public bottom_segment: string) {
        // Validate the key length
        if (key.length !== 1) {
            throw E_INVALID_KEY;
        }

        // Validate segment lengths
        if (top_segment.length !== 3 || middle_segment.length !== 3 || bottom_segment.length !== 3) {
            throw E_BAD_SEGMENTS;
        }

        // Regular expression for valid line characters (spaces, hyphens, and underscores)
        const valid_line_chars_regexp = /^[ |_-]+$/;

        // Validate segment patterns using the regular expression
        if (
            !valid_line_chars_regexp.test(top_segment) ||
            !valid_line_chars_regexp.test(middle_segment) ||
            !valid_line_chars_regexp.test(bottom_segment)
        ) {
            throw E_BAD_SEGMENTS;
        }
    }
}
const characters = new Map<string, Character>();
/**
 * Sets a character with the specified key and segments.
 *
 * @param {string} key - The key of the character.
 * @param {string} top_segment - The top segment of the character.
 * @param {string} middle_segment - The middle segment of the character.
 * @param {string} bottom_segment - The bottom segment of the character.
 */
export function set_character (key : string, top_segment : string, middle_segment : string, bottom_segment : string) {
	characters.set(key, new Character(key, top_segment, middle_segment, bottom_segment));
}

/**
 * Retrieves the character associated with the given key.
 *
 * @param {string} key - The key of the character to retrieve.
 * @throws {E_FORBIDDEN_CHARACTER} If the key is not found in the characters map.
 * @return {any} The character associated with the given key.
 */
export function get_character(key : string) {
	if(!characters.has(key)){
		throw E_FORBIDDEN_CHARACTER;
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

