import { test, expect } from "@playwright/test";

test("should visit login page", async ({ page }) => {
  // Arrange

  // Act
  await page.goto("/");
});

test("should have focus on user input when it clicks on it", async ({
  page,
}) => {
  // Arrange

  // Act
  await page.goto("/");
  await page.getByRole("textbox", { name: "Usuario *" }).click();

  // Assert
  await expect(page.getByRole("textbox", { name: "Usuario *" })).toBeFocused();
});

test("should display error message when user input is empty", async ({
  page,
}) => {
  // Arrange

  // Act
  await page.goto("/");
  await page.getByRole("textbox", { name: "Usuario *" }).clear();
  await page.getByLabel("Contraseña *").fill("validPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // Assert
  await expect(page.getByText("Debe informar el campo")).toBeVisible();
});

test("should show an error alert when credentials are not valid", async ({
  page,
}) => {
  // Arrange
  const user = "user";
  const password = "patata";

  // Act
  await page.goto("/");
  await page.getByRole("textbox", { name: "Usuario *" }).fill(user);
  await page.getByLabel("Contraseña *").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  // Assert
  await expect(page.getByText("Usuario y/o password no válidos")).toBeVisible();
});

test("should redirect to project tracker when credentials are valid", async ({
  page,
}) => {
  // Arrange
  const user = "admin";
  const password = "test";

  // Act
  await page.goto("/");
  await page.getByRole("textbox", { name: "Usuario *" }).fill(user);
  await page.getByLabel("Contraseña *").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  // Assert
  await expect(page).toHaveURL(/.*submodule-list/);
  await expect(page.getByRole("heading", { name: "Proyectos" })).toBeVisible();
});
