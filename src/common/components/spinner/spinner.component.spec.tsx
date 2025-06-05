import React from "react";
import { render } from "@testing-library/react";
import { SpinnerComponent } from "./spinner.component";

// Mock setup
let mockPromiseInProgress = false;
vi.mock("react-promise-tracker", () => ({
  usePromiseTracker: () => ({
    promiseInProgress: mockPromiseInProgress,
  }),
}));

describe("SpinnerComponent specs", () => {
  beforeEach(() => {
    mockPromiseInProgress = false;
  });

  it("should render without crashing", () => {
    // Arrange
    const { container } = render(<SpinnerComponent />);

    // Assert
    expect(container).toBeInTheDocument();
  });

  it("should display loader when promise is in progress", () => {
    // Arrange
    mockPromiseInProgress = true;
    const { getByTestId } = render(<SpinnerComponent />);

    // Act
    const spinner = getByTestId("spinner");

    // Assert
    expect(spinner).toBeInTheDocument();
  });

  it("should not display loader when promise is not in progress", () => {
    // Arrange
    mockPromiseInProgress = false;
    const { queryByTestId } = render(<SpinnerComponent />);

    // Act
    const spinner = queryByTestId("spinner");

    // Assert
    expect(spinner).not.toBeInTheDocument();
  });
});
