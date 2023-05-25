import gC from "../e2e/parameters.json";
const req = gC.pages.requests;
const sel = gC.pages.selectors;
const errors = gC.pages.errors;

Cypress.Commands.add("login_simple", () => {
  cy.visit(gC.host + "#/signin");
  cy.get(gC.signin.selectors.email).type(gC.signin.user.email);
  cy.get(gC.signin.selectors.password).type(gC.signin.user.password);
  cy.get(gC.signin.selectors.submit).click();
});


Cypress.Commands.add("login", (email, password) => {
  cy.visit(gC.host + "#/signin");
  cy.get(gC.signin.selectors.email).type(gC.signin.user.email);
  cy.get(gC.signin.selectors.password).type(gC.signin.user.password);
  cy.get(gC.signin.selectors.submit).click();
  cy.visit(gC.host + "#/editor/page");
});

Cypress.Commands.add("interceptCreatePage", (info) => {
  cy.intercept({
    method: "POST",
    url: gC.host + req.create,
  }).as("create");
});

Cypress.Commands.add("interceptEditPage", (info) => {
  cy.intercept({
    method: "PUT",
    url: gC.host + req.create + "/*",
  }).as("editPage");
});

Cypress.Commands.add("validateCreatePage", (info) => {
  cy.wait("@create").should((data) => {
    const response = data.response;
    expect(response.statusCode).to.equal(201);
    if (response.body.pages.length === 0) return;
  });
});
Cypress.Commands.add("validateEditPage", (info) => {
  cy.wait("@editPage").should((data) => {
    const response = data.response;
    expect(response.statusCode).to.equal(200);
    if (response.body.pages.length === 0) return;
  });
});
Cypress.Commands.add("leaveCreatePage", (info) => {
  cy.wait(2000);
  cy.get(sel.returnPages).click();
  cy.get(sel.leaveButton).should("have.length", 1);
});
Cypress.Commands.add("validateForm", (seCrea) => {
  if (seCrea == false) {
    cy.leaveCreatePage();
  } else {
    cy.validateCreatePage();
  }
});
Cypress.Commands.add("validateFormEdit", (seCrea, selectorError) => {
  if (seCrea == false && selectorError) {
    cy.get(".gh-date-time-picker-error").should("have.length", 1);
  }
  if (seCrea == false && !selectorError) {
    cy.leaveCreatePage();
  }
  if (seCrea == true) {
    cy.validateEditPage();
  }
});
Cypress.Commands.add("validateErrorLength", (selector, limit) => {
  cy.get(selector)
    .contains(errors.maxlength.replace("@length", limit))
    .should("have.length", 1);
});
Cypress.Commands.add("validateErrorDate", (selector, format) => {
  cy.get(selector)
    .contains(errors.maxlength.replace("@format", format))
    .should("have.length", 1);
});
Cypress.Commands.add("validateErrorTime", (selector, format) => {
  cy.get(selector)
    .contains(errors.maxlength.replace("@format", "'" + format + "'"))
    .should("have.length", 1);
});
Cypress.Commands.add("validateYoutube", (seCrea) => {
  if (seCrea == false) {
    cy.wait(8000);
    cy.get(".bg-error-red")
      .contains("There was an error when parsing the URL.")
      .should("have.length", 1);
  } else {
    cy.validateForm();
  }
});

Cypress.Commands.add("openSettings", (seCrea) => {
  cy.get(sel.settingsButton).click();
});
Cypress.Commands.add("typeTitle", (seCrea) => {
  const text = cy.faker.datatype.string();
  cy.get(sel.inputTitle)
    .type(text, { parseSpecialCharSequences: false })
    .blur();
  cy.validateForm(true);
});

Cypress.Commands.add("initSettings", (seCrea) => {
  cy.typeTitle();
  cy.openSettings();
});

Cypress.Commands.add("setDate", (selector, dateTime) => {
  cy.get(selector).find("input").clear();
  cy.get(selector).type(cy.moment(dateTime).format("YYYY-MM-DD"), {
    parseSpecialCharSequences: false,
  });
  cy.get(selector).find("input").blur();
});
Cypress.Commands.add("setTime", (selector, dateTime) => {
  cy.get(selector).find("input").clear();
  cy.get(selector).type(cy.moment(dateTime, "HH:mm").format("HH:mm"), {
    parseSpecialCharSequences: false,
  });
  cy.get(selector).find("input").blur();
});

Cypress.Commands.add("addYoutube", (url) => {
  cy.get(sel.inputDescription).click();
  cy.get(sel.buttonPlus).click();
  cy.get(sel.opcionYouTube).click();
  cy.get(sel.urlInput).focus();
  cy.get(sel.urlInput).type(url);
  cy.get(sel.inputTitle).click();
  cy.wait(2000);
});