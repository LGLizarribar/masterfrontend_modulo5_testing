import React from "react";
import { render, screen } from "@testing-library/react";
import { ConfirmationDialogComponent } from "./confirmation-dialog.component";

describe("ConfirmationDialogComponent specs", () => {
  // Arrange
  const defaultProps = {
    isOpen: true,
    onAccept: vi.fn(),
    onClose: vi.fn(),
    title: "Test Title",
    labels: {
      closeButton: "Close",
      acceptButton: "Accept",
    },
    children: <div>Test Content</div>,
  };

  it("should display title and children text passed by props", () => {
    // Act
    render(<ConfirmationDialogComponent {...defaultProps} />);

    const titleElement = screen.getByText("Test Title");
    const contentElement = screen.getByText("Test Content");

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it("calls onAccept when accept button is clicked", () => {
    // Act
    vi.spyOn(defaultProps, "onAccept");
    render(<ConfirmationDialogComponent {...defaultProps} />);
    const acceptButton = screen.getByRole("button", {
      name: defaultProps.labels.acceptButton,
    });
    expect(acceptButton).toBeInTheDocument();
    acceptButton.click();

    // Assert
    expect(defaultProps.onAccept).toHaveBeenCalled();
  });

  it("calls onClose when close button is clicked", () => {
    // Act
    vi.spyOn(defaultProps, "onClose");
    render(<ConfirmationDialogComponent {...defaultProps} />);
    const closeButton = screen.getByRole("button", {
      name: defaultProps.labels.closeButton,
    });
    closeButton.click();

    // Assert
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
