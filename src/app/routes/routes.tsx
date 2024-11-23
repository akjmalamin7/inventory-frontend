import { Layout } from "@/components/comon/layout";
import { LazyLoader } from "@/shared/ui/lazyLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// Lazy-loaded Pages
const HomePage = lazy(() => import("@/pages/home"));
const LoginPage = lazy(() => import("@/pages/login"));
const RegistrationPage = lazy(() => import("@/pages/registration"));
const NotFoundPage = lazy(() => import("@/pages/notFound/NotFound"));

// Loading and Error Fallback Components
const Loading = () => <div>Loading...</div>;
const ErrorFallback = () => <div>Something went wrong. Page not found.</div>;

// Router Configuration
export const router = createBrowserRouter(
  [
    // !@_______ public route ______@
    {
      element: (
        <Suspense fallback={<LazyLoader />}>
          <PublicRoutes />
        </Suspense>
      ),
      children: [
        {
          path: "/login",
          element: (
            <Suspense fallback={<LazyLoader />}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/registration",
          element: (
            <Suspense fallback={<LazyLoader />}>
              <RegistrationPage />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<LazyLoader />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },

    // !@_______ Private route ______@
    {
      path: "/",
      element: (
        <Suspense fallback={<LazyLoader />}>
          <Layout />
        </Suspense>
      ),
      errorElement: <ErrorFallback />,
      children: [
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <HomePage />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<LazyLoader />}>
              <NotFoundPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
