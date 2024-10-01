import { fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender";

describe("sidebar", () => {
  test("render", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
});
