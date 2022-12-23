@login
Feature: Login
  As a visitor of the ecommerce website
  I want to be able to login

  Background: pre-requisites
    Given i open Ztrain login page

  @log01
  Scenario Outline: log01 - Login successfully
    When I enter email address "<email>" and password "<password>"
    And I clicks to the login button
    Then The user is connected with  "Z-Train"
    Examples:
      |          email      |     password    |
      |  ubogni@gmail.com   |   Ulrich77      |


