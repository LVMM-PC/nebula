describe("Button", () => {
  it("renders correctly", () => {
    cy.visit("/button");
    cy.contains("#renderCorrectly .nebula-btn", "Follow");
  });

  it("hoc", () => {
    cy.visit("/button");
    cy.get("#hoc .nebula-btn").as("hocButton");
    cy.get("@hocButton").filter(".nebula-btn-two-chinese-chars");
    cy.get("@hocButton").click();
    cy.get("@hocButton").not(".nebula-btn-two-chinese-chars");
    cy.get("@hocButton").click();
    cy.get("@hocButton").filter(".nebula-btn-two-chinese-chars");
  });
});
