Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker


  scope "/:locale", locale: /en|nl/ do
    get "home/home"
    namespace :dashboard do
      get "login/index"
    end
    get "dashboard/index"
    # Defines the root path route ("/")
    # root "posts#index"
    root "home#home"
    get "about", to: "home#about"
    get "services", to: "home#services"
    get "contact", to: "home#contact"
    resources :users
    get "dashboard", to: "dashboard/login#index"
  end

  # Redirect requests without a locale to include the default locale
  get "(*path)", to: redirect { |params, _req|
    locale = I18n.default_locale
    path = params[:path]
    "/#{locale}/#{path}".gsub(/\/+$/, "") # Avoid trailing slashes
  }, constraints: lambda { |req|
    !req.path.starts_with?("/#{I18n.default_locale}") &&
    !req.path.starts_with?("/en") &&
    !req.path.starts_with?("/nl") &&
    !req.path.starts_with?("/rails") # avoid redirect loop with rails engine paths like /rails/health
  }
end
