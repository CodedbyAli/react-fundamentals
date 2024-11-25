import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Contact Us Page Test Cases', () => {
    it('Should load contact component', () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it('Should load button inside contact component', () => {
        render(<Contact />)
    
        const button = screen.getByText("Submit");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    it('Should load input box inside contact component', () => {
        render(<Contact />)
    
        const input = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(input).toBeInTheDocument();
    });
    
    it('Should load 2 input boxes inside contact component', () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole('textbox');
    
        expect(inputBoxes.length).toBe(2);
    });
})


// test('Should load contact component', () => {
//     render(<Contact />)

//     const heading = screen.getByRole("heading");

//     // Assertion
//     expect(heading).toBeInTheDocument();
// });

// test('Should load button inside contact component', () => {
//     render(<Contact />)

//     const button = screen.getByText("Submit");

//     // Assertion
//     expect(button).toBeInTheDocument();
// });

// test('Should load input box inside contact component', () => {
//     render(<Contact />)

//     const input = screen.getByPlaceholderText("name");

//     // Assertion
//     expect(input).toBeInTheDocument();
// });

// test('Should load 2 input boxes inside contact component', () => {
//     render(<Contact />);

//     const inputBoxes = screen.getAllByRole('textbox');

//     expect(inputBoxes.length).toBe(2);
// });
