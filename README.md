# Spotify Preview Client
A simple client to search and preview songs using the Spotify Web API.

## Getting started
The following steps will get the project up and running in development mode on your machine, no other mode exists.

### Prerequisites

You will need node and npm installed

###### OSX (Using Homebrew)

    brew install node

###### Ubuntu
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs


### Installing

Clone the repo

    git clone https://github.com/Roscode/spotify_preview_client.git
Install Dependencies

    npm install
Start The Dev Server

    npm start

### Usage

Search for the name of a song you like in the search bar, hit enter and watch 5 whole results
magically appear before your eyes! With pausing and playing abilities to boot. Pausing a playing song
pauses it right where it is and playing a paused song continues where it left off, but if you play a song that isn't the currently selected song, it will start from the beginning.
