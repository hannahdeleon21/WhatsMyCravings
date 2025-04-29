# What's My Cravings?

A modern, interactive food discovery platform that helps users explore diverse meals across breakfast, lunch, and dinner categories with an engaging and user-friendly interface.

![What's My Cravings Screenshot](public/meal-images/american_pancakes.jpg)

## 🍽️ Features

- **Category-based Exploration**: Browse meals by breakfast, lunch, and dinner categories
- **Detailed Meal Information**: View nutritional facts, ingredients, and preparation steps
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing in any environment
- **Interactive UI**: Smooth animations and intuitive navigation

## 🚀 Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with Shadcn/UI component library
- **State Management**: React Context API
- **Build Tool**: Vite
- **Backend**: Express.js with Node.js
- **Database**: In-memory storage with typed schemas

## 📋 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/whats-my-cravings.git
   ```

2. Navigate to the project directory:
   ```bash
   cd whats-my-cravings
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5000`

## 🏗️ Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── assets/      # Static assets
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main application component
│   │   └── main.tsx     # Application entry point
├── public/              # Public static files
│   └── meal-images/     # Food images
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   └── storage.ts       # Data storage implementation
└── shared/              # Shared code between client and server
    ├── data/            # Sample meal data
    └── schema.ts        # Database schema definitions
```

## 📱 Responsive Design

The application is fully responsive and provides an optimal viewing experience across a wide range of devices:

- **Mobile**: Streamlined interface with full functionality
- **Tablet**: Enhanced layout with improved visibility
- **Desktop**: Full-featured experience with optimized spacing

## 🎨 UI/UX Features

- Smooth transitions between pages
- Interactive meal cards with hover effects
- Modal dialogs for detailed meal information
- Intuitive navigation with breadcrumbs
- Accessibility-focused design elements

## 🛠️ Future Enhancements

- User accounts and authentication
- Meal favorites and personalized recommendations
- Advanced search and filtering options
- User reviews and ratings
- Recipe sharing functionality

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Food images sourced legally for educational purposes
- UI design inspired by modern food discovery platforms
- Special thanks to the React and Tailwind CSS communities for their excellent documentation