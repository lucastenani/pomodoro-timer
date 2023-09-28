# Pomodoro Timer

## Project Description

The "Pomodoro Timer" is a comprehensive React application that encompasses various advanced concepts, such as ContextAPI, useReducer, immer, form handling, ESLint, routing, and more. This project serves as a Pomodoro timer, allowing users to input task names and allocate dedicated time intervals. Users can start, pause, or complete tasks, and all Pomodoro cycles are stored in local storage, accessible via the application's history page. Additionally, the application offers a light and dark theme toggle, the ability to clear historical data, and task recommendations based on past usage.

## Project URL

You can see the project in action [here](https://lucastenani.github.io/pomodoro-timer/).

## Libraries Used

- Styled Components
- ESLint from RocketSeat
- react-router-dom
- react-hook-form
- date-fns
- immer
- gh-pages

## Project Notes

- Cycle IDs are generated based on the milliseconds of the day they were created. This approach eliminates the need for external ID libraries like uuid.
- As there is no backend connection, and both the home and history pages need to share the list of cycles, context was employed to facilitate communication between routes.
- Historical data is stored in local storage as a practical alternative to employing a database solution.
- The use of layouts minimizes code redundancy, ensuring a consistent user interface across both pages.

## Folder Structure

- **src**: Contains the main source code files.

  - **@types**: Contains type definitions for styled components.
  - **assets:** Stores image assets.
  - **components**: Contains reusable components used throughout the application.
  - **contexts:** Manages context providers.
  - **layouts/DefaultLayout**: Default layout created for reuse across both routes.
  - **pages:** Contains the two primary routes, Home and History.
  - **reducers/cycles**: Centralizes the main logic for the useReducer of cycles, promoting better organization.
  - **styles:** Stores themes and global application styles.
  - **App.tsx**: The main application component.
  - **Router.tsx**: Manages application routing.
  - **main.tsx**: The application's entry point.

## Prerequisites to run on your machine

Some installations will be necessary before run the application locally.

:warning: [Node.js](https://nodejs.org/en/download/)

## Getting Started

To run the application locally, follow these steps:

1. Clone the project:

```
git clone https://github.com/lucastenani/pomodoro-timer.git
```

2. Navigate to the project directory:

```
cd pomodoro-timer/
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

## Design

The application's layout was provided and can be accessed [here](https://www.figma.com/community/file/1127351821076435124).

## License

This project is licensed under the [MIT License](LICENSE).
