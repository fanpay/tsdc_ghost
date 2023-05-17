import gC from "./parameters.json";

context("Actions", () => {
  beforeEach(() => {
    cy.visit(gC.host + "#/signin");
  });

  it("TEST-LOGIN, invalid email, random", () => {
    cy.get(gC.signin.selectors.email).type(cy.faker.internet.userName());
    cy.get(gC.signin.selectors.submit).click();
    cy.get(".error").find(gC.signin.selectors.email).should("have.length", 1);
  });

  it("TEST-LOGIN, valid email address no password, random", () => {
    cy.get(gC.signin.selectors.email).type(cy.faker.internet.exampleEmail());
    cy.get(gC.signin.selectors.submit).click();
    cy.get(".error")
      .find(gC.signin.selectors.password)
      .should("have.length", 1);
  });

  it("TEST-LOGIN, valid email address invalid email and password, random", () => {
    cy.get(gC.signin.selectors.email).type(cy.faker.internet.exampleEmail());
    cy.get(gC.signin.selectors.password).type(cy.faker.internet.password());
    cy.get(gC.signin.selectors.submit).click();
    cy.get("p").get(".main-error").should("have.length", 1);
  });

  it("TEST-LOGIN, actual email address invalid email and password, pseudo", () => {
    cy.get(gC.signin.selectors.email).type(gC.signin.user.email);
    cy.get(gC.signin.selectors.password).type(cy.faker.internet.password());
    cy.get(gC.signin.selectors.submit).click();
    cy.get("p").get(".main-error").should("have.length", 1);
  });

  it("TEST-LOGIN, actual email address valid email and password, apriori", () => {
    cy.get(gC.signin.selectors.email).type(gC.signin.user.email);
    cy.get(gC.signin.selectors.password).type(gC.signin.user.password);
    cy.get(gC.signin.selectors.submit).click();
    cy.contains("Dashboard");
  });

  it("TEST-LOGIN, invalid email forgot password, random", () => {
    cy.get(gC.signin.selectors.email).type(cy.faker.internet.userName());
    cy.get("button.forgotten-link").click();
    cy.get(".error").find(gC.signin.selectors.email).should("have.length", 1);
    cy.get("p").get(".main-error").should("have.length", 1);
  });

  it("TEST-LOGIN, valid email address forgot password, random", () => {
    cy.get(gC.signin.selectors.email).type(cy.faker.internet.exampleEmail());
    cy.get("button.forgotten-link").click();
    cy.get("p").get(".main-error").should("have.length", 1);
  });
});