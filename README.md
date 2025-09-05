# MyPortfolio

This repository contains the source code for my personal portfolio website. It is divided into two main parts:

## Backend
The backend is built using Node.js and includes the following features:
- API endpoints for handling contact form submissions.
- Database integration for storing and retrieving data.
- Utility functions for error handling and API responses.

### Key Files and Directories:
- `src/app.js`: Main application file.
- `src/controllers/`: Contains controller logic.
- `src/models/`: Database models.
- `src/routes/`: API routes.
- `src/utils/`: Utility functions.

## Frontend
The frontend is built using React and includes the following features:
- A responsive design using Tailwind CSS.
- Components for showcasing projects, achievements, and contact information.
- Integration with the backend for dynamic content.

### Key Files and Directories:
- `src/App.jsx`: Main React application file.
- `src/components/`: Reusable React components.
- `src/pages/`: Page-level components.
- `public/assets/`: Static assets like images and PDFs.

## How to Run

### Prerequisites
- Node.js installed on your system.
- A package manager like npm or yarn.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Sonukr2006/MyPortfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MyPortfolio
   ```
3. Install dependencies for both backend and frontend:
   ```bash
   cd Backend && npm install
   cd ../Frontend && npm install
   ```
4. Start the backend server:
   ```bash
   cd Backend && npm start
   ```
5. Start the frontend development server:
   ```bash
   cd Frontend && npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License.