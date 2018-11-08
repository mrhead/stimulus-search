require 'test_helper'

class PeopleControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    person = people(:john_doe)

    get person_url(person)

    assert_select "p", text: person.name
  end
end
