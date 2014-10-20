MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  root to: "static#index"
end
