class Order < ApplicationRecord
  belongs_to :user
  belongs_to :bar
  belongs_to :barkeeper
end
