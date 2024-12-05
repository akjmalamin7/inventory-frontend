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

const LazyCustomer = lazy(()=>import("@/pages/customers/customer"));
const LazyNewCustomer = lazy(()=>import("@/pages/customers/new"));
const LazySupplier = lazy(()=>import("@/pages/suppliers/supplier"));
const LazyNewSupplier = lazy(()=>import("@/pages/suppliers/new"));
const LazyExpense = lazy(()=>import("@/pages/expenses/expense"));
const LazyNewExpense = lazy(()=>import("@/pages/expenses/new"));
const LazyNewExpenseType = lazy(()=>import("@/pages/expenses/newExpenseType"));
const LazyProducts = lazy(()=>import("@/pages/products/list"));
const LazyNewProduct = lazy(()=>import("@/pages/products/new"));
const LazyBrands = lazy(()=>import("@/pages/brands/list"));
const LazyNewBrand = lazy(()=>import("@/pages/brands/new"));
const LazyNewCategory = lazy(()=>import("@/pages/category/new"));
const LazyCategories = lazy(()=>import("@/pages/category/list"));
const LazyNewPurchase = lazy(()=>import("@/pages/purchase/new"));
const LazyPurchase = lazy(()=>import("@/pages/purchase/list"));
const LazyNewSale = lazy(()=>import("@/pages/sales/new"));
const LazySales = lazy(()=>import("@/pages/sales/list"));
const LazyNewReturn = lazy(()=>import("@/pages/return/new"));
const LazyReturn = lazy(()=>import("@/pages/return/list"));
const LazyReturnReport = lazy(()=>import("@/pages/report/return"));
const LazySalesReport = lazy(()=>import("@/pages/report/sales"));
const LazyPurchaseReport = lazy(()=>import("@/pages/report//purchase"));

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
              path: "/customer/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyCustomer />
                </Suspense>
              ),
            },
            {
              path: "/customer/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewCustomer />
                </Suspense>
              ),
            },
            {
              path: "/supplier/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazySupplier />
                </Suspense>
              ),
            },
            {
              path: "/supplier/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewSupplier />
                </Suspense>
              ),
            },
            {
              path: "/expense/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewExpense />
                </Suspense>
              ),
            },
            {
              path: "/expense/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyExpense />
                </Suspense>
              ),
            },
            {
              path: "/expense/type/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewExpenseType />
                </Suspense>
              ),
            },
            
            {
              path: "/products/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewProduct />
                </Suspense>
              ),
            },
            {
              path: "/brands/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewBrand />
                </Suspense>
              ),
            },
            {
              path: "/brands/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyBrands />
                </Suspense>
              ),
            },
            {
              path: "/categories/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewCategory />
                </Suspense>
              ),
            },
            {
              path: "/categories/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyCategories />
                </Suspense>
              ),
            },
            {
              path: "/products/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyProducts />
                </Suspense>
              ),
            },
            {
              path: "/products/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewProduct />
                </Suspense>
              ),
            },
            {
              path: "/purchase/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewPurchase />
                </Suspense>
              ),
            },
            {
              path: "/purchase/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyPurchase />
                </Suspense>
              ),
            },
            {
              path: "/sales/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewSale />
                </Suspense>
              ),
            },
            {
              path: "/sales/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazySales />
                </Suspense>
              ),
            },
            {
              path: "/return/new",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyNewReturn />
                </Suspense>
              ),
            },
            {
              path: "/return/list",
              element: (
                <Suspense fallback={<LazyLoader />}>
                  <LazyReturn />
                </Suspense>
              ),
            },
            {
              path: "/report/sales",
              element: (
                <Suspense fallback={<LazyLoader />}>
                <LazySalesReport/>
                </Suspense>
              ),
            },
            {
              path: "/report/return",
              element: (
                <Suspense fallback={<LazyLoader />}>
                <LazyReturnReport/>
                </Suspense>
              ),
            },
            {
              path: "/report/purchase",
              element: (
                <Suspense fallback={<LazyLoader />}>
                <LazyPurchaseReport/>
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
      // v7_prependBasename: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
