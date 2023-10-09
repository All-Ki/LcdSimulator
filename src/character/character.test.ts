import {  E_BAD_SEGMENTS, E_INVALID_KEY, set_character } from "./character";

describe("character specification", () => {
	test("Should not accept characters longer than 1 character", () => {
		expect(() => set_character("aa", "   ", "   ", "   ")).toThrow(E_INVALID_KEY);
	})
	test("Should not accept characters shorter than 1 character", () => {
		expect(() => set_character("", "   ", "   ", "   ")).toThrow(E_INVALID_KEY);
	})
	
	test("should accept when keys wiht one character", () => {
		expect(() => set_character("a", "   ", "   ", "   ")).not.toThrow();
		
		
	})
	test("Should error when characters are other than spaces, hyphens and underscores", () => {
		expect(() => set_character("a", "x  ", "   ", "   "))
		.toThrow(E_BAD_SEGMENTS);
	})
	test("should accept when characters are spaces, hyphens and underscores", () => {
		expect(() => set_character("a", "   " ,"  |", " __")).not.toThrow();
	
	})
})
