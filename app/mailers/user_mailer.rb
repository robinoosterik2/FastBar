class UserMailer < ApplicationMailer
  default from: "no-reply@example.com"

  def confirmation_email(user)
    @user = user
    @url = confirm_dashboard_email_url(token: @user.confirmation_token)
    mail(to: @user.email, subject: "Confirm your email")
  end
end
