# == Schema Information
#
# Table name: bar_schedule_exceptions
#
#  id         :integer          not null, primary key
#  close_time :time
#  date       :date
#  open_time  :time
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bar_id     :integer          not null
#  event_id   :integer
#
# Indexes
#
#  index_bar_schedule_exceptions_on_bar_id    (bar_id)
#  index_bar_schedule_exceptions_on_event_id  (event_id)
#
# Foreign Keys
#
#  bar_id    (bar_id => bars.id)
#  event_id  (event_id => events.id)
#
require "test_helper"

class BarScheduleExceptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
