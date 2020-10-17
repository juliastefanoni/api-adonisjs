'use strict'

const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'UserHook.generateUUID')
    this.addHook('beforeCreate', 'UserHook.encryptPassword')
  }

  userInfo() {
    return this.hasOne('App/Models/UserInfo')
  }
}

module.exports = User
