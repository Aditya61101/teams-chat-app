# Teams Chat App

This project is a clone of the popular communication platform Discord. It aims to replicate the core features and user interface of Discord.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Contributing](#contributing)

## Features

- **Server and channels creation**: Create servers and channels and also invite users to your server using the invite link.
- **Real-time Chat**: Engage in real-time conversations with other users through voice, video, and text channels.
- **User Authentication**: Securely sign up and log in to your account using clerk-auth.
- **User Roles**: A user can be an admin, a moderator, or a simple user.
- **Voice Channels**: Create and join voice channels for voice communication.
- **Video Channels**: Create and join video channels for video communication.
- **User Profiles**: Customize your profile and avatar.
- **File Sharing**: Share files with other users.

You can explore many more features by visiting the web app.


## Demo

[The web app is live 🎉](https://teams-chat-app.up.railway.app/)

## Installation

Follow these steps to set up the project locally:

- **Clone the repository:**

  1. git clone https://github.com/Aditya61101/teams-chat-app.git
  2. cd teams-chat-app

- **Install the dependencies:** npm install

- **Configure the environment variables by creating a .env file:**
    1. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
    2. CLERK_SECRET_KEY="your_key"
    3. NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
    4. NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
    5. NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    6. NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    7. DATABASE_URL="mongodb_atlas_url"
    8. UPLOADTHING_SECRET="your_key"
    9. UPLOADTHING_APP_ID="your_key"
    10. LIVEKIT_API_KEY ="your_key" 
    11. LIVEKIT_API_SECRET ="your_key" 
    12. NEXT_PUBLIC_LIVEKIT_URL ="your_key"

- **Run the app locally:** npm run dev

## Contributing

Contributions are always welcome!

There are no strict guidelines for the contributions, but one should adhere to some basic rules of contributions.

If you find any issues or want to add features, create a branch with your work and make a pull request to the main branch. If we find the feature usable we will merge it into our main branch.
