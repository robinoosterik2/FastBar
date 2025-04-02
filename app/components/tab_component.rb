# app/components/tab_component.rb
class TabComponent < ViewComponent::Base
  attr_reader :tabs, :active_tab

  def initialize(tabs:, active_tab: nil)
    @tabs = tabs
    @active_tab = active_tab || tabs.first[:id]
  end

  def tab_class(tab_id)
    base_class = "px-3 sm:px-4 py-2 font-medium transition-colors duration-200 border-b-2 text-sm sm:text-base whitespace-nowrap"

    if tab_id.to_s == active_tab.to_s
      "#{base_class} border-primary text-primary"
    else
      "#{base_class} border-transparent text-gray-600 hover:text-primary hover:border-gray-300"
    end
  end
end
