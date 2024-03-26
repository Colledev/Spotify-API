# Project Name

This is an ongoing project focusing on authentication using the Spotify API to fetch user data such as playlists, profile, and playlist recommendations. The application uses React.js for the frontend and Node.js for the backend. The main goal is to allow users to authenticate with their Spotify accounts, accessing and interacting with their profile and playlist information.

## Features

- **Authentication**: Users can log in with their Spotify accounts to authenticate and authorize access to their account data.
- **Profile Information**: View user profile details such as display name, email, and profile picture.
- **Playlist Management**: Browse through playlists, view details, and interact with playlist data.
- **Recommendations**: Receive personalized playlist recommendations based on listening history and preferences.

## Usage

1. **Authentication**:
   - Click on the "Connect with Spotify" button to authenticate with your Spotify account.
   - Log in and authorize access to your Spotify account data.
   - After successful authentication, you will be redirected back to the application.

2. **Accessing User Data**:
   - Once authenticated, you can view your Spotify profile information on the homepage.
   - Navigate through playlists and explore playlist details.

3. **Interacting with Playlists**:
   - Browse playlists and view details such as the playlist name, number of tracks, and track list.
   - Interact with playlist data as desired, such as playing tracks or adding them to your library.

4. **Recommendations**:
   - Receive personalized playlist recommendations based on your listening history and preferences.

## Screenshots

_Insert screenshots or screencasts here to illustrate the authentication process, accessing user data, and interacting with playlists._

## Setup

1. Register a Spotify App and add http://localhost:8888/callback as a Redirect URI in the app settings
2. Create an .env file in the root of the project based on .env.example
3. npm install in Client & server
4. npm start client % server

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:

   ```bash
   cd client
    npm install
   ```
   ```bash
   cd server
    npm install
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Open the client in your browser:

   ```bash
    npm start                                           //http://localhost:3000
   ```

5. Open the server:

   ```bash
   node index.js                                        //http://localhost:5000
   ```

## License

- MIT
- SPOTIFY
