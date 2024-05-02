# -Assignment-5-Dynamic-User-Interface
Inlämningsuppgift 5: Dynamiskt användargränssnitt

# Task Management System

# Beskrivning: 
Denna applikation används för att lägga till och sortera uppgifter med kategorier och prioritet.

# Starta applikationen:
First, npm install next.js
and then run the development server:

```bash
#to install
npm Install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Data Lagring:
Data lagras på klienten med hjälp av indexedDB. Det gör att databasen är strukturerad och effektiv genom att den är integrerad i webbläsaren och kan hantera stora datamängder. För att komplettera lagringen använder vi cookies för att spara den senast valda filtreringen eller sorteringen av uppgifterna. Detta ger en förbättrad användarupplevelse genom att behålla preferebser och inställningar.



# Utmaningar: 

Första gången vi använder indexedDB så det var lite svårt att få det att köra som det ska. 

-------------------------------------------------------------------------------------------


# Calendar Component

## Description

The Calendar Component allows the user to view and manage tasks in a calendar format. The component displays a calendar view with various tasks represented as color-coded boxes. By clicking on a task, the user can view detailed information.

## Implemented Improvements and Impact on User Experience

### Interactive Calendar

We have implemented an interactive calendar that provides the user with a visual overview of created tasks. By offering an interactive interface for viewing and managing tasks, we enhance the user experience and efficiency of our application.

### Priority Coloring

Tasks are displayed with different colors based on their priority. By using color-coding, users can quickly identify and prioritize different tasks, increasing productivity and efficiency.

## Technical Overview

#### Lazy Loading
To prioritize the loading of essential content and improve initial page load times, we have implemented lazy loading techniques for dynamically loaded content within the calendar and tasks. This ensures that only the necessary information is loaded initially, with additional content loaded as users interact with the calendar interface.

### Accessibility Adaptations

We have implemented accessibility adaptations to ensure that the calendar component is accessible to all users, including those with disabilities. We managed to do so with the ARIA attribute.

# Search Component

## Description

The Search component is integrated into our application to facilitate users in efficiently searching for tasks based on various criteria. This component enhances the user experience by allowing quick and intuitive filtering of tasks.

#### Key Features:
- **Dynamic Search:** Users can input search terms directly into the search bar, and the component dynamically filters tasks based on the entered criteria.
- **Search Terms:** Users can utilize specific search terms such as "done:", "prio:", "cat:", and "date:" to filter tasks based on completion status, priority, category, and deadline, respectively.
- **Interactive Interface:** The component provides an interactive interface with real-time feedback, displaying search results as users type and providing informative tooltips for utilizing search terms effectively.
- **Task Management:** Users can conveniently manage tasks directly from the search results, including deleting tasks and marking them as completed or pending.

#### Implementation Details:
- **State Management:** Utilizes React's useState hook to manage the search term input and search results dynamically.
- **Search Algorithm:** Implements a custom search algorithm that parses the entered search term and filters tasks based on the specified criteria, such as completion status, priority, category, and deadline.
- **User Interaction:** Incorporates event handlers to capture user interactions, such as clicking on search results to delete tasks or mark them as completed.
- **Modal Component:** Utilizes a modal component to present the search interface, providing a clean and focused user experience without cluttering the main application interface.

### Challenges Faced

One of the main challenges we encountered during the creation of this project was:

#### Dynamic Search Implementation
- **Challenge:** Implementing a dynamic search functionality that efficiently filters tasks based on various criteria (such as completion status, priority, category, and deadline). This involved parsing user input, dynamically updating search results, and handling complex filtering logic.
- **Solution:** We approached this challenge by carefully designing the search component architecture and implementing a custom search algorithm optimized for performance. We utilized React's useState hook to manage the search term input and search results dynamically. Additionally, we incorporated event handlers to capture user interactions and update search results in real-time, providing users with a seamless search experience.



