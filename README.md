# Student Management Platform

A responsive Single Page Application (SPA) built using **React** and **TailwindCSS**, simulating a simple **Student Management System** with student data management and advisor-student chat interface.  
All data is handled **inside the browser** (no backend), using **React Context API** and **LocalStorage** for persistence.


## Project Overview

The platform provides:

- **Student Management**:  
  View, add, search, and sort students in a responsive data table.
  
- **Advisor-Student Chat Interface**:  
  Simulate simple messaging between students and advisors, visually distinguishing sent and received messages.

- **Navigation**:  
  Easily switch between **Students** and **Chat** sections using a sticky header navigation bar.

- **Responsive Design**:  
  Optimized for mobile, tablet, and desktop screen sizes.

- **Polished UI**:  
  Clean, modern Framer-like look using TailwindCSS.

- **Session Persistence**:  
  Students and chats are saved using `localStorage`, so they survive page reloads.


## Setup Instructions

Follow these simple steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PragyaDhawan/student-management-platform.git
   cd student-management-platform
2. **Install dependencies**:
    npm install
3. **Start the development server**:
    npm start
4. **Open your browser and visit**:
    http://localhost:3000

## Approach

### Technology Choices

- **React**
- **TailwindCSS**
- **React Router**
- **Context API + LocalStorage**


### Core Features

| Feature | Approach |
|:---|:---|
| **Student Management** | A searchable table displaying student data. New students can be added via a validated form. |
| **Chat Interface** | Simulated messaging between advisor and students, with sent and received messages visually distinguished. |
| **Responsive Design** | Layout adapts across mobile, tablet, and desktop using Tailwind’s responsive utilities (`sm:`, `md:`, `lg:`). |
| **Persistence** | Data is stored in browser LocalStorage through `useEffect`, making it survive page reloads. |
| **Navigation** | A sticky header with route-based navigation ensures a consistent experience across views. |


### Design Decisions

- **Lightweight State Management**: Used Context API for simplicity.
- **Component Reusability**: Separated concerns into distinct, reusable components (Header, Footer, StudentTable, Chat).
- **Clean UX**: Added form validation, success/error messaging, auto-clearing alerts, and smooth transitions for a professional feel.
- **Scalable Structure**: The project folder structure is designed to scale easily if features like authentication or backend integration are added later.