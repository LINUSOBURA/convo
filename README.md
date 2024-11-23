# English Conversation Quiz Game

A responsive and engaging quiz game designed to improve English conversation skills. Users can select context and difficulty levels, answer randomized questions, and receive a detailed performance report.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Run](#how-to-run)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Design**: Optimized for all screen sizes, with a clean and intuitive UI.
- **Quiz Customization**:
  - Select context and difficulty levels.
  - Questions are randomly shuffled to provide a fresh experience every time.
- **Timer Functionality**: Time-bound quizzes to challenge the user.
- **Detailed Report**: A summary of answers at the end of the quiz.
- **Adaptive Navigation**: Hamburger menu for smaller screens.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Icons**: `react-icons`
- **State Management**: React Hooks (`useState`, `useEffect`)
- **JSON Data**: Dynamic question filtering from a JSON file (`quizes.json`).

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/english-quiz-game.git
   cd english-quiz-game
   ```
2. **Install dependencies: Make sure you have Node.js installed, then run**:

   ```bash
   npm install

   ```

3. **Start the development server**:

   ```bash
   npm start

   ```

4. **Build the project for production**:
   ```bash
   npm run build
   ```

## How to Run

### Run the app locally:

    Development server: http://localhost:3000

### Access the deployed version:

Hosted link: (https://atiamconvo.netlify.app/)

## Folder Structure

english-quiz-game/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable components
│ │ ├── WelcomeScreen.js
│ │ ├── LevelSelection.js
│ │ ├── QuestionScreen.js
│ │ ├── ReportScreen.js
│ │ ├── LoadingScreen.js
│ ├── styles/ # Global styles
│ ├── App.js # Main application logic
│ ├── index.js # Application entry point
│ └── quizes.json # Quiz questions data
├── .gitignore
├── package.json
└── README.md

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch and create a Pull Request:
   ```bash
   git push origin feature-name
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Developed by **Linus Obura**.

Feel free to reach out on [LinkedIn](https://linkedinn.com/in/linusobura) or [GitHub](https://github.com/LINUSOBURA).
