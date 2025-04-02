class ButtonComponent < ViewComponent::Base
  ALLOWED_VARIANTS = %i[primary secondary].freeze

  attr_reader :text, :variant

  def initialize(text:, variant: :primary)
    @text = text
    @variant = ALLOWED_VARIANTS.include?(variant.to_sym) ? variant.to_sym : :primary
  end

  def classes
    base = "mx-2 px-4 rounded font-semibold focus:outline-none"
    variant_classes = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }
    "#{base} #{variant_classes[variant]}"
  end
end
