import { createBrowserRouter } from "react-router-dom";
import { CLIENT_ROUTES } from "./routes";
import { PageLayout } from "../layout/PageLayout/PageLayout";
import { DrinksPage } from "../features/drinks/DrinksPage/DrinksPage";
import { CreateDrinkPage } from "../features/drinks/CreateDrinkPage/CreateDrinkPage";
import { DrinksInnerPage } from "../features/drinks/DrinkInnerPage/DrinksInnerPage";
import { NotFoundPage } from "../features/NotFoundPage/NotFoundPage";
import { ErrorBoundaryReactRouter } from "../features/ErrorBoundry/ErrorBoundry";

export const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.Main,
    element: <PageLayout />,
    children: [
      {
        index: true,
        errorElement: <ErrorBoundaryReactRouter />,
        element: <DrinksPage />,
      },
      {
        path: CLIENT_ROUTES.CreateDrink,
        errorElement: <ErrorBoundaryReactRouter />,
        element: <CreateDrinkPage />,
      },
      {
        path: `${CLIENT_ROUTES.DrinkInnerPage}/:id`,
        errorElement: <ErrorBoundaryReactRouter />,
        element: <DrinksInnerPage />,
      },
      {
        path: "*",
        errorElement: <ErrorBoundaryReactRouter />,
        element: <NotFoundPage />,
      },
    ],
  },
]);
