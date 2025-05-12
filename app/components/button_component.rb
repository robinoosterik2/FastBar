class ButtonComponent < ViewComponent::Base
  ALLOWED_VARIANTS = %i[primary secondary warning error].freeze
  ALLOWED_ICON_POSITIONS = %i[start end none].freeze

  attr_reader :text, :variant, :path, :icon, :icon_position, :method

  def initialize(text:, variant: :primary, path: "#", icon: nil, icon_position: :none, method: :get)
    @text = text
    @variant = ALLOWED_VARIANTS.include?(variant.to_sym) ? variant.to_sym : :primary
    @path = path
    @icon = icon
    @icon_position = ALLOWED_ICON_POSITIONS.include?(icon_position.to_sym) ? icon_position.to_sym : :none
    @method = method.to_sym
  end

  def classes
    base = "mx-2 px-4 py-2 rounded font-semibold focus:outline-none flex items-center justify-center hover:scale-105 text-text transition-all duration-200 ease-in-out hover:shadow-lg relative"
    variant_classes = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      warning: "bg-warning",
      error: "bg-error"
    }
    "#{base} #{variant_classes[variant]}"
  end

  def render_icon
    return nil unless icon && icon_position != :none

    position_class = icon_position == :start ? "left-4" : "right-4"
    "<i class=\"#{icon} #{position_class} absolute\"></i>".html_safe
  end

  def turbo_data
    method != :get ? { turbo_method: method } : {}
  end
end
