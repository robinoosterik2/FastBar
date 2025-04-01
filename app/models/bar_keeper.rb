# == Schema Information
#
# Table name: bar_keepers
#
#  id         :integer          not null, primary key
#  salary     :decimal(, )
#  working    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bar_id     :integer
#  company_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_bar_keepers_on_bar_id      (bar_id)
#  index_bar_keepers_on_company_id  (company_id)
#  index_bar_keepers_on_user_id     (user_id)
#
# Foreign Keys
#
#  bar_id      (bar_id => bars.id)
#  company_id  (company_id => companies.id)
#  user_id     (user_id => users.id)
#
class BarKeeper < ApplicationRecord
  belongs_to :user
  belongs_to :bar
  belongs_to :company
end
