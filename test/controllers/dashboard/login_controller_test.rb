require "test_helper"

class Dashboard::LoginControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_login_index_url
    assert_response :success
  end
end
