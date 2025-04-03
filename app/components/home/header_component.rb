class Home::HeaderComponent < ViewComponent::Base
  attr_reader :active_tab

  def initialize(active_tab:)
    @active_tab = active_tab
  end
end
