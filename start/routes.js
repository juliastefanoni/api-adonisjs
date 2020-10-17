const Route = use('Route')

Route.resource('users', 'UserController')
  .validator(new Map([[['users.store'], ['StoreUser']]]))
  .apiOnly()
