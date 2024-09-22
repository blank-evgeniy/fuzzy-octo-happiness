import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (Story: React.FC) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
