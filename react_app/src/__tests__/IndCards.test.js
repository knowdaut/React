import { screen, render } from "@testing-library/react";
import IndCard from '../Components/IndCard';
import React from "react";
import userEvent from "@testing-library/user-event";


const daily =
{
  clouds: 80,
  dew_point: 35.22,
  dt: 1648573200,
  feels_like: { day: 65.12, night: 64.54, eve: 71.44, morn: 50.47 },
  humidity: 30,
  moon_phase: 0.91,
  moonrise: 1648549260,
  moonset: 1648589160,
  pop: 0,
  pressure: 1021,
  sunrise: 1648553335,
  sunset: 1648598124,
  temp: { day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74 },
  uvi: 6.95,
  weather: [{ id: 502, main: "Rain", description: "heavy intensity rain", icon: "10d" }],
  wind_deg: 143,
  wind_gust: 24.56,
  wind_speed: 8.05,
}

test('should render a card', () => {
  render(<IndCard daily={daily} utcConverter={jest.fn()} dayConverter={jest.fn()} />);

});

test('use state test', () => {
  render(<IndCard daily={daily} utcConverter={jest.fn()} dayConverter={jest.fn()} />);
  expect(screen.getByRole('button')).toHaveClass('closed')
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(screen.getByRole('button')).toHaveClass('open')
});


