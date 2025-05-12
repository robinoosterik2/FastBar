class Dashboard::RegisterController < ApplicationController
  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.confirmation_email(@user).deliver_now
      redirect_to dashboard_login_path, notice: "Check your email to confirm your account."
    else
      flash.now[:alert] = "Something went wrong"
      render :new
    end
  end

  def confirm_email
    user = User.find_by(confirmation_token: params[:token])

    if user.nil?
      redirect_to dashboard_login_path, alert: "Invalid confirmation link"
      return
    end

    if user.confirmed?
      redirect_to dashboard_login_path, notice: "Account already confirmed"
    elsif user.confirmation_token_valid?
      user.confirm!
      redirect_to dashboard_login_path, notice: "Email confirmed! You can now log in."
    else
      redirect_to dashboard_login_path, alert: "Confirmation link has expired. Please request a new one."
    end
  end

  def resend_confirmation
    user = User.find_by(email: params[:email])
    if user && !user.confirmed?
      user.update(
        confirmation_token: SecureRandom.urlsafe_base64(32),
        confirmation_sent_at: Time.current
      )
      UserMailer.confirmation_email(user).deliver_now
      redirect_to dashboard_login_path, notice: "Confirmation email resent."
    else
      redirect_to dashboard_login_path, alert: "User not found or already confirmed."
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :first_name, :last_name, :date_of_birth)
  end
end
