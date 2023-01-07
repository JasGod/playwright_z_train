@pdt
Feature: Product detail page
  As a user
  I want to be able to add and remove a product from my bag
  So that I can command something


  @pdt01
  Scenario: Add a product to my bag
    Given I am connected to my account "ubogni@gmail.com" and "Ulrich77"
    When I select one item
    And I added quantity to item and valided
    Then I can see the product in my bag
