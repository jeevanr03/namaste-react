import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import RestaurantInfo from "./components/RestaurantInfo"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import "./index.css"
// converted to js object => renders to html in browser
// const heading = React.createElement("h1", {id: "heading"}, "Hello World")

/* converts jsx into React.createElement => js Object => renders to html in browser.
   Babel transpiles jsx written in js file to react.createelement
*/

const Grocery = lazy(() => import ("./components/GroceryInfo")) // Like defineAsyncComponents in vue 3. Load components and js on demand. Using suspense for fallback.

const App = () => {
  return (
    <div className="app-main">
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/groceries",
        element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>),
      },
      {
        path: "/restaurant-info/:id",
        element: <RestaurantInfo />,
      }
    ],
    errorElement: <Error />
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)