# == Schema Information
#
# Table name: stocks
#
#  id         :integer          not null, primary key
#  amount     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bar_id     :integer          not null
#  product_id :integer          not null
#
# Indexes
#
#  index_stocks_on_bar_id      (bar_id)
#  index_stocks_on_product_id  (product_id)
#
# Foreign Keys
#
#  bar_id      (bar_id => bars.id)
#  product_id  (product_id => products.id)
#
class Stock < ApplicationRecord
  belongs_to :product
  belongs_to :bar
end
