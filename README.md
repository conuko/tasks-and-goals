# Shortlist

This is the FrontEnd of Shortlist - the modern To Do Application.

## Summary

- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Usage](#usage)
- [Authentication](#authentication)
- [Back End](#back-end)

## Getting Started

1. `yarn` to install deps.
2. `yarn dev` to start the development server.
3. `yarn test` to run the tests.

## Tech stack

1. Built with [React 17](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). Packed with Vite.
2. Styled with 7-1 [Sass](https://sass-lang.com/) Architecture.
3. [React Router](https://reacttraining.com/react-router/).
4. Client Side Form Validation with [yup](https://github.com/jquense/yup) and [React Hook Form](https://react-hook-form.com/).

## Architecture

![Flow Chart FE, BE, DB](https://user-images.githubusercontent.com/50672977/166143979-b46d53dc-c5a2-4188-9867-ac67b5eebc19.png)

## Repository Architecture

- The Repository Architecture follows loosely the Tao of React approach by Alex Kondov [Tao of React](https://www.taoofreact.com/)
- The Repository Architecture is divided into three main parts:
  1. The reusable components which can be found in `/src/components`.
  - The reusable components are divided into two parts:
    - The reusable components which are used in multiple places.
    - The reusable components which contain different aspects of the site's structural layout (e.g. navigation bar, footer, etc.).
  2. The pages which can be found in `/src/pages`.
  3. The styles which can be found in `/src/styles`.
  - The Sass styling of the application is structured in 7-1 architecture pattern.
- Furthermore there are `/src/assets` which contains the images, `/__tests__` which contains the tests for the frontend, and `/src/test` and `/src/utils` which contain the test helper files for the configuration for Vitest with Jest and React Testing Library.

## Usage

1. The user can Signin (`/login`) or Register (`/register`).
2. After Signin or Register, the user can see his home screen with his name and his functions (`/`).
3. The user can go to his To Do List (`/todos`).
4. The user can add a new To Do that is not longer than 30 characters.
5. The user can see a list of his own To Dos.
6. The user can toggle/untoggle a To Do.
7. The user can delete a To Do.
8. The user can logout.

## Authentication

- Uses JWT for token-based authentication. [JSON Web Token](https://jwt.io/)
- Uses bcrypt for securely hash and salt passwords. [bcrypt](https://www.npmjs.com/package/bcryptjs)

- **Functionality:**
  - When the user registers or logs in successfully, the server sends a jwt access token to the client.
  - The jwt access token is stored in the browser's local storage.
  - The jwt access token is then used to authenticate the user.
  - When the user wants to access the /todos route, the ProtectedRoute is used to check if the user is authenticated by checking the jwt access token in the local storage.
  - When the user wants to render his todos, the server checks if the user is authenticated. For this, the client sends a request to the server to the /tasks/author/:email route with the access token.
  - The user can logout by deleting the jwt access token from the local storage.

![Authentication](https://user-images.githubusercontent.com/50672977/166125473-7d32be27-ef26-4053-8c7a-0bc0a4cabf8d.png)

## Back End

- [Shortlist Backend](https://github.com/conuko/tasks-and-goals-backend)
