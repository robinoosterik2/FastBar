class CreateOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.references :bar, null: false, foreign_key: true
      t.references :bar_keeper, null: true, foreign_key: true
      t.datetime :order_date
      t.decimal :total_price
      t.string :status

      t.timestamps
    end
  end
end
