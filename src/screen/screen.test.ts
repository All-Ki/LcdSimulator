import LcdScreen from "./screen";

describe("screen specification", ()=>{
	test("should display characters properly", ()=>{
		const screen = new LcdScreen();
		screen.set_content("9876543210");
		const expected = 
" _  _  _  _  _     _  _     _ \n"+
"|_||_|  ||_ |_ |_| _| _|  || |\n"+
" _||_|  ||_| _|  | _||_   ||_|"

		expect(screen.displayed_text).toBe(expected);
	})

})