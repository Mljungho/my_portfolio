describe("User can see experience", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });

    it("displays basic information", () => {
        cy.get("#basics").within(() => {
            cy.get(".name").should("contain", "Mathias Ljungholm");
            cy.get(".label").should("contain", "jr Developer");
            cy.get(".email").should("contain", "mathias.ljungholm@gmail.com");
        });
     });

     it("displays previous work experience", () => {
        cy.get("#work").within(() => {
            cy.get(".name").should("contain", "Volvo Cars");
            cy.get(".position").should("contain", "Mechanical Integration Engineer");
            cy.get(".summary").should("contain", "Working at Volvo...");
        });
     });

});
