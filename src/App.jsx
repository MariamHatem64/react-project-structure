import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index.js";
import AppProvider from "./Components/providers/AppProvider.jsx";

import Layoutt from "./Components/layout/Layoutt.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import EmptyState from "./Components/common/Empitystate.jsx";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layoutt />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path:"*",
      element:<EmptyState/>
    }
  ]);
function App() {
 


  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />

       
      </AppProvider>
    </Provider>
  );
}

export default App;
