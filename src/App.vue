<template>
  <div>
    <KeepAlive>
      <component v-bind:is="component"></component>
    </KeepAlive>
    <button v-on:click="component = 'form-one'">Show component 1</button>
    <button v-on:click="component = 'form-two'">Show component 2</button>
    <!-- <form-helper>
      <h3 slot="form-header">This is form header!</h3>

      <div slot="form-fields">
        <input type="email" placeholder="Enter your email">
        <input type="password" placeholder="Enter your password">
      </div>

      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper> -->
  </div>
</template>

<script>
import FormOne from './components/FormOne.vue'
import FormTwo from './components/FormTwo.vue'

export default {
  components: {
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      component: 'form-one'
    }
  }
}
</script>

<style scoped>

</style>
