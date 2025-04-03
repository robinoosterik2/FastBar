class HomeController < ApplicationController
  def home
    @active_tab = "Home"
  end

  def about
    @active_tab = "About"
    render :about
  end

  def services
    @active_tab = "Services"

    if params[:query].present?
      @companies = Company
        .where("LOWER(name) LIKE ?", "%#{params[:query].strip.downcase}%")
        .limit(10)

    else
      @companies = []
    end
  end

  def contact
    @active_tab = "Contact"
    render :"contact"
  end
end
