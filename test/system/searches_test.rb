require "application_system_test_case"

class SearchesTest < ApplicationSystemTestCase
  test "search" do
    person = people(:john_doe)

    visit root_path

    fill_in placeholder: "Search people by name", with: person.name

    within ".search__results" do
      click_link person.name
    end

    assert_selector "p", text: person.name
  end
end
