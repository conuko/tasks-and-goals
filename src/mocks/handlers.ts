import { rest } from "msw";

// Mock Data
export const tasks = [
  {
    id: "cl2s3w40300660m22hcz6lwu3",
    createdAt: "2022-05-04T21:43:20.643Z",
    updatedAt: "2022-05-11T13:58:49.678Z",
    checked: true,
    content: "complete id 19 til monday",
    authorId: "neni@neni.de",
  },
  {
    id: "cl3fox2zd00540m00ae1p8xvq",
    createdAt: "2022-05-21T09:50:39.961Z",
    updatedAt: "2022-05-21T09:50:39.962Z",
    checked: false,
    content: "Write more tests",
    authorId: "neni@neni.de",
  },
  {
    id: "cl31ilmte00450mp1vm6cj0jv",
    createdAt: "2022-05-11T11:45:01.634Z",
    updatedAt: "2022-05-21T09:53:00.370Z",
    checked: false,
    content: "Mock data for your tests",
    authorId: "neni@neni.de",
  },
];

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),
];
