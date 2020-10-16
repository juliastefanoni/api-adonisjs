'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'UserHook.generateUUID')
  }

  userInfo () {
    return this.hasOne('App/Models/UserInfo')
  }
}

module.exports = User
