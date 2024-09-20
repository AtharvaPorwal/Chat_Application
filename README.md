#Name:Atharva Porwal
#University:IIT Indore
#Department:Metallurgical Engineering And Material Science.


#System Design Document for Chat Application
*Overview
This document outlines the system design for a chat application. It details the architecture, technologies used, and the steps to set up and run the application.

#Architecture
Frontend: Built using React.js, it provides a responsive user interface for chat functionalities.
Backend: Node.js with Express for handling API requests and Socket.IO for real-time communication.
Database: MongoDB for storing user details, messages, and conversations.

*Components
User Authentication: Ensures users are authenticated before accessing the chat functionalities.
Chat Interface: Displays conversations, messages, and a sidebar for users.
Video Call Integration: Allows users to initiate video calls in a unique room.

*Data Flow
User Authentication: User logs in, and their details are fetched from the server.
Fetching Conversations: The client requests conversation data from the server, which retrieves it from the database.
Real-Time Messaging: Messages are sent and received using Socket.IO for instant communication.
Video Calls: When a user clicks the call button, they are connected to a specific room unique to the called user.


*To set up the project, follow these steps:
Clone the repository from GitHub.
Navigate to the client directory:
npm install
Navigate to the server directory:
npm install

Connect with A MongoDB datbase by pasting the databse link in the connection.js file in db subfolber of Server Folder.

Running the Application
Run the frontend:
npm start
Run the backend:
npm run dev

#Libraries Used
React.js: For building the user interface.
Socket.IO: For real-time communication between clients and the server.
Express.js: For handling API requests.
MongoDB: For database management.
JitsiMeetExternalAPI: For video calling capabilities.

#Reason for Library Choices
React.js allows for a modular approach to building UI components.
Socket.IO provides an efficient way to handle real-time events, crucial for chat applications.
Express.js simplifies the server-side logic and routing.
MongoDB is a NoSQL database, making it flexible for storing user and message data.
Jitsi is a powerful tool for video conferencing, easy to integrate, and open-source.