# frozen_string_literal: true

class Services::ServiceCardComponent < ViewComponent::Base
  attr_reader :icon, :title, :description, :benefits

  def initialize(icon:, title:, description:, benefits:)
    @icon = icon
    @title = title
    @description = description
    @benefits = benefits
  end
end
