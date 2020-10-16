'use strict'

const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot();
    this.addHook("beforeCreate", "UserHook.generateUUID");
  }

  static get primaryKey() {
    return "uuid";
  }

  static get incrementing() {
    return false;
  }
}

module.exports = User