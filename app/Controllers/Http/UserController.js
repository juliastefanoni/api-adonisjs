'use strict'
const User = use('App/Models/User')
const UserInfo = use('App/Models/UserInfo')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
class UserController {
  async index() {
    const users = await User.query()
      .setVisible(['uuid', 'email', 'name'])
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

    const user = await User.create({ email, password, name })

    await user.userInfo().create({
      cpf,
      state,
      dateBirth,
      telephone,
      address
    })

    return {
      uuid: user.uuid,
      name,
      email,
      cpf
    }
  }

  async show({ params, response }) {
    const userExists = await User.findBy('uuid', params.id)

    if (!userExists) {
      return response.status(401).send('User not exists')
    }

    const userInfos = await userExists
      .userInfo()
      .setHidden(['created_at', 'updated_at', 'user_id', 'id'])
      .fetch()

    return {
      uuid: params.id,
      email: userExists.email,
      name: userExists.name,
      userInfos
    }
  }
}

module.exports = UserController
