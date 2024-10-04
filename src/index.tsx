// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/lib/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import "./shared/config/i18n/i18n";
import { StoreProvider } from "app/providers/StoreProvider";

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
