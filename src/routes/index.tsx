import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RoutesPaths } from "@/routes/paths.config";
import MainPage from "@/pages/main-page/main-page.tsx";
import LanguageProvider from "@/providers/language-provider.tsx";
import ZodiacSignPage from "@/pages/zodiac-sign-page/zodiac-sign-page.tsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LanguageProvider />}>
      <Route index path={RoutesPaths.HOME} element={<MainPage />} />
      <Route
        index
        path={RoutesPaths.ZODIAC_SIGN}
        element={<ZodiacSignPage />}
      />
    </Route>
  )
);

export default routes;
