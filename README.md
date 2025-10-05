

# 🎮 Fun Games Hub


Fun Games Hub is an open-source collection of mini-games built with React + Vite. It provides a modular platform where developers can add new games, improve existing ones, or enhance the UI/UX. Players can enjoy classic games like Tic Tac Toe, Memory Match, and Snake directly in the browser.

This repository is part of Hacktoberfest 🍂, and contributions are highly encouraged! Add new games to the homepage, implement new features in existing games, or improve the overall design and interactivity.

Maintainer [GauravGirkar](https://github.com/GauravGirkar)

## **✨ Features (Planned & Ongoing)**

**🕹️ Mini-Games Hub** – Play multiple games from a single platform

**❌ Tic Tac Toe** – Classic 3x3 game

**🃏 Memory Match** – Flip cards and find pairs

**🐍 Snake** – Navigate the snake to collect food and grow

**🧩 Modular Game System** – Easily add new games to the hub

**🎨 Modern UI** – Clean and responsive design with CSS

**📱 Responsive Design** – Works seamlessly on desktop and mobile

**🛠️ Hacktoberfest-Friendly** – Contributors can add new games, features, or UI improvements



## 🛠️ Tech Stack



Frontend: React 18, Vite

Routing: React Router DOM

State Management: React useState & useEffect (per-game)

Styling: CSS / TailwindCSS compatible

Other Utilities: None (can be added by contributors per game)



## 📂 Project Structure


fun-games-hub/
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── components/         # Shared UI components (Nav, GameCard)
│   ├── pages/              # Game pages (TicTacToePage, MemoryPage, SnakePage)
│   └── games/              # Game implementations (TicTacToe, Memory, Snake)
├── index.html
├── styles.css              # Global styles
├── package.json
├── vite.config.js
├── README.md
├── CONTRIBUTING.md
└── ISSUE_TEMPLATE.md




## Contributor Guidelines:



Add your game inside src/games/

Create a corresponding page in src/pages/

Link your game in App.jsx and the homepage (Home.jsx)

Update the homepage to display your game card



## 🚀 Getting Started



**Clone the repository**

    git clone https://github.com/<your-username>/fun-games-hub.git
    cd fun-games-hub


**Install dependencies**

    npm install

# or

    yarn install

# or

    pnpm install


**Start the development server**

    npm run dev


Open http://localhost:5173  in your browser



## 🎯 How to Contribute


We welcome contributions to **Fun Game Hub**! If you would like to contribute, please follow these steps:

**1.  Fork the repository.**
    
**2.  Create a new branch:**
    
    git checkout -b Game/YourGame
    
**3.  Make your changes and commit them:**
    
    git commit -m "Add your message here"
    
**4.  Push to the branch:**
    
    git push origin Game/YourGame
    
**5.  Open a pull request.**
    

Please ensure your code follows our coding standards and includes tests where applicable.


## 💡 Suggestions for contributions:

Add new games (e.g., Chess, Connect 4, Pong)

Add features to existing games (scores, levels, themes)

Improve UI animations or responsiveness

Add game-specific settings or sound effects
