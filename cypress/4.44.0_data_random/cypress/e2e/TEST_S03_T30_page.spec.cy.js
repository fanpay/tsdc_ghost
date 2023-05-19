import gC from "./parameters.json";
const sel = gC.pages.selectors;
const req = gC.pages.requests;
const limits = gC.pages.limits;
const errors = gC.pages.errors;
context("Actions", () => {
  beforeEach(() => {
    cy.login();
    cy.interceptCreatePage();
    cy.interceptEditPage();
  });

  it("TEST-PAGES-1 Page title a-priori", () => {
    const text = "Titulo 1";
    cy.get(sel.inputTitle)
      .type(text, { parseSpecialCharSequences: false })
      .blur();
    cy.validateForm(true);
  });

  it(
    "TEST-PAGES-2 Page input title longitud dentro de las fronteras- Pseudo(1 - " +
      limits.titleMax +
      ")",
    () => {
      const length = cy.faker.datatype.number({ min: 1, max: limits.titleMax });
      const text = cy.faker.datatype.string(length);
      cy.get(sel.inputTitle)
        .type(text, { parseSpecialCharSequences: false })
        .blur();

      cy.validateForm(true);
    }
  );
  it(
    "TEST-PAGES-3 Page input title longitud fuera de las fronteras- Pseudo(> " +
      limits.titleMax +
      ")",
    () => {
      const length = cy.faker.datatype.number({
        min: limits.titleMax,
        max: limits.titleMax + 100,
      });
      const text = cy.faker.datatype.string(length);
      cy.get(sel.inputTitle)
        .type(text, { parseSpecialCharSequences: false })
        .blur();
      cy.validateForm(false);
    }
  );

  it("TEST-PAGES-4 Page title dinámico", () => {
    const text = cy.faker.datatype.string();
    cy.get(sel.inputTitle)
      .type(text, { parseSpecialCharSequences: false })
      .blur();
    cy.validateForm(true);
  });

  it("TEST-PAGES-5 Page description a-priori", () => {
    const text = "Descripción de la pagina a priori";
    cy.get(sel.inputDescription).type(text, {
      parseSpecialCharSequences: false,
    });

    cy.validateForm(true);
  });

  it(
    "TEST-PAGES-6 Page description longitud dentro de las fronteras- Pseudo(1 - " +
      limits.descriptionMax +
      ")",
    () => {
      const length = cy.faker.datatype.number({
        min: 1,
        max: limits.descriptionMax,
      });
      const text = cy.faker.datatype.string(length);
      cy.get(sel.inputDescription).type(text, {
        parseSpecialCharSequences: false,
      });

      cy.validateForm(true);
    }
  );

  it(
    "TEST-PAGES-7 Page description longitud fuera de las fronteras- Pseudo(> " +
      limits.descriptionMax +
      ")",
    () => {
      const length = cy.faker.datatype.number({
        min: limits.descriptionMax,
        max: limits.descriptionMax + 200,
      });
      const text = cy.faker.datatype.string(length);
      cy.get(sel.inputDescription).type(text, {
        parseSpecialCharSequences: false,
      });

      cy.validateForm(true);
    }
  );
  it("TEST-PAGES-8 Page description dinámico", () => {
    const text = cy.faker.datatype.string();
    cy.get(sel.inputDescription).type(text, {
      parseSpecialCharSequences: false,
    });
    cy.validateForm(true);
  });
  it("TEST-PAGES-9 Page url a-priori", () => {
    cy.initSettings();
    const text = "urlPagina";

    cy.get(sel.inputSettingsUrl)
      .type(text, {
        parseSpecialCharSequences: false,
      })
      .blur();

    cy.validateFormEdit(true);
  });

  it(
    "TEST-PAGES-10 Page url longitud dentro de las fronteras- Pseudo(1 - " +
      limits.urlMax +
      ")",
    () => {
      cy.initSettings();
      const length = cy.faker.datatype.number({ min: 1, max: limits.urlMax });
      const text = cy.faker.datatype.string(length);

      cy.get(sel.inputSettingsUrl)
        .type(text, {
          parseSpecialCharSequences: false,
        })
        .blur();

      cy.validateFormEdit(true);
    }
  );
  it(
    "TEST-PAGES-11 Page url longitud fuera de las fronteras- Pseudo(> " +
      limits.urlMax +
      ")",
    () => {
      cy.initSettings();
      const length = cy.faker.datatype.number({
        min: limits.urlMax,
        max: limits.urlMax + 100,
      });
      const text = cy.faker.datatype.string(length);

      cy.get(sel.inputSettingsUrl)
        .type(text, {
          parseSpecialCharSequences: false,
        })
        .blur();

      cy.validateFormEdit(true);
    }
  );
  it("TEST-PAGES-12 Page url dinámico", () => {
    cy.initSettings();
    const text = cy.faker.datatype.string();
    cy.get(sel.inputSettingsUrl)
      .type(text, { parseSpecialCharSequences: false })
      .blur();
    cy.validateFormEdit(true);
  });

  it("TEST-PAGES-13 Page exerpt a-priori", () => {
    cy.initSettings();
    const text = "extracto de prueba a priori";

    cy.get(sel.inputExerpt)
      .type(text, {
        parseSpecialCharSequences: false,
      })
      .blur();

    cy.validateFormEdit(true);
  });
  it(
    "TEST-PAGES-14 Page exerpt longitud dentro de las fronteras- Pseudo(1 - " +
      limits.exerptMax +
      ")",
    () => {
      cy.initSettings();
      const length = cy.faker.datatype.number({
        min: 1,
        max: limits.exerptMax,
      });
      const text = cy.faker.datatype.string(length);

      cy.get(sel.inputExerpt)
        .type(text, {
          parseSpecialCharSequences: false,
        })
        .blur();

      cy.validateFormEdit(true);
    }
  );
  it(
    "TEST-PAGES-15 Page exerpt longitud fuera de las fronteras- Pseudo(> " +
      limits.exerptMax +
      ")",
    () => {
      cy.initSettings();
      const length = cy.faker.datatype.number({
        min: limits.exerptMax,
        max: limits.exerptMax + 100,
      });
      const text = cy.faker.datatype.string(length);

      cy.get(sel.inputExerpt)
        .type(text, {
          parseSpecialCharSequences: false,
        })
        .blur();

      cy.validateErrorLength(sel.formGroup, limits.exerptMax);
      cy.validateFormEdit(false);
    }
  );
  it("TEST-PAGES-16 Page exerpt dinámico", () => {
    cy.initSettings();
    const text = cy.faker.datatype.string();
    cy.get(sel.inputExerpt)
      .type(text, { parseSpecialCharSequences: false })
      .blur();
    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-17 Page PublishDate a-priori", () => {
    cy.initSettings();
    const text = "2020-09-30";
    cy.setDate(sel.inputPublishDate, text);
    cy.validateFormEdit(true);
  });

  it("TEST-PAGES-18 Page PublishDate datos dentro de las fronteras- Pseudo(menor a la fecha actual)", () => {
    cy.initSettings();
    const text = cy.faker.date.past(2000);
    cy.setDate(sel.inputPublishDate, text);

    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-19 Page PublishDate datos fuera de las fronteras- Pseudo(mayor a la fecha actual)", () => {
    cy.initSettings();
    const text = cy.faker.date.future(2000);
    cy.setDate(sel.inputPublishDate, text);

    cy.validateFormEdit(false,'.gh-date-time-picker-error');
  });
  it("TEST-PAGES-20 Page PublishDate datos aleatorios", () => {
    cy.initSettings();
    const text = cy.faker.date.recent();
    cy.setDate(sel.inputPublishDate, text);

    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-21 Page PublishDate(time) a-priori", () => {
    cy.initSettings();
    const date = "2020-09-30";
    cy.setDate(sel.inputPublishDate, date);
    const text = "23:59";
    cy.setTime(sel.inputPublishTime, text);
    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-22 Page PublishDate(time)  datos dentro  de las fronteras- Pseudo(menor a la fecha actual)", () => {
    cy.initSettings();
    const text = cy.faker.date.past(2000);
    cy.setDate(sel.inputPublishDate, text);
    cy.setTime(sel.inputPublishTime, text);

    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-23 Page PublishDate(time) datos fuera de las fronteras- Pseudo(mayor a la fecha actual)", () => {
    cy.initSettings();
    const text = cy.faker.date.future(2000);
    cy.setDate(sel.inputPublishDate, text);
    cy.setTime(sel.inputPublishTime, text);
    cy.validateFormEdit(false,'.gh-date-time-picker-error');
  });
  it("TEST-PAGES-24 Page PublishDate(time) datos aleatorios", () => {
    cy.initSettings();
    const text = cy.faker.date.recent();
    cy.setDate(sel.inputPublishDate, text);
    cy.setTime(sel.inputPublishTime, text);
    cy.validateFormEdit(true);
  });
  it("TEST-PAGES-25 Page PublishDate(time) formato incorrecto", () => {
    cy.initSettings();
    const text = cy.faker.datatype.string();
    cy.setDate(sel.inputPublishDate, text);
    cy.setTime(sel.inputPublishTime, text);
    cy.validateFormEdit(false,'.gh-date-time-picker-error');
  });
  it("TEST-PAGES-26 Page PublishDate formato incorrecto", () => {
    cy.initSettings();
    const text = cy.faker.datatype.string();
    cy.setDate(sel.inputPublishDate, text);
    cy.validateFormEdit(false,'.gh-date-time-picker-error');
  });

  it("TEST-PAGES-27 Page YouTube a-priori", () => {
    cy.addYoutube("https://www.youtube.com/watch?v=iDyC-gIfJcw&t=2s");

    cy.validateYoutube(true);
  });

  it("TEST-PAGES-28 Page YouTube datos dentro de las fronteras- Pseudo(selecciona video aleatorio de una lista de reproduccion especifica)", () => {
    const videos =
      "https://www.youtube.com/watch?v=rLQ3cWisZm8&list=PLG6c4yPY2xvT-gKgpV-vL2EhCFo1J6PUK&index=";
    cy.addYoutube(videos + cy.faker.datatype.number({ min: 1, max: 32 }));

    cy.validateYoutube(true);
  });
  it("TEST-PAGES-29 Page YouTube datos fuera de las fronteras- Pseudo(diferentes a youtube)", () => {
    cy.addYoutube(cy.faker.internet.url());

    cy.validateYoutube(false);
  });
  it("TEST-PAGES-30 Page YouTube datos aleatorios", () => {
    cy.addYoutube(cy.faker.datatype.string());

    cy.validateYoutube(false);
  });
});