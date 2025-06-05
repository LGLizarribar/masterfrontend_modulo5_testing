describe("Login specs", () => {
  it("visits the login page", () => {
    cy.visit("/");
  });

  it("should have focus on user input when it clicks on it", () => {
    // Arrange
    cy.visit("/");
    cy.findByRole("textbox").click();

    // Assert
    cy.findByRole("textbox").should("have.focus");
  });
  it("should display error message when user input is empty", () => {
    // Arrange
    cy.visit("/");
    cy.findByRole("textbox").clear();
    cy.findByLabelText("Contraseña *").type("validPassword");

    // Act
    cy.get("form").submit();

    // Assert
    cy.get(".MuiFormHelperText-root").should(
      "contain.text",
      "Debe informar el campo"
    );
  });
  it("should show an error alert when credentials are not valid", () => {
    // Arrange
    const user = "user";
    const password = "patata";

    // Act
    cy.visit("/");
    cy.findByRole("textbox").as("userInput");
    cy.findByLabelText("Contraseña *").as("passwordInput");
    cy.get("@userInput").type(user);
    cy.get("@passwordInput").type(password);
    cy.findByRole("button", { name: "Login" }).click();
    cy.findByText("Usuario y/o password no válidos").as("errorAlert");

    // Assert
    cy.get("@userInput").should("have.value", user);
    cy.get("@passwordInput").should("have.value", password);
    cy.get("@errorAlert").should("exist");
  });
  it("should redirect to project tracker when credentials are valid", () => {
    // Arrange
    const user = "admin";
    const password = "test";

    // Act
    cy.visit("/");
    cy.findByRole("textbox").as("userInput");
    cy.findByLabelText("Contraseña *").as("passwordInput");
    cy.get("@userInput").type(user);
    cy.get("@passwordInput").type(password);
    cy.findByRole("button", { name: "Login" }).click();

    // Assert
    cy.url().should("include", "/submodule-list");
    cy.location("hash").should("include", "#/submodule-list");
  });
});
