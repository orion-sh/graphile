import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'

export default {
  pgConfig: 'postgres://localhost:5432/cmty',
  options: {
    appendPlugins: [PgSimplifyInflectorPlugin],
    // Optional customisation
    graphileBuildOptions: {
      /*
      * Uncomment if you are using `simpleCollections: 'only'` and you never
      * want relay connections
      */
      //pgOmitListSuffix: true,
      /*
      * Uncomment if you want 'userPatch' instead of 'patch' in update
      * mutations.
      */
      //pgSimplifyPatch: false,
      /*
      * Uncomment if you want 'allUsers' instead of 'users' at root level.
      */
      //pgSimplifyAllRows: false,
    }
  }
}
