import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import { ThemeProvider } from "styled-components";
import themes from "./services/themes";
import ROUTES from "./constants/routes";
import Main from "./screens/Main";
import Welcome from "./screens/Welcome";
import React from "react";
import useThemeDetector from "./hooks/useThemeDetector";
import GlobalStyle from "./components/Layout/GlobalStyle";

setupIonicReact();

const App: React.FC = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <ThemeProvider theme={isDarkTheme ? themes.dark : themes.light}>
      <GlobalStyle />
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path={ROUTES.WELCOME}>
              <Welcome />
            </Route>
            <Route exact path={ROUTES.MAIN}>
              <Main />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
