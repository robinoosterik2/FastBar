class CreateBarScheduleExceptions < ActiveRecord::Migration[8.0]
  def change
    create_table :bar_schedule_exceptions do |t|
      t.references :bar, null: false, foreign_key: true
      t.references :event, null: true, foreign_key: true
      t.date :date
      t.time :open_time
      t.time :close_time

      t.timestamps
    end
  end
end
