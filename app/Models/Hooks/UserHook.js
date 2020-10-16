'use strict'

const uuidv4 = require('uuid/v4')

const UserHook = exports = module.exports = {}

UserHook.generateUUID = async user => {
  user.uuid = uuidv4()
}
