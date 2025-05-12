class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # allow_browser versions: :modern

  helper_method :current_user, :logged_in?
  around_action :switch_locale
  before_action :set_locale

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  private

  def current_user
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def logged_in?
      current_user.present?
  end

  def require_login
      unless logged_in?
          redirect_to dashboard_login_path, alert: "Please log in first"
      end
  end

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
