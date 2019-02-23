<template>
  <section class="py-4">
    <ProjectSummary v-for="project of projects.nodes" :key="project.slug" :project="project"/>
  </section>
</template>

<script>
import ProjectSummary from '~/components/ProjectSummary'
import gql from 'graphql-tag'

export default {
  components: {
    ProjectSummary
  },
  data () {
    return {
      projects: {}
    }
  },
  apollo: {
    projects: {
      query: gql`{
        projects(condition: { state: "accepted" }) {
          nodes {
            name
            slug
            description
            logo
            releases {
              totalCount
            }
            questions {
              totalCount
            }
            bugs {
              totalCount
            }
            features {
              totalCount
            }
            contributions {
              totalCount
            }
            commits {
              totalCount
            }
          }
        }
      }
      `,
    }
  }
}
</script>
