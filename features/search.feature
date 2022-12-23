@search
Feature: Search
  As a user
  I want to search for products
  So that I can quickly find what I am looking for


  @srch01
  Scenario Outline: srch01-valid search
    Given I am connected to my account "ubogni@gmail.com" and "Ulrich77"
    When I do a multiple keyword search for "<multiple_keyword>"
    Then I see a multiple keyword search result page
    Examples:
      | multiple_keyword |
      | T-shirt           |
      | Ampoule          |

