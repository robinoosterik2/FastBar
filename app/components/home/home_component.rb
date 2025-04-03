class Home::HomeComponent < ViewComponent::Base
  renders_one :pageContent

  attr_reader :active_tab


  def initialize(active_tab: "Home")
    @active_tab = active_tab
  end
end
