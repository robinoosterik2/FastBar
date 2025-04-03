require "test_helper"

class Dashboard::LoginControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dashboard_login_index_url(locale: I18n.default_locale) # Include the default locale in the URL
    assert_response :success
  end
end
