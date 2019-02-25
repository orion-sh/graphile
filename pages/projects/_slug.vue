<template>
  <section class="py-4">
    <n-link to="/">Back to projects</n-link>
    <pre>{{ projectBySlug }}</pre>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      projectBySlug: {}
    }
  },
  apollo: {
    projectBySlug() {
      return {
        query: gql`{
          projectBySlug(slug: "${this.$route.params.slug}") {
            id
            name
            logo
            url
            state
            projectCategories {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
            projectCollaborators {
              edges {
                node {
                  user {
                    name
                    username
                    twitter
                    userSocials {
                      edges {
                        node {
                          id
                          username
                          provider
                        }
                      }
                    }
                  }
                }
              }
            }
            activities(first: 10, orderBy: CREATED_AT_DESC) {
              edges {
                node {
                  id
                  key
                }
              }
            }
          }
        }
        `
      }
    }
  }
}
</script>
