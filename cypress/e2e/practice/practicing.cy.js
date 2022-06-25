
describe("React TodoMVC", () => {
  const TODO_ITEM_ONE = "Buy Milk"
  const TODO_ITEM_TWO = "Pay Rent"
  const TODO_ITEM_THREE = "Pickup Dry Cleaning"

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it("adds three todos", () => {
    cy.createDefaultTodos()
    cy.get(".todo-list li").should("have.length", 3)
  })

it("should append new items to the bottom of the list", () => {
  cy.createDefaultTodos()

  // Todo 1
  cy.get(".todo-list li").eq(0).find("label").contains(TODO_ITEM_ONE)

  // Todo 2
  cy.get(".todo-list li").eq(1).find("label").contains(TODO_ITEM_TWO)

  // Todo 3
  cy.get(".todo-list li").eq(2).find("label").contains(TODO_ITEM_THREE)

  cy.get(".todo-count").contains("3 items left")
})

})