# Message Board Prototype

This project is a prototype of a message board with multiple channels. 
It includes a React frontend and a Node.js backend to demonstrate basic functionality.


## Features Implemented

- Render a full-page application with three panels.
- Navigation panel shows a list of channels.
- Message list panel shows a list of message bodies for the selected channel.
- Editor panel shows a text area input.
- Editor panel is hidden if there is no channel selected.
- Editor has a submit button.
- Submit button is disabled if there is no text in the message body.
- Channel in the navigation panel selects that channel.
- Entering text in the editor and clicking submit adds a message to the currently selected channel.
- Submitting the editor clears the input.
- Switching channels clears the input.
- Channel list is loaded once on loading the application.
- Initially, no channel is selected.
- There is no upfront loading of messages.
- Messages already in local state are shown immediately.
- Messages are loaded from the remote server on channel selection and updated to the screen.
- Messages are also stored in local state after loading from the remote.


## Missing Features

The implementation covers the basic requirements outlined in the specifications. 
However, the following features are not implemented:

- No error handling is implemented.
- No authentication is implemented.
- No user identity management is implemented.


## Running the Application

1. Install dependencies: npm install

2. Run the backend server: npm start

3. Run the React frontend: npm start

4. Open your browser and navigate to http://localhost:3000 to view the application.