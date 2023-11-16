import { useRoutes } from "react-router-dom";
import { AuthTabs, ResetPassword, Feeds, App } from "./pages";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <AuthTabs />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/app/home",
      element: <App />,
      children: [
        {
          path: "feeds",
          element: <Feeds />,
        },
      ],
    },
  ]);

  return elements;
};
