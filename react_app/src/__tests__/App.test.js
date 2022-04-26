import {render, screen, fireEvent} from '@testing-library/react'

import App from '../App';

test('loading home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("testing search functionality", () => {
  const handleClick = jest.fn()

  render(<App/>)
  const inputSearch = screen.getByPlaceholderText('Search');
  fireEvent.change(inputSearch, { target: { value: 'test' } })

  fireEvent.click(screen.getByRole('button'));
  // expect(handleClick).toHaveBeenCalledTimes(1)

  // render(<App/>);

  // const inputSearch = screen.getByTestId("inputSearch");
  // inputSearch.simulate(()=> "")

});

test("testing enter functionality", () => {
  const handleClick = jest.fn()

  render(<App/>)
  const inputSearch = screen.getByPlaceholderText('Search');
  fireEvent.change(inputSearch, { target: { value: 'test' } })

  fireEvent.keyPress(inputSearch, { key: "Enter", code: 13, charCode: 13 })
});
