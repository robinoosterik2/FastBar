# == Schema Information
#
# Table name: bars
#
#  id         :integer          not null, primary key
#  location   :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  company_id :integer          not null
#
# Indexes
#
#  index_bars_on_company_id  (company_id)
#
# Foreign Keys
#
#  company_id  (company_id => companies.id)
#
require "test_helper"

class BarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
