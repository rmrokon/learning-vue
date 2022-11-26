<template>
    <div>
        <div v-theme:column="'dark'" v-for="post in posts">
            <h3 v-rainbow>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import FormHelper from './FormHelper.vue'
export default {
    components: {
        'form-helper': FormHelper
    },
    data() {
        return {
            posts: [],
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(res => this.posts = res.body.slice(0, 10));
    }
}
</script>

<style scoped>

</style>