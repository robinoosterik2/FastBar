class BarKeeper < ApplicationRecord
  belongs_to :user
  belongs_to :bar
  belongs_to :company
end
