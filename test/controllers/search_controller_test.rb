require 'test_helper'

class SearchControllerTest < ActionDispatch::IntegrationTest
  test "search people" do
    get search_index_url(query: "john")

    assert_response :success
  end
end
