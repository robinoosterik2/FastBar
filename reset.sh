#!/bin/bash
# reset.sh – Fully reset Rails 7.1+ app using SQLite

echo "===> Deleting SQLite database files..."
rm -f storage/*.sqlite3 db/*.sqlite3

echo "===> Deleting old schema dumps..."
rm -f db/schema.rb db/structure.sql

echo "===> Deleting migration files..."
find db/migrate -type f -name "*.rb" -delete

echo "===> Deleting model files (excluding ApplicationRecord)..."
find app/models -type f -name "*.rb" ! -name "application_record.rb" -delete

echo "===> Deleting test model files..."
rm -f test/models/*.rb

echo "===> Deleting test fixtures..."
rm -f test/fixtures/*.yml

echo "===> Recreating database..."
bin/rails db:create

echo "===> Re-running model generators..."
./db_commands.sh

echo " MAKE SURE TO EDIT MIGRATIONS TO INCLUDE 'null: true' "
echo "bar reference barkeepers.rb"
echo "bar reference bar_schedule.rb"
echo "event reference bar_schedule_exceptions.rb"
echo "barkeeper reference order.rb"
echo "===> Done. Now you can run:"
echo "    bin/rails db:migrate"
