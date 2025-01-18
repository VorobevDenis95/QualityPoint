import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
