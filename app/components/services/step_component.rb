# frozen_string_literal: true

class Services::StepComponent < ViewComponent::Base
  attr_reader :number, :title, :description

  def initialize(number:, title:, description:)
    @number = number
    @title = title
    @description = description
  end
end
