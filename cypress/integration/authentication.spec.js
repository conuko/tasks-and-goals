describe("Authentication", () => {
  context("Register a user and log them out afterwars", () => {
    it("Registers a user correctly", () => {
      cy.visit("/register");

      // enter valid username, email and password
      cy.get('input[name="user"]').type(Cypress.env("user"));
      cy.get('input[name="email"]').type(Cypress.env("email"));
      cy.get('input[name="password"]').type(Cypress.env("password"));
      cy.contains("button", "Register").click();

      // confirm we have logged in successfully
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

      // logout
      cy.contains("button", "Sign Out").click();
      cy.location("pathname").should("equal", "/");
    });
  });
  context("Check protected routes after logout", () => {
    it("fails to access protected route", () => {
      cy.request({
        url: "http://localhost:3000/todos",
        failOnStatusCode: false,
      });
      cy.location("pathname").should("equal", "/");
    });
  });

  context("Try loggin in with invalid password", () => {
    it("Does not log in with invalid password", () => {
      cy.visit("/login");

      const stub = cy.stub();
      cy.on("window.alert", stub);

      // enter invalid username and password
      cy.get('input[name="email"]').type(Cypress.env("email"));
      cy.get('input[name="password"]').type("invalidpassword");
      cy.contains("button", "Sign in").click();

      // confirm we have not logged in successfully
      cy.location("pathname").should("equal", "/login");
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Invalid email or password");
      });
    });
  });
  context(
    "Login and access protected route to see if todos are rendered from backend",
    () => {
      it("Log in and access todos route", () => {
        cy.visit("/login");

        // enter username and password
        cy.get('input[name="email"]').type(Cypress.env("email"));
        cy.get('input[name="password"]').type(Cypress.env("password"));
        cy.contains("button", "Sign in").click();

        // access protected route
        cy.contains("a", "Todos").click();
        cy.location("pathname").should("equal", "/todos");
        cy.contains("h1", "Todos");
      });
    }
  );
});
