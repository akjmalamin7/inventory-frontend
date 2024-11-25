import { Layout } from "@/components/comon/layout";
import { LazyLoader } from "@/shared/ui/lazyLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// Lazy-loaded Pages
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const LoginPage = lazy(() => import("@/pages/login/LoginPage"));
const RegistrationPage = lazy(
  () => import("@/pages/registration/Registration")
);
const NotFoundPage = lazy(() => import("@/pages/notFound/NotFound"));
const SupplierPage = lazy(() => import("@/pages/supplier/Supplier"));
const ExpensePage = lazy(() => import("@/pages/expense/Expense"));
const PurchasePage = lazy(() => import("@/pages/purchase/Purchase"));
const ProductsPage = lazy(() => import("@/pages/products/Products"));
const SalesPage = lazy(() => import("@/pages/sales/Sales"));
const ReturnPage = lazy(() => import("@/pages/return/Return"));
const ReportPage = lazy(() => import("@/pages/report/Report"));
const CreateSupplierPage = lazy(
  () => import("@/pages/createSupplier/CreateSupplier")
);
const CreateExpensePage = lazy(
  () => import("@/pages/createExpense/CreateExpense")
);
// Loading and Error Fallback Components

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
            {
              path: "/supplier",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <SupplierPage />
                </Suspense>
              ),
            },
            {
              path: "/supplier/create",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <CreateSupplierPage />
                </Suspense>
              ),
            },
            {
              path: "/expense",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <ExpensePage />
                </Suspense>
              ),
            },
            {
              path: "/expense/create",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <CreateExpensePage />
                </Suspense>
              ),
            },
            {
              path: "/products",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <ProductsPage />
                </Suspense>
              ),
            },
            {
              path: "/purchase",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <PurchasePage />
                </Suspense>
              ),
            },
            {
              path: "/sales",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <SalesPage />
                </Suspense>
              ),
            },
            {
              path: "/return",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <ReturnPage />
                </Suspense>
              ),
            },
            {
              path: "/report",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <ReportPage />
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
