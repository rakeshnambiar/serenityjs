@component:UI
@Release:Sprint1
@version:V1.0

@EMPC_RegressionTests
Feature: Europe PMC Sanity Test Scenarios

  @TC01_EPMC_RegressionTest  @Browser
  Scenario: To check the 'Author search'
    Given I am a new User
    When I open the europePMC Website
    And Perform an Author name "Kreuger AL" search
    Then I should be able to see all the articles matching to the Author name entered