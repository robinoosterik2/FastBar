require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get home_home_url(locale: I18n.default_locale) # Include the default locale in the URL
    assert_response :success
  end
end
