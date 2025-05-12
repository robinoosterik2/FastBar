# frozen_string_literal: true

class TextInputComponent < ViewComponent::Base
  attr_reader :form, :field, :label_text, :input_type, :options

  def initialize(form:, field:, label_text: nil, input_type: :text_field, **options)
    @form = form
    @field = field
    @label_text = label_text || field.to_s.humanize
    @input_type = input_type
    @options = options
  end

  def input_classes
    "w-full px-4 py-2 rounded border border-gray-300 focus:ring-primary focus:border-primary transition"
  end
end
