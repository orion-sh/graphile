<template>
  <div class="bg-white mx-auto max-w-xl shadow-lg rounded-lg overflow-hidden mb-4">
    <div class="sm:flex sm:items-center px-6 py-4">
      <img class="block h-16 sm:h-24 mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="project.logo" :alt="project.name">
      <div class="text-center sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">{{ project.name }}</p>
          <p class="text-sm leading-tight text-grey-dark">{{ project.description }}</p>
        </div>
        <div>
          <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple ">{{ project.releases.totalCount }} Releases</button>
          <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-green text-green">{{ project.questions.totalCount }} Questions</button>
          <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red text-red">{{ project.questions.totalCount }} Bugs</button>
          <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-blue text-blue">{{ project.features.totalCount }} Features</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>
