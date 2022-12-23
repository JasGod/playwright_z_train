@Registration
Feature: User Registration Process Functionality



  @reg01
  Scenario Outline: Registration
    Given i'm Ztrain login page
    When I click on register button
    And I fill in the form with the information "<Email>", "<Mot de passe>", "<Confirmer votre mot de passe>"
    And I clicks validation button
    Then The user is connected "Z-Train"


    Examples:
      |      Email     | Mot de passe |Confirmer votre mot de passe|
      |takio@gmail.com |   Ulmate10   |          Ulmate10          |
