import { Theme } from "app/providers/ThemeProvider";

import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) =>
  function buildDecorator(Story: React.FC) {
    return (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
  };
