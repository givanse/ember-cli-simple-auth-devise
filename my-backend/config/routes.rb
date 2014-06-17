Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  root to: "static#index"
  namespace :api do
    get :csrf, to: 'csrf#index'
  end
end
