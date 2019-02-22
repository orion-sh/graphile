<template>
  <section>
    <pre>{{ allProjects.nodes }}</pre>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      allProjects: {}
    }
  },
  apollo: {
    allProjects: {
      query: gql`{
        allProjects {
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
