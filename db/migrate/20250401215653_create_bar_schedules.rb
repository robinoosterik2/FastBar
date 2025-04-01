class CreateBarSchedules < ActiveRecord::Migration[8.0]
  def change
    create_table :bar_schedules do |t|
      t.references :bar, null: true, foreign_key: true
      t.integer :day_of_week
      t.time :open_time
      t.time :close_time

      t.timestamps
    end
  end
end
