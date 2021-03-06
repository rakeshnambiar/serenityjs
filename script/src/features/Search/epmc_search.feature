Feature: Europe PMC Sanity Test Scenarios

  In order to perform the searches in EuropePMC system
  As as researcher
  I should have the provision on the home page

  @TC01_EPMC_RegressionTest   @RegressionTest
  Scenario Outline: To check the 'Author search'

    Given I am a new User
    When I open the europePMC Website
    And Perform an "<Author>" search
    Then I should be able to see all the articles matching to the Author name entered

    Examples:
      | Author      |
      | Kreuger AL  |
      | Jo McEntyre |
      | Shahid Khan |