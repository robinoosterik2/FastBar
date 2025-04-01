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
#  bar_id      :integer
#
# Indexes
#
#  index_bar_schedules_on_bar_id  (bar_id)
#
# Foreign Keys
#
#  bar_id  (bar_id => bars.id)
#
class BarSchedule < ApplicationRecord
  belongs_to :bar
end
