
describe("User can see list of projects", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#projects-tab").click();

    });

    it("displays the first project", () => {
        cy.get("#project-1").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "My First Website");
            cy.get(".description").should("contain", "This was my first project.");
        });
    });

    it("displays the second project", () => {
        cy.get("#project-2").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "FizzBuzz");
            cy.get(".description").should("contain", "First Coding Kata I did. FizzBuzz is a childrens game designed to teach calculus, written in Ruby.");
        });
    });

    it("displays the third project", () => {
        cy.get("#project-3").within(() => {
            cy.get(".image").should("exist");
            cy.get(".header").should("contain", "ATM challenge" );
            cy.get(".description").should("contain", "We designed an ATM logic with real life case scenarios and appropriate response." );
        });
    });
});