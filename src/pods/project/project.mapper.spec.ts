import { mapProjectFromApiToVm } from "./project.mapper";
import * as viewModel from "./project.vm";

describe("Project Mapper Tests", () => {
  describe("mapProjectFromApiToVm", () => {
    it("should map project with employees", () => {
      // Arrange
      const apiProject = {
        id: "1",
        name: "Test Project",
        employees: [
          { id: "e1", employeeName: "Employee 1" },
          { id: "e2", employeeName: "Employee 2" },
        ],
        isActive: true,
      };
      const expectedVmProject = {
        id: "1",
        name: "Test Project",
        employees: [
          { id: "e1", employeeName: "Employee 1" },
          { id: "e2", employeeName: "Employee 2" },
        ],
        isActive: true,
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toStrictEqual(expectedVmProject);
    });
    it("should return empty project when api project is undefined", () => {
      // Arrange
      const apiProject = undefined;
      const expectedVmProject = viewModel.createEmptyProject();

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toStrictEqual(expectedVmProject);
    });
    it("should return empty project when api project is null", () => {
      // Arrange
      const apiProject = null;
      const expectedVmProject = viewModel.createEmptyProject();

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toStrictEqual(expectedVmProject);
    });
    it("should call createEmptyProject when api project is falsy", () => {
      // Arrange
      const apiProject = null;
      vi.spyOn(viewModel, "createEmptyProject");

      // Act
      mapProjectFromApiToVm(apiProject);

      // Assert
      expect(viewModel.createEmptyProject).toHaveBeenCalled();
    });
  });
});
