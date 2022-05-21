# Shopify Frontend Developer Intern Challenge

## The Challenge

You will write an app that sends plain text prompts to the OpenAI API and displays the results in a list.

### Requirements

We'd like your app to have a simple-to-use interface that includes the following:
- A form for entering text prompts
- Submitting the form sends the prompt to the OpenAI API
- Results are displayed in a list, sorted from newest to oldest. Each result should include the original prompt and a response from the API.

### Extras

- Save responses if the user leaves or reloads the page
- Let the user choose the AI engine from a select box
- Add some presets for the user to quickly send a good prompt
- Make the app more specific to a single purpose. See the OpenAI Examples and prompt design docs for inspiration.

## The App

The end product is a React App using hooks. The user is displayed with a responsive web app that provides 3 default prompts that when clicked will fill the input automatically ready to be sent to the API. If the user chooses they can as well type their own prompt and send that to the API. Either way a validation of a minumum of 3 characters is applied to any input. When the user selects a default prompt another option is loaded in it's spot to allow for fresh choices. 

For styling a responsive layout has been applied to make the app usable at any dimension. The addition of icons from the React Icons library allows for a little more context to the app. A neutral color palette was chosen using [coolors website](https://coolors.co).

For a bit more usability localstorage was activated to store the users sent requests so on page refresh you will see your previous responses. As well a delete functionality was added to each response in order to delete any responses the user no longer wishes to see. 

Overall this was a fun project and I look forward to many more challenges like this.

### Tech Stack

- Axios
- Sass
- UUID
- OpenAI
- LocalStorage
- Hooks
- React Icons
- Jest

## Installation and Deployment

In order to use this app you will need to clone or download a copy. Navigate to the projects folder and open in your favourite editor, or open a terminal/command line and ``cd`` to the working directory. Run ``npm install`` in order to install all required modules. 

You will then need to sign up for an openAI api key at [openai](https://beta.openai.com/signup). Once you have your key open the ``.env.example`` file and place your key there. Rename the file to ``.env``.

You can then run ``npm start`` to start the application.

You can view the demo [here](https://).