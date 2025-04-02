class PagesController < ApplicationController
  def home
  end
  def log_click
    Rails.logger.info("🚀 Button clicked at #{Time.current}")
    head :ok
  end
end
