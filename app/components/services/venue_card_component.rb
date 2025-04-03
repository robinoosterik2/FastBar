# frozen_string_literal: true

class Services::VenueCardComponent < ViewComponent::Base
  def initialize(company:)
    @company = company
  end
end
