import React from 'react'

const BookingForm = () => {
  return (
    <div>BookingForm</div>
  )
}

export default BookingForm

{/* <form style="display: grid; max-width: 200px; gap: 20px">
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date">
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests">
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation">
</form> */}



// Instructions
// Step 1: Life state up to the Main component
// As you added the table booking state to the BookingForm component in the previous exercise, in this exercise, you need to lift the state up to the Main component. This is the preferred approach in this case, as your app is relatively simple.

// Move the availableTimes useState hook from the BookingForm component into the Main component

// Pass down the state and state changing functions from the Main component to the BookingForm component using props in order to make state work across different components.

// Step 2: Update BookingForm to display available times based on the selected date
// The next step is to prepare the available times to be updated based on the date the user has selected. To do this, you will change the availableTimes state to a reducer.

// In the Main component, create a function named updateTimes which will handle the state change. This function will change the availableTimes based on the selected date. For now, the function can return the same available times regardless of the date.

// Next, create a function called initializeTimes which will create the initial state for the availableTimes.

// Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.

// Update the BookingForm component to dispatch the state change when the date form field is changed.

// Tip: Include the newly selected date in the dispatch parameter.



// Instructions
// Step 1: Test for some static text being rendered in the BookingForm component
// Using your mockups, pick a part of the BookingForm component that has some static text, such as a heading or label.

// In preparation for coding a test of this static test, review the following starting code for a test, based on an example in the 
// Writing the first test for your form
//  lesson referenced earlier:

// 12345678
// import { render, screen } from "@testing-library/react";
// import BookingForm from './BookingForm';

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// })
// Keeping in mind the above example, code a test for the static text being rendered in the BookingForm component, using code like this:

// 1
// screen.getByText("BookingForm");
// Note: You will need to adjust the code based on what you've decided your Bookings component should render.

// Step 2: Test the updateTimes and initializeTimes functions
// The next step is to validate the behavior of the updateTimes and initializeTimes reducer functions.

// Write a unit test for the initializeTimes function to validate that it returns the correct expected value.

// Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state. This unit test is important as it will be updated later when the logic of changing the available times based on the selected date is implemented.


// Instructions
// Step 1: Set up the API library
// To prepare for the completion of this exercise, you need to include the API JavaScript file in your code.

// Add the following code to your index.html.

// 1
// <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
// The API has two functions that you can use in your code: 

// fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date 

// submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.

// Step 2: Update the booking form to display the available times from the API
// Update the initializeTimes function that you previously created to use the fetchData API function to return the available times for today’s date. 

// Tip: You can create a Date object to represent today’s date.

// Update the updateTimes function that you previously created to use the fetchData API function. Remember, you dispatched the selected date to the updateTimes function. This should be passed to the fetchData function as a parameter.

// Step 3: Test the behavior

// Run your web app and check that the available times on the booking form change when you select a different date.


// Instructions
// Step 1: Set up a booking confirmation page
// Create a component named ConfirmedBooking that will represent the booking confirmation page.

// Add JSX to display a message that the booking has been confirmed.

// Add a route that will allow navigation to the booking confirmation page.

// Step 2: Set up the function for submitting the form
// In the Main component, set up a function named submitForm that accepts the form data as a parameter and will submit it to the submitAPI (formData) API set up in the previous exercise. 

// If the submitAPI(formData) API call returns true, navigate to the booking confirmed page.

// Tip: You can use the 
// useNavigate() hook
//  to navigate via code.

// Step 2: Update the submit event handler
// Pass the submitForm function to the BookingForm component via props.

// Update the button submit event handler to call the submitForm function, passing the form data as a parameter.

// Step 3: Test the app
// Run the app and verify that the booking confirmation page is displayed when you submit the form. 


// Step 1: Implement HTML5 validation
// For each form input field, consider what HTML5 validation can be applied. For example, the user should not be able to reserve a table for less than one person.

// Apply the validation to each form input field in BookingForm.

// Step 2: Implement client-side validation using React
// After applying the HTML5 validation, consider which input fields could use further validation via JavaScript and React. For example, the submit button should be disabled if the form input fields are invalid.

// Tip: Use events to detect field changes and submit button clicks.

// Tip: If you built your form using Formik, take advantage of Formik’s built-in validation functions.

// Step 3: Run the web app
// Run the web app and verify that the form validation behaves as expected. When all of the fields are valid, it should be possible to submit the form.

// Instructions
// Step 1: Validate the HTML5 validation is applied
// In a previous exercise, you implemented unit tests to test that the HTML content returned from a component was correct.

// Review the previous exercise and the HTML validation you added to the form input fields. 

// For each input field, add a unit test to validate that the correct attributes are applied to the HTML element.

// Step 2: Add unit tests for JavaScript validation functions

// In the previous exercise, you implemented JavaScript functions to validate the form input fields.

// Using the React testing library, implement unit tests to verify both the valid and invalid states for these functions.

// It is important to add a unit test for both valid and invalid states to ensure good test coverage of your code. Without this, there is a risk of a bug existing in a code path that is not tested.

// Step 3: Run the tests

// Run all tests in your web app and verify that they are all successful.

