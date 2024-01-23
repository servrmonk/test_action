import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Greeting_Component", () => {

  test("renders hello world ad a text", () => {
    // 3 thing when we write the code using 3 A's
    // Arrange  -> set up the test data, test conditions and test environment
    // Act -> Run logic that should be tested (ex executble funcion means data)
    // Assert : Assert the output compare executions result with expected results

    // Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorld = screen.getByText("Hello World ");

    // check weather element exist
    expect(helloWorld).toBeInTheDocument(); //testing result value
  });

  test('renders good to see you if the button was NOT clicked',()=>{
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you',{
        exact:false
    });
    expect(outputElement).toBeInTheDocument();
  })
  test('render changed if the button was clicked',()=>{
    // Arrange
    render(<Greeting />)
    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.getByText('changed',{exact:false})
    expect(outputElement).toBeInTheDocument();
    
  })
test('does not render "good to see you" if the button was clicked',()=>{
    render(<Greeting />)
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    //assert
    const outputElement = screen.queryByText('good to see you',{exact:false});
    expect(outputElement).toBeNull()
})

}); //globaly available
