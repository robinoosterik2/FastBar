class CreateStocks < ActiveRecord::Migration[8.0]
  def change
    create_table :stocks do |t|
      t.references :product, null: false, foreign_key: true
      t.references :bar, null: false, foreign_key: true
      t.integer :amount

      t.timestamps
    end
  end
end
