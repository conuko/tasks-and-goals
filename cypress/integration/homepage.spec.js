describe("Renders the home page and clicks buttons", () => {
  context("Render home page", () => {
    it("renders correctly", () => {
      cy.visit("/");
      cy.get(".header-large").should("exist");
      cy.get(".header-secondary").should("exist");
      cy.contains("Welcome!");
      cy.contains("To proceed please register or login. Thank you!");
    });
  });
  context("Click register button", () => {
    it("clicks register button on home page", () => {
      cy.visit("/");
      cy.get("button").contains("Register").click();
      cy.url().should("include", "/register");
    });
  });
  context("Click login button", () => {
    it("clicks login button on home page", () => {
      cy.visit("/");
      cy.get(".mt-small").contains("Sign in").click();
      cy.url().should("include", "/login");
    });
  });
});
