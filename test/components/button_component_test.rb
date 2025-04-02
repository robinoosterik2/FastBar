# frozen_string_literal: true

require "test_helper"

class ButtonComponentTest < ViewComponent::TestCase
  def test_renders_primary_button
    render_inline(ButtonComponent.new(text: "Click Me", variant: :primary, path: "/test_path"))
    assert_selector "a.bg-blue-600.text-white.hover\\:bg-blue-700", text: "Click Me"
  end

  def test_renders_secondary_button
    render_inline(ButtonComponent.new(text: "Click Me", variant: :secondary, path: "/test_path"))
    assert_selector "a.bg-gray-200.text-gray-800.hover\\:bg-gray-300", text: "Click Me"
  end

  def test_defaults_to_primary_variant
    render_inline(ButtonComponent.new(text: "Click Me", path: "/test_path"))
    assert_selector "a.bg-blue-600.text-white.hover\\:bg-blue-700", text: "Click Me"
  end

  def test_renders_with_custom_path
    render_inline(ButtonComponent.new(text: "Click Me", variant: :primary, path: "/custom_path"))
    assert_selector "a[href='/custom_path']", text: "Click Me"
  end

  def test_invalid_variant_defaults_to_primary
    render_inline(ButtonComponent.new(text: "Click Me", variant: :invalid, path: "/test_path"))
    assert_selector "a.bg-blue-600.text-white.hover\\:bg-blue-700", text: "Click Me"
  end
end
