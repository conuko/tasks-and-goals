describe("Protected routes", () => {
  context(
    "Login and access protected route to see if todos are rendered from backend",
    () => {
      it("Log in and access todos route", () => {
        cy.visit("/login");

        // enter username and password and verify that the user is logged in
        cy.get('input[name="email"]').type(Cypress.env("email"));
        cy.get('input[name="password"]').type(Cypress.env("password"));
        cy.contains("button", "Sign in").click();
        cy.location("pathname").should("equal", "/");
        cy.contains(Cypress.env("user"))
          .should("be.visible")
          .then(() => {
            const userString = window.localStorage.getItem("user");

            expect(userString).to.be.a("string");
            const user = JSON.parse(userString);

            expect(user).to.be.an("object");

            expect(user.accessToken).to.be.a("string");
          });

        // access protected route
        cy.contains("a", "Todos").click();
        cy.location("pathname").should("equal", "/todos");
        cy.contains("h1", "Todos");
      });
    }
  );
  context("Check if todos are visible", () => {
    it("Check if todos are visible", () => {
      cy.request({
        url: "http://localhost:3000/todos",
        failOnStatusCode: false,
      });
      cy.location("pathname", { timeout: 10000 }).should("equal", "/todos");
      cy.get(".todo");
    });
  });
  context("Add new todo", () => {
    it("Add new todo", () => {
      cy.get('input[name="task"]').type("New todo");
      cy.contains("button", "Add").click();
      cy.contains("New todo", { timeout: 5000 });
    });
  });
});
