import { join } from 'path'
import consola from 'consola'
import { postgraphile } from 'postgraphile'

const logger = consola.withScope('postgraphile')

export default function (moduleOptions) {
  const options = this.options.postgraphile || moduleOptions || {}

  // See https://www.graphile.org/postgraphile/usage-library/#api-postgraphilepgconfig-schemaname-options
  options.pgConfig = options.pgConfig || 'postgres:///'
  options.schemaName = options.schemaName || 'public'
  options.options = options.options || {}
  // Activate graphiql on dev
  if (this.options.dev && typeof options.options.graphiql === 'undefined') {
    options.options.graphiql = true
  }
  // Activate enhanceGraphiql graphiql on dev
  if (this.options.dev && typeof options.options.enhanceGraphiql === 'undefined') {
    options.options.enhanceGraphiql = true
  }

  // Add middleware
  logger.info(`Connecting PostGraphile to ${options.pgConfig}`)
  this.addServerMiddleware({
    path: '/postgraphile',
    handler: postgraphile(options.pgConfig, options.schemaName, options.options)
  })

  // Log server infos
  this.nuxt.hook('listen', (server, { host, port, https }) => {
    const serverUrl = `http${https ? 's' : ''}://${host}:${port}/postgraphile`

    logger.info(`GraphQL endpoint: ${serverUrl}/graphql`)
    if (options.options.graphiql) {
      logger.info(`GraphQL UI endpoint: ${serverUrl}/graphiql`)
    }
  })
}
