<template>
  <section>
    <pre>{{ projects.nodes }}</pre>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      projects: {}
    }
  },
  apollo: {
    projects: {
      query: gql`{
        projects {
          nodes {
            id
            name
            slug
            description
          }
        }
      }`,
    }
  }
}
</script>
