'use strict'

const Env = use('Env')

module.exports = {
  connection: Env.get('DB_CONNECTION', 'pg'),

  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis'),
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
