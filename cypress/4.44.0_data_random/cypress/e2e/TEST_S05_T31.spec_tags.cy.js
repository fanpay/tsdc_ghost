import gC from "./parameters.json";
const sel = gC.pages.selectors;
const req = gC.pages.requests;
const limits = gC.pages.limits;
const errors = gC.pages.errors;
context("Actions", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3002/ghost/#/signin");
		cy.get("#ember7").type(gC.signin.user.email);
		cy.get("#ember9").type(gC.signin.user.password);
		cy.get("#ember11").click();
		cy.wait(1000);
	});

	Cypress.on("uncaught:exception", (err, runnable) => {
		return false;
	});

	it("TEST-PAGES-31 - Crear pagina nueva y publicarla ", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("New page").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
		const titulPagina = "pagina de prueba 1";
		const contenidoPagina = "contenido de pagina de prueba";
		cy.get(".gh-koenig-editor-pane").get("textarea").type(titulPagina);
		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.type(contenidoPagina);
		cy.get(".gh-editor-header").contains("Publish").click();
		cy.wait(1000);
		cy.get(".gh-publishmenu-dropdown").contains("Set it live now").click();
		cy.wait(1000);
		cy.get(".gh-publishmenu-dropdown")
			.get(".gh-publishmenu-footer")
			.contains("Publish")
			.click();
		cy.wait(1000);
		cy.get(".gh-body-fullscreen")
			.get(".gh-notification-content")
			.should("contain", "Published");
		cy.get(".gh-notification-actions").should("contain", "View Page");
		const titulPaginaSepareted = titulPagina.replace(/ /g, "-");
		cy.get(".gh-notification-actions")
			.find("a")
			.should("have.attr", "href")
			.and("include", titulPaginaSepareted);
	});

	it("TEST-PAGES-32 - Editar pagina previamente creada y publicada a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");
		const titulPagina = "pagina de prueba 1";
		const contenidoPagina = "contenido de pagina de prueba";
		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");
		const titulPaginaEditado = titulPagina + " Editado";
		const contenidoPaginaEditado = contenidoPagina + " Editado";
		cy.get(".gh-koenig-editor-pane")
			.get("textarea")
			.clear()
			.type(titulPaginaEditado);

		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.clear()
			.type(contenidoPaginaEditado);

		cy.get(".gh-editor-header").contains("Update").click();

		cy.get(".gh-publishmenu-dropdown")
			.get(".gh-publishmenu-footer")
			.contains("Update")
			.click();
		cy.wait(1000);

		cy.get(".gh-body-fullscreen")
			.get(".gh-notification-content")
			.should("contain", "Updated");
		cy.get(".gh-notification-actions").should("contain", "View Page");
		const titulPaginaSepareted = titulPagina.replace(/ /g, "-");
		cy.get(".gh-notification-actions")
			.find("a")
			.should("have.attr", "href")
			.and("include", titulPaginaSepareted);
		cy.get(".gh-editor-header").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");
		cy.get(".gh-list")
			.get(".gh-posts-list-item")
			.get(".gh-post-list-status")
			.should("contain", "Published")
			.and("not.contain", "Draft")
			.and("not.contain", "Scheduled");
		cy.get(".gh-list")
			.get(".gh-posts-list-item")
			.get(".gh-content-entry-title")
			.should("contain", titulPaginaEditado);
	});

	it("TEST-PAGES-33 - Agregar un tag a una pagina previamente creada y publicada, para hacer filtrado por este a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");
		const titulPagina = "pagina de prueba 1";
		const contenidoPagina = "contenido de pagina de prueba";
		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");
		const titulPaginaEditado = titulPagina + " Editado";
		const contenidoPaginaEditado = contenidoPagina + " Editado";
		cy.get(".gh-koenig-editor-pane")
			.get("textarea")
			.clear()
			.type(titulPaginaEditado);

		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.clear()
			.type(contenidoPaginaEditado);

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get("#tag-input").find("input").type(titulPagina);

		cy.get(".ember-power-select-option").click();
		cy.wait(1000);

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get(".gh-editor-header").contains("Update").click();
		cy.wait(1000);

		cy.get(".gh-publishmenu-dropdown")
			.get(".gh-publishmenu-footer")
			.contains("Update")
			.click();
		cy.wait(1000);

		cy.get(".gh-body-fullscreen")
			.get(".gh-notification-content")
			.should("contain", "Updated");
		cy.get(".gh-notification-actions").should("contain", "View Page");
		const titulPaginaSepareted = titulPagina.replace(/ /g, "-");
		cy.get(".gh-notification-actions")
			.find("a")
			.should("have.attr", "href")
			.and("include", titulPaginaSepareted);

		cy.get(".gh-editor-header").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");
		cy.get(".gh-list")
			.get(".gh-posts-list-item")
			.get(".gh-post-list-status")
			.should("contain", "Published")
			.and("not.contain", "Draft")
			.and("not.contain", "Scheduled");
		cy.get(".gh-list")
			.get(".gh-posts-list-item")
			.get(".gh-content-entry-title")
			.should("contain", titulPaginaEditado);

		cy.get(".view-actions-bottom-row").contains("All tags").click();
		cy.wait(1000);

		cy.get(".ember-power-select-dropdown--active")
			.find("ul")
			.find("li")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should(
			"eq",
			"http://localhost:3002/ghost/#/pages?tag=pagina-de-prueba-1&type=published"
		);
	});

	it("TEST-PAGES-34 - Crear pagina dejarla en draf, volver a entrar editarla y publcarla a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("New page").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
		const titulPagina = "pagina numero 2 inicia como draft";
		const contenidoPagina = "contenido de pagina de prueba inicia como draft";

		cy.get(".gh-koenig-editor-pane").get("textarea").type(titulPagina);

		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.type(contenidoPagina);

		cy.get(".gh-editor-header").contains("Pages").click();
		cy.wait(1000);

		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole").contains("Draft pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=draft");
		cy.get(".gh-list");
		cy.get(".gh-posts-list-item");
		cy.get(".gh-post-list-status")
			.should("contain", "Draft")
			.and("not.contain", "Published")
			.and("not.contain", "Scheduled");

		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");
		const titulPaginaEditada = "pagina numero 2 finaliza como publicada";
		const contenidoPaginaEditada =
			"contenido de pagina de prueba finaliza como publicada";

		cy.get(".gh-koenig-editor-pane")
			.get("textarea")
			.clear()
			.type(titulPaginaEditada);

		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.clear()
			.type(contenidoPaginaEditada);

		cy.get(".gh-editor-header").contains("Publish").click();
		cy.wait(1000);

		cy.get(".gh-publishmenu-dropdown").contains("Set it live now").click();
		cy.wait(1000);

		cy.get(".gh-publishmenu-dropdown")
			.get(".gh-publishmenu-footer")
			.contains("Publish")
			.click();
		cy.wait(1000);

		cy.get(".gh-body-fullscreen")
			.get(".gh-notification-content")
			.should("contain", "Published");
		cy.get(".gh-notification-actions").should("contain", "View Page");
		const titulPaginaSepareted = titulPagina.replace(/ /g, "-");
		cy.get(".gh-notification-actions")
			.find("a")
			.should("have.attr", "href")
			.and("include", titulPaginaSepareted);

		cy.get(".gh-editor-header").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=draft");
		cy.get(".gh-canvas-header-content").contains("Draft pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);
	});

	it("TEST-PAGES-35 - Crear pagina nueva, crear tag, la publica y listar por tag creado a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("New page").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/editor/page");
		const titulPagina = "pagina con tag semana 5";
		const contenidoPagina = "contenido de pagina con tag";
		cy.get(".gh-koenig-editor-pane").get("textarea").type(titulPagina);

		cy.get(".gh-koenig-editor-pane")
			.get(".koenig-editor__editor-wrapper")
			.type(contenidoPagina);

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get("#tag-input").find("input").type(titulPagina);

		cy.get(".ember-power-select-option").click();
		cy.wait(1000);

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get(".gh-editor-header").contains("Publish").click();
		cy.wait(1000);

		cy.get(".gh-publishmenu-dropdown").contains("Set it live now").click();
		cy.wait(1000);

		cy.get(".gh-publishmenu-dropdown")
			.get(".gh-publishmenu-footer")
			.contains("Publish")
			.click();
		cy.wait(1000);

		cy.get(".gh-body-fullscreen")
			.get(".gh-notification-content")
			.should("contain", "Published");
		cy.get(".gh-notification-actions").should("contain", "View Page");
		const titulPaginaSepareted = titulPagina.replace(/ /g, "-");
		cy.get(".gh-notification-actions")
			.find("a")
			.should("have.attr", "href")
			.and("include", titulPaginaSepareted);

		cy.get(".gh-editor-header").contains("Pages").click();
		cy.wait(1000);

		cy.get(".view-actions-bottom-row").contains("All tags").click();
		cy.wait(1000);

		cy.get(".ember-power-select-dropdown--active")
			.find("ul")
			.find("li")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should(
			"eq",
			"http://localhost:3002/ghost/#/pages?tag=pagina-con-tag-semana-5"
		);
	});

	it("TEST-PAGES-36 - Elimina pagina previamente creada a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");
		const titulPagina = "pagina numero 2 finaliza como publicada";
		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");
		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get(".settings-menu-content")
			.find("form")
			.find("button")
			.get(".settings-menu-delete-button")
			.click();
		cy.wait(1000);

		cy.get(".modal-content")
			.get(".modal-footer")
			.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
			.find("span")
			.click({ force: true });

		cy.wait(1000);

		cy.get(".view-actions-bottom-row").contains("All tags").click();

		cy.wait(1000);
	});

	it("TEST-PAGES-37 - Elimina pagina con tag a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");
		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");

		const titulPagina = "pagina con tag semana 5";
		cy.get(".view-actions-bottom-row").contains("All tags").click();
		cy.wait(1000);

		cy.get(".ember-power-select-dropdown--active")
			.find("ul")
			.find("li")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get(".settings-menu-content")
			.find("form")
			.find("button")
			.get(".settings-menu-delete-button")
			.click();
		cy.wait(1000);

		cy.get(".modal-content")
			.get(".modal-footer")
			.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
			.find("span")
			.click({ force: true });
		cy.wait(50);

		cy.wait(1000);
	});

	it("TEST-PAGES-38 - Elimina pagina previamente creada a-priori", () => {
		cy.get(".gh-nav-top").contains("Pages").click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages");

		cy.get(".gh-canvas-header-content").contains("All pages").click();
		cy.wait(1000);

		cy.get("#ember-basic-dropdown-wormhole")
			.contains("Published pages")
			.click();
		cy.wait(1000);

		cy.url().should("eq", "http://localhost:3002/ghost/#/pages?type=published");

		const titulPagina = "pagina de prueba 1";
		cy.get(".view-actions-bottom-row").contains("All tags").click();
		cy.wait(1000);

		cy.get(".ember-power-select-dropdown--active")
			.find("ul")
			.find("li")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.get(".gh-list")
			.find("li")
			.get(".gh-posts-list-item.gh-list-row")
			.contains(titulPagina)
			.click();
		cy.wait(1000);

		cy.url().should("contain", "http://localhost:3002/ghost/#/editor/page");

		cy.get(".settings-menu-toggle").click();
		cy.wait(1000);

		cy.get(".settings-menu-content")
			.find("form")
			.find("button")
			.get(".settings-menu-delete-button")
			.click();
		cy.wait(1000);

		cy.get(".modal-content")
			.get(".modal-footer")
			.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
			.find("span")
			.click({ force: true });

		cy.wait(1000);
	});

	// ---------------------------------------

	it("TEST-PAGES-39 - TAG nombre a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);
		const nombreTag = "tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });
		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
	});

	it("TEST-PAGES-40 - TAG input nombre longitud dentro de las fronteras- Pseudo(1 - " +
			limits.nameTagMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);

			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });
			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Saved");
		}
	);

	it("TEST-PAGES-41 - TAG input nombre longitud fuera de las fronteras- Pseudo( > " +
			limits.nameTagMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: limits.nameTagMax,
				max: limits.nameTagMax + 100,
			});
			const nombreTag = cy.faker.datatype.string(length);

			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });
			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Retry");
		}
	);

	it("TEST-PAGES-42 - TAG input nombre dinámico )", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = cy.faker.datatype.string();

		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });
		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.wait(1000);
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
	});

	// ---------------------------------------

	it("TEST-PAGES-43 - TAG Color a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = "tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const colorTag = "af2f33";
		cy.get(".gh-main-section-content")
			.get(".input-color")
			.get("input[type=color]")
			.type(colorTag, { parseSpecialCharSequences: false });
		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
	});

	it("TEST-PAGES-44 - TAG input Color nombre dinámico genera valor default negro)", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const length = cy.faker.datatype.number({
			min: 1,
			max: limits.nameTagMax,
		});
		const nombreTag = cy.faker.datatype.string(length);

		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const colorTag = cy.faker.datatype.string();

		cy.get(".gh-main-section-content")
			.get(".input-color")
			.get("input[type=color]")
			.type(colorTag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
	});

	// ---------------------------------------

	it("TEST-PAGES-45 - TAG descripcion a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = "tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const descripcionTag = "descripcion de tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Description")
			.click()
			.type(descripcionTag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
		cy.get(".gh-canvas-title").should("contain", nombreTag);
	});

	it("TEST-PAGES-46 - TAG input descripcion longitud dentro de las fronteras- Pseudo(1 - " +
			limits.descriptionTagMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			const lengthDesc = cy.faker.datatype.number({
				min: 1,
				max: limits.descriptionTagMax,
			});
			const descripcionTag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-main-section-content")
				.contains("Description")
				.click()
				.type(descripcionTag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Saved");
		}
	);

	it("TEST-PAGES-47 - TAG input descripcion longitud fuera de las fronteras- Pseudo( >  " +
			limits.descriptionTagMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			const lengthDesc = cy.faker.datatype.number({
				min: limits.descriptionTagMax,
				max: limits.descriptionTagMax + 100,
			});
			const descripcionTag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-main-section-content")
				.contains("Description")
				.click()
				.type(descripcionTag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Retry");
		}
	);

	it("TEST-PAGES-48 - TAG input nombre dinámico ", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const descripcionTag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Description")
			.click()
			.type(descripcionTag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.wait(1000);
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
	});

	// ---------------------------------------

	it("TEST-PAGES-49 - TAG Slug a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = "tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const slugTtag = "slug";
		cy.get(".gh-main-section-content")
			.contains("Slug")
			.click()
			.type(slugTtag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
		cy.get(".gh-canvas-title").should("contain", nombreTag);
	});

	it("TEST-PAGES-50 - TAG input Slug longitud dentro de las fronteras- Pseudo(1 - " +
			limits.urlMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			const lengthDesc = cy.faker.datatype.number({
				min: 1,
				max: limits.urlMax,
			});
			const slugTtag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-main-section-content")
				.contains("Slug")
				.click()
				.type(slugTtag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Saved");
		}
	);

	it("TEST-PAGES-51 - TAG input Slug longitud fuera de las fronteras- Pseudo( >  " +
			limits.urlMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			const lengthDesc = cy.faker.datatype.number({
				min: limits.descriptionTagMax,
				max: limits.descriptionTagMax + 100,
			});
			const slugTtag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-main-section-content")
				.contains("Slug")
				.click()
				.type(slugTtag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Retry");
		}
	);

	it("TEST-PAGES-52 - TAG input Slug dinámico )", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		const slugTtag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Slug")
			.click()
			.type(slugTtag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.wait(1000);
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
	});

	// ---------------------------------------

	it("TEST-PAGES-53 - TAG Meta title a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = "tag de prueba 1";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

		const titleMetaTtag = "tittulo de tag para meta";
		cy.get(".gh-expandable-content")
			.contains("Meta")
			.click()
			.type(titleMetaTtag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
		cy.get(".gh-canvas-title").should("contain", nombreTag);
	});

	it("TEST-PAGES-54 - TAG input Meta title longitud dentro de las fronteras- Pseudo(1 - " +
			limits.exerptMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

			const lengthDesc = cy.faker.datatype.number({
				min: 1,
				max: limits.exerptMax,
			});
			const titleMetaTtag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-expandable-content")
				.contains("Meta")
				.click()
				.type(titleMetaTtag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Saved");
		}
	);

	it("TEST-PAGES-55 - TAG input Meta title longitud fuera de las fronteras- Pseudo( >  " +
			limits.exerptMax +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

			const lengthDesc = cy.faker.datatype.number({
				min: limits.exerptMax,
				max: limits.exerptMax + 100,
			});
			const titleMetaTtag = cy.faker.datatype.string(lengthDesc);
			cy.get(".gh-expandable-content")
				.contains("Meta")
				.click()
				.type(titleMetaTtag, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Retry");
		}
	);

	it("TEST-PAGES-56 - TAG input Meta title dinámico )", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

		const titleMetaTtag = cy.faker.datatype.string();
		cy.get(".gh-expandable-content")
			.contains("Meta")
			.click()
			.type(titleMetaTtag, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.wait(1000);
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
	});

	// ---------------------------------------

	it("TEST-PAGES-57 - TAG Meta Canonical URL a-priori", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = "tag de prueba 29";
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

		const canonicalURL =
			"https://www.coursera.org/learn/pruebas-automatizadas-software/";
		cy.get(".gh-expandable-content")
			.contains("Canonical URL")
			.click()
			.type(canonicalURL, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.get(".gh-canvas-header-content").should("contain", "Saved");
		cy.wait(1000);
		cy.get(".gh-canvas-title").should("contain", nombreTag);
	});

	it("TEST-PAGES-58 - TAG Meta Canonical URL longitud dentro de las fronteras- Pseudo(1 - " +
			limits.canonicalURL +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

			const lengthDesc = cy.faker.datatype.number({
				min: 1,
				max: limits.canonicalURL,
			});
			const canonicalURL = cy.faker.internet.url(lengthDesc);
			cy.get(".gh-expandable-content")
				.contains("Canonical URL")
				.click()
				.type(canonicalURL, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Saved");
		}
	);

	it("TEST-PAGES-59 - TAG Meta Canonical URL longitud fuera de las fronteras- Pseudo( >  " +
			limits.canonicalURL +
			")",
		() => {
			cy.get(".gh-nav-top").contains("Tags").click();
			cy.wait(1000);
			cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
			cy.get(".gh-canvas-header-content").contains("New tag").click();
			cy.wait(1000);

			const length = cy.faker.datatype.number({
				min: 1,
				max: limits.nameTagMax,
			});
			const nombreTag = cy.faker.datatype.string(length);
			cy.get(".gh-main-section-content")
				.contains("Name")
				.click()
				.type(nombreTag, { parseSpecialCharSequences: false });

			cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

			const lengthDesc = cy.faker.datatype.number({
				min: limits.canonicalURL,
				max: limits.canonicalURL + 100,
			});

			const canonicalURLpart2 = cy.faker.datatype.string(lengthDesc);
			const canonicalURL =
				cy.faker.internet.url(lengthDesc) + canonicalURLpart2;

			cy.get(".gh-expandable-content")
				.contains("Canonical URL")
				.click()
				.type(canonicalURL, { parseSpecialCharSequences: false });

			cy.get(".gh-canvas-header-content").contains("Save").click();
			cy.wait(1000);
			cy.get(".gh-canvas-header-content").should("contain", "Retry");
		}
	);

	it("TEST-PAGES-60 - TAG Meta Canonical URL dinámico )", () => {
		cy.get(".gh-nav-top").contains("Tags").click();
		cy.wait(1000);
		cy.url().should("eq", "http://localhost:3002/ghost/#/tags");
		cy.get(".gh-canvas-header-content").contains("New tag").click();
		cy.wait(1000);

		const nombreTag = cy.faker.datatype.string();
		cy.get(".gh-main-section-content")
			.contains("Name")
			.click()
			.type(nombreTag, { parseSpecialCharSequences: false });

		cy.get(":nth-child(1) > .gh-expandable-header > .gh-btn > span").click();

		const canonicalURL = cy.faker.datatype.string();
		cy.get(".gh-expandable-content")
			.contains("Canonical URL")
			.click()
			.type(canonicalURL, { parseSpecialCharSequences: false });

		cy.get(".gh-canvas-header-content").contains("Save").click();
		cy.wait(1000);
        cy.get(".gh-canvas-header-content").should("contain", "Retry");
	});

});