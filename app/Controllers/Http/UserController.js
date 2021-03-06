'use strict'
const User = use('App/Models/User')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
class UserController {
  async index() {
    const users = await User.query()
      .setVisible(['uuid', 'email', 'name'])
      .fetch()

    return users
  }

  async store({ request }) {
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

  async show({ params }) {
    const user = await User.findByOrFail('uuid', params.id)

    const userInfos = await user
      .userInfo()
      .setHidden(['created_at', 'updated_at', 'user_id', 'id'])
      .fetch()

    return {
      uuid: params.id,
      email: user.email,
      name: user.name,
      userInfos
    }
  }

  async update({ params, request, response }) {
    const user = await User.findBy('uuid', params.id)
    const { email, name, state, telephone, address } = request.all()

    if (user.email !== email) {
      const userExists = await User.findBy('email', email)

      if (userExists) {
        return response.status(401).send('User already exists')
      }
    }

    user.merge({ email: email, name: name })
    await user.save()
    await user
      .userInfo()
      .where('user_id', user.id)
      .update({ state, telephone, address })

    const userInfos = await user
      .userInfo()
      .setHidden(['created_at', 'updated_at', 'user_id', 'id'])
      .fetch()

    return {
      uuid: params.id,
      email: email,
      name: name,
      userInfos
    }
  }

  async destroy({ params }) {
    const user = await User.findByOrFail('uuid', params.id)
    await user.delete()

    return 'User deleted'
  }
}

module.exports = UserController
