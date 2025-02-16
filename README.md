# Currency Converter

Currency Converter is a simple web application that allows users to convert an amount from one currency to another using real-time exchange rates provided by the Frankfurter API. It features an elegant UI with an animated gradient background and interactive conversion and swap functionalities.

## Features
- **Real-time Conversion**: Fetches current exchange rates to convert currencies accurately.
- **Swap Functionality**: Easily swap the "From" and "To" currencies.
- **Responsive Design**: Works seamlessly on various screen sizes.
- **Keyboard Shortcuts**:
  - Press **Enter** to trigger conversion.
  - Press the **`** key (backtick) to swap currencies.

## Usage
1. **Enter Amount**: Input the amount you wish to convert.
2. **Select Currencies**: Choose the source currency (From) and the target currency (To) from the dropdowns.
3. **Convert**: Click the **Convert** button or press **Enter**. The conversion result will be displayed.
4. **Swap Currencies**: Click the **Swap** button or press the **`** key to interchange currencies and update the result.

## Technologies Used
- **HTML5** for the page structure.
- **CSS3** for styling, including an animated gradient background and transition effects.
- **JavaScript** (with async/await & Fetch API) for handling conversions and user interactions.
- **Frankfurter API** for retrieving exchange rates.

## How It Works
- The user inputs the conversion amount and selects the currencies.
- When the **Convert** button is clicked (or **Enter** is pressed), the app sends a request to the Frankfurter API to fetch the latest exchange rate based on the selected currencies.
- The conversion is computed and displayed on the screen.
- The **Swap** button or **`** key interchanges the selected currencies and re-calculates the conversion.
