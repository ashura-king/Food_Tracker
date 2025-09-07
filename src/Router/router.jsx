import { createBrowserRouter } from "react-router-dom";
import Front from "../Components/Front.jsx";
import Footer from "../Components/Footer.jsx";

function Layout() {
  return (
    <>
      <Front />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  },
]);

export default router;
