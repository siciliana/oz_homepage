OzHomepage::Application.routes.draw do
  
  get "gallery/index"

  get "welcome/index"

  root :to => 'welcome#index'

end
