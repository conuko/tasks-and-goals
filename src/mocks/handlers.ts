import { rest } from "msw";

// Mock Data
export const todos = [
  {
    id: "cl2s3w40300660m22hcz6lwu3",
    createdAt: "2022-05-04T21:43:20.643Z",
    updatedAt: "2022-05-11T13:58:49.678Z",
    checked: true,
    content: "running",
    authorId: "alan@alan.com",
  },
  {
    id: "cl3fox2zd00540m00ae1p8xvq",
    createdAt: "2022-05-21T09:50:39.961Z",
    updatedAt: "2022-05-21T09:50:39.962Z",
    checked: false,
    content: "swimming",
    authorId: "alan@alan.com",
  },
  {
    id: "cl31ilmte00450mp1vm6cj0jv",
    createdAt: "2022-05-11T11:45:01.634Z",
    updatedAt: "2022-05-21T09:53:00.370Z",
    checked: false,
    content: "testing",
    authorId: "alan@alan.com",
  },
];

export const user = {
  name: "Alan",
  email: "alan@alan.com",
  password: "$2a$08$hpgUNnG6B.sbpjL17CKjrOE.ci7CeMcCuqBuMHFgjQycqchMA/5jO",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiY2wzZnRrbjV4MDAwMjBtMDE3ZDJwaWpzdyIsIm5hbWUiOiJBbGFuIiwiZW1haWwiOiJhbGFuQGFsYW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkaHBnVU5uRzZCLnNicGpMMTdDS2pyT0UuY2k3Q2VNY0N1cUJ1TUhGZ2pReWNxY2hNQS81ak8ifSwiaWF0IjoxNjUzMTM0NDU3fQ.a86Yd5nEtNLLQQEr15_p3BhM9kFqVN56YlJ-mNEeZDI",
};

export const handlers = [
  rest.get(
    `http://localhost:5000/tasks/author/${user.email}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(todos));
    }
  ),
];
