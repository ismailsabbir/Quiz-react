import React from "react";
import "./Blog.css";
import image from "../../../src/images/router2.png";
import image1 from "../../../src/images/context.png";
import image2 from "../../../src/images/useref.png";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-first">
        <div className="left-first">
          <img src={image} alt="" />
        </div>
        <div className="right-first">
          <h4>What is the purpose of react router</h4>
          <h6>
            The Router in React JS is primarily used to create Single Page Web
            Apps. In the application, React Router is utilized to define various
            routes. When a user enters a URL into your browser and the URL route
            equals one of several 'pathways' as in the router folder, the user
            is sent to that route. We will need to utilize Router in React JS to
            create a React application with navigation across multiple pages.
            React Router is a JavaScript framework that lets us handle client
            and server-side routing in React applications. It enables the
            creation of single-page web or mobile apps that allow navigating
            without refreshing the page. It also allows us to use browser
            history features while preserving the right application view. A
            Router in React JS routes using a component-based architecture. It
            offers various routing components as required by the application. If
            you wish to learn more about its applications, check out this blog:
            Navigate React Router programmatically.
          </h6>
        </div>
      </div>
      <div className="blog-secound">
        <div className="left-secound">
          <h4>How does context Api work</h4>
          <h6>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </h6>
        </div>
        <div className="right-secound">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="blog-third">
        <div className="left-third">
          <img src={image2} alt="" />
        </div>
        <div className="right-third">
          <h4>What is Useref react hook</h4>
          <h6>
            The hook useRef is a bit similar to useState, it returns an object
            that has a property current inside which we can access using object
            dot notation. That property current takes the value of the argument
            that we pass to the function useRef(). So the hook useRef also
            accepts one argument(the initial value for the property current).
            Also, keep in mind that the returned object will persist for the
            full lifetime of the component. The useRef Hook allows you to
            persist values between renders. It can be used to store a mutable
            value that does not cause a re-render when updated. It can be used
            to access a DOM element directly.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blog;
