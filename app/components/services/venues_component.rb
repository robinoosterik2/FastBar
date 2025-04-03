# frozen_string_literal: true

class Services::VenuesComponent < ViewComponent::Base
  def initialize(companies:)
    @companies = companies
  end
end
