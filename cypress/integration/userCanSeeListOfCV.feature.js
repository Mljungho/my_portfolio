describe("User can see experience", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#cv-tab").click();
    });

    it("displays basic information", () => {
        cy.get("#cv-1").within(() => {
            cy.get(".header").should("contain", "Mathias Ljungholm");
            cy.get(".meta").should("contain", "jr Developer");
            cy.get(".description").should("contain", "mathias.ljungholm@gmail.com");
            cy.get(".telephone").should("contain", "+46 730 728424");
        });
     });

     it("displays previous work experience", () => {
        cy.get("#cv-2").within(() => {
            cy.get(".name").should("contain", "Volvo Cars");
            cy.get(".description").should("contain", "Mechanical Integration Engineer");
            cy.get(".summary").should("contain", "Working at Volvo...");
        });
     });

});
