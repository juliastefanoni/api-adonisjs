'use strict'

const uuidv4 = require('uuid/v4')

const Hash = use('Hash')

const UserHook = (exports = module.exports = {})

UserHook.generateUUID = async (user) => {
  user.uuid = uuidv4()
}

UserHook.encryptPassword = async (user) => {
  if (user.dirty.password) {
    user.password = await Hash.make(user.password)
  }
}
