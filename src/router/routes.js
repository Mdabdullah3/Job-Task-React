import Home from "../Pages/Home";

const { createBrowserRouter } = require("react-router-dom");
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
])

export default routes