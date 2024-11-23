import { router } from "@/app/routes/routes";
import useAuthCheck from "@/hooks/useAuthChecked";
import { LazyLoader } from "@/shared/ui/lazyLoader";
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
