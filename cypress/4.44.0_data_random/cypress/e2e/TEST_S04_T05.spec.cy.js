import gC from "./parameters.json";

context("Actions", () => {
  beforeEach(() => {
    cy.visit(gC.host_users);
  });

  const getIframeDocument = () => {
    return cy.get("iframe").its("0.contentDocument").should("exist");
  };

  const getIframeBody = () => {
    return getIframeDocument()
      .its("body")
      .should("not.be.undefined")
      .then(cy.wrap);
  };

  it("TEST-SINGUP, empty fields, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody()
      .find(gC.signin.selectors.submit)
      .should("have.text", "Sign up")
      .click();
    getIframeBody().find("input.error").first().should("have.length", 1);
    getIframeBody().find("input.error").last().should("have.length", 1);
  });

  it("TEST-SINGUP, empty name invalid email, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody().find("input").last().type(cy.faker.internet.userName());
    getIframeBody()
      .find(gC.signin.selectors.submit)
      .should("have.text", "Sign up")
      .click();
    getIframeBody().find("input.error").first().should("have.length", 1);
    getIframeBody().find("input.error").last().should("have.length", 1);
  });

  it("TEST-SINGUP, valid name invalid email, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody().find("input").first().type(cy.faker.name.findName());
    getIframeBody().find("input").last().type(cy.faker.internet.userName());
    getIframeBody()
      .find(gC.signin.selectors.submit)
      .should("have.text", "Sign up")
      .click();
    getIframeBody().find("input").first().should("not.have.class", "error");
    getIframeBody().find("input.error").last().should("have.length", 1);
  });

  it("TEST-SINGUP, empty email to sign in, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody()
      .find("button.gh-portal-btn-link")
      .should("have.text", "Sign in")
      .click();
    cy.wait(1000);
    getIframeBody()
      .find("button.gh-portal-btn-main")
      .should("have.text", "Continue")
      .click();
    getIframeBody().find("input.error").first().should("have.length", 1);
  });

  it("TEST-SINGUP, invalid email to sign in, random", () => {
    cy.get("iframe");
    cy.get("footer").find("li.nav-sign-up").click();
    cy.wait(1000);
    getIframeBody()
      .find("button.gh-portal-btn-link")
      .should("have.text", "Sign in")
      .click();
    cy.wait(1000);
    getIframeBody().find("input").first().type(cy.faker.internet.userName());
    getIframeBody()
      .find("button.gh-portal-btn-main")
      .should("have.text", "Continue")
      .click();
    getIframeBody().find("input.error").first().should("have.length", 1);
  });
});