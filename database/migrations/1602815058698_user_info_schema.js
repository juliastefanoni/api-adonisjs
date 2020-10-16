'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserInfoSchema extends Schema {
  up () {
    this.create('user_infos', (table) => {
      table.increments()
      table.bigInteger('cpf').notNullable().unique()
      table.string('state', 60)
      table.date('dateBirth')
      table.bigInteger('telephone')
      table.string('address')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_infos')
  }
}

module.exports = UserInfoSchema
