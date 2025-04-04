# == Schema Information
#
# Table name: orders
#
#  id           :integer          not null, primary key
#  order_date   :datetime
#  status       :string
#  total_price  :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  bar_id       :integer          not null
#  barkeeper_id :integer
#  user_id      :integer          not null
#
# Indexes
#
#  index_orders_on_bar_id        (bar_id)
#  index_orders_on_barkeeper_id  (barkeeper_id)
#  index_orders_on_user_id       (user_id)
#
# Foreign Keys
#
#  bar_id        (bar_id => bars.id)
#  barkeeper_id  (barkeeper_id => barkeepers.id)
#  user_id       (user_id => users.id)
#
class Order < ApplicationRecord
  belongs_to :user
  belongs_to :bar
  belongs_to :barkeeper
end
