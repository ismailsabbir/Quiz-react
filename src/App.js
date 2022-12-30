import "./App.css";
import Home from "./Component/Home/Home";
import QuestionType from "./Component/QuestionType/QuestionType";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Question from "./Component/Questions/Question";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/question",
          element: <QuestionType></QuestionType>,
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
        },
        {
          path: "/quiz/:quizid",
          element: <Question></Question>,
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizid}`
            );
          },
        },
        {
          path: "*",
          element: (
            <div>
              <h1>Oops!</h1>
              <p>Sorry, an unexpected error has occurred.</p>
            </div>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
