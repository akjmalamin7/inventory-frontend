import useAuthCheck from "@/hooks/useAuthChecked";
import { router } from "@/routes/routes";
import { LazyLoader } from "@/ui/lazyLoader";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <LazyLoader />;
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
