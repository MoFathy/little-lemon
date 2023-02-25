import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import {updateTimes} from './pages/Reservation'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


describe('updateTimes function test', () => {
  test('should return an array', () => {
    // Call the function and store the result
    const state = ["17:00","18:00"];
    const result = updateTimes(state,{ type: 'dateChange',payload:  "saturday"});

    // Use the Array.isArray method to check if the result is an array
    expect(Array.isArray(result)).toBe(true);
    result.forEach(item => {
        expect(typeof item).toBe('string');
      });
      expect(result).toBe(state);
  });
});