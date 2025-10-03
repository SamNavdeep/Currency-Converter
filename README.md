CURRENCY CONVERTER:
It is a web-based application I developed that provides real-time currency conversions using up-to-date exchange rates.
It features an intuitive interface where users can select two currencies and instantly see the converted value.

PROJECT STRUCTURE:
The application consists of the following files:
currencyExchanger.html	        The main HTML file containing the structure of the converter, including input fields, dropdown menus, and the conversion button.
style.css	                      The CSS file responsible for the visual styling and layout of the application.
calculation.js	                The core JavaScript file that handles all the logic: fetching exchange rates, performing calculations, updating flags, and handling user input.
countryCurrencyCode.js         	A file that is assumed to contain the countryList object, which maps currency codes (e.g., USD, INR) to their corresponding country codes (e.g., US, IN) for flag display.

RUNNING LOCALLY:
   Ensure all the provided files (currencyExchanger.html, style.css, calculation.js and countryCurrencyCode.js) are saved in the same directory on your computer.
   Right-click the currencyExchanger.html file. and open it in the browser.

This application relies on external APIs for its core functionality:
API CALLS:
   1.Exchange Rate API: open-source currency API from @fawazahmed0/currency-api to fetch real-time exchange rates.
   Base URL: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.
   
   2.Flag API: I use the Flags API to fetch and display country flags next to the currency selection dropdowns.
   Base URL: https://flagsapi.com/

CALCULATION:
The conversion logic in get_final_result performs an asynchronous fetch to the exchange rate API, retrieves the rate, and calculates the output value as:
Output Value=Input Value×Exchange Rate


<img width="1839" height="875" alt="image" src="https://github.com/user-attachments/assets/c34ec1f9-671f-46e8-8273-74c0e935ad59" />






