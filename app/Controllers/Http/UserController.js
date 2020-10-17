'use strict'
const User = use('App/Models/User')
const UserInfo = use('App/Models/UserInfo')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
class UserController {
  async index() {
    const users = await User.query()
      .setVisible(['uuid', 'email'])
      .with('userInfo', (builder) => {
        builder.setVisible(['name'])
      })
      .fetch()

    return users
  }

  async store({ request, response }) {
    const {
      email,
      password,
      name,
      cpf,
      state,
      dateBirth,
      telephone,
      address
    } = request.all()

    const userExists = await User.findBy('email', email)
    const cpfExists = await UserInfo.findBy('cpf', cpf)

    if (userExists || cpfExists) {
      return response.status(401).send('User alread exists')
    }

    const user = await User.create({ email, password })

    await user.userInfo().create({
      cpf,
      name,
      state,
      dateBirth,
      telephone,
      address
    })

    return {
      id: user.uuid,
      name,
      email,
      cpf
    }
  }
}

module.exports = UserController
