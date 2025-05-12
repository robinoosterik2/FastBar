class Dashboard::LoginController < ApplicationController
  def login
  end

  def create_session
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      if user.confirmed?
        session[:user_id] = user.id
        user.update(last_login: Time.current)
        redirect_to dashboard_root_path, notice: "Logged in successfully"
      else
        flash.now[:alert] = "Please confirm your email first"
        render :login
      end
    else
      flash.now[:alert] = "Invalid email or password"
      render :login
    end
  end


  def destroy_session
      session.delete(:user_id)
      redirect_to dashboard_login_path, notice: "Logged out successfully"
  end
end
