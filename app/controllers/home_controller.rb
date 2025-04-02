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
    render :services
  end

  def contact
    @active_tab = "Contact"
    render :"contact"
  end
end
