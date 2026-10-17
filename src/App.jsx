
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import store from "./store/index.js";
import AppProvider from "./Components/providers/AppProvider.jsx";

import Layoutt from "./Components/layout/Layoutt.jsx";
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import EmptyState from "./Components/common/Empitystate.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutt />,
    children: [
      { index: true, element: <Product /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
  {
    path: "*",
    element: <EmptyState />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
