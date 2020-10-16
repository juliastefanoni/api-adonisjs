const Route = use('Route')
const User = use('App/Models/User')

const user = new User()

Route.get('users', async () => {
  return await User.all()
})
