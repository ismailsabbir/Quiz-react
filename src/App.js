import "./App.css";
import Home from "./Component/Home/Home";
import QuestionType from "./Component/QuestionType/QuestionType";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Question from "./Component/Questions/Question";
import Blogs from "./Component/Blogs/Blogs";
import Chart from "./Component/Chart/Chart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
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
          path: "/statistic",
          element: <Chart></Chart>,
          loader: () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
        },
        {
          path: "/blog",
          element: <Blogs></Blogs>,
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
