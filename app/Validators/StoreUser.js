'use strict'

class StoreUser {
  get validateAll() {
    return true
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:6',
      name: 'required',
      cpf: 'required|unique:user_infos'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'password.min': 'Your password must be longer than 6 characteres',
      'name.required': 'You must provide a name',
      'cpf.required': 'You must provide a CPF.',
      'cpf.unique': 'This CPF is already registered.'
    }
  }
}

module.exports = StoreUser
