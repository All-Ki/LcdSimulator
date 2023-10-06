import {  E_BAD_SEGMENTS, E_INVALID_KEY, set_character } from "./character";

describe("character specification", () => {
	test("Should not accept characters longer than 1 character", () => {
		expect(() => set_character("aa", "   ", "   ", "   ")).toThrow(E_INVALID_KEY);
	})

	test("Should only allow spaces, hyphens and underscores", () => {
		expect(() => set_character("a", "x  ", "   ", "   "))
		.toThrow(E_BAD_SEGMENTS);
	})
})
