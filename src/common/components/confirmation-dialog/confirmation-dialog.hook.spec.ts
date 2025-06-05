import { renderHook, act } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import * as lookup from "#common/models/lookup";

describe("useConfirmationDialog specs", () => {
  it("should initialize with default values", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    vi.spyOn(lookup, "createEmptyLookup");

    // Assert
    expect(lookup.createEmptyLookup).to.not.toHaveBeenCalled();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(lookup.createEmptyLookup());
  });
  it("should open dialog and set item to delete", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: "1", name: "Test Item" };

    // Act
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(item);
    expect(result.current.isOpen).toBe(true);
  });
  it("should close dialog and reset item to delete on accept", () => {
    // Arrange
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: "1", name: "Test Item" };
    vi.spyOn(lookup, "createEmptyLookup");
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Act
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(lookup.createEmptyLookup).toHaveBeenCalled();
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(lookup.createEmptyLookup());
  });
});
