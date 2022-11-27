<template>
    <div>
        <input type="text" v-model="search" placeholder="Search">
        <div v-theme:column="'dark'" v-for="post in filteredPosts">
            <h3 v-rainbow>{{ post.title | to - uppercase }}</h3>
            <p>{{ post.body | snippet }}</p>
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
            search: ''
        }
    },
    computed: {
        filteredPosts: function () {
            return this.posts.filter(post => {
                return post.title.match(this.search)
            })
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(res => this.posts = res.body.slice(0, 10));
    }
}
</script>

<style scoped>

</style>