import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/App.css';



jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});