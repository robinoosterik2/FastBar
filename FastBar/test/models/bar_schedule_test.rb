# == Schema Information
#
# Table name: bar_schedules
#
#  id          :integer          not null, primary key
#  close_time  :time
#  day_of_week :integer
#  open_time   :time
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  bar_id      :integer          not null
#
# Indexes
#
#  index_bar_schedules_on_bar_id  (bar_id)
#
# Foreign Keys
#
#  bar_id  (bar_id => bars.id)
#
require "test_helper"

class BarScheduleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
