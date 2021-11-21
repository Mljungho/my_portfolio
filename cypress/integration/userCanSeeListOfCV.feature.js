describe("User can see experience", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });

    it("displays basic information", () => {
        cy.get("#cv-1").within(() => {
            cy.get(".header").should("contain", "Mathias Ljungholm");
            cy.get(".meta").should("contain", "jr Developer");
            cy.get(".description").should("exist");
        });
     });

     it("displays previous work experience", () => {
        cy.get("#cv-2").within(() => {
            cy.get(".header").should("contain", "Volvo Car Corporation");
            cy.get(".meta").should("contain", "MIE Engineer");
            cy.get(".description").should("contain", "Working at Volvo...");
        });
     });
});
