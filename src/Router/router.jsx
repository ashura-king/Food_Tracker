import { createBrowserRouter } from "react-router-dom";
import Front from "../Components/Front.jsx";
import Footer from "../Components/Footer.jsx";
import  NotFound from "../Components/404.jsx";

function Layout() {
  return (
    <>
      <Front />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout />  },
  {path: "*",element: <NotFound></NotFound>},
]);

export default router;
