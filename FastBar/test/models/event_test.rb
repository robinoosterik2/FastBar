# == Schema Information
#
# Table name: events
#
#  id                     :integer          not null, primary key
#  description            :text
#  end_datetime           :datetime
#  event_type             :string
#  is_publicly_accessible :boolean
#  name                   :string
#  start_datetime         :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  company_id             :integer          not null
#
# Indexes
#
#  index_events_on_company_id  (company_id)
#
# Foreign Keys
#
#  company_id  (company_id => companies.id)
#
require "test_helper"

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
