<template>
    <div>
        <input type="text" v-model="search" placeholder="Search">
        <div v-theme:column="'light'" v-for="post in filteredPosts">
            <router-link v-bind:to="`/show/${post.id}`">
                <h3 v-rainbow>{{ post.title | toUppercase }}</h3>
            </router-link>

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
    },

    //Locally registered filters
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        },

        snippet(value) {
            return value.slice(0, 100) + '...';
        }
    },

    // Locally registered directives

    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color = "#" + Math.random().toString().slice(2, 8);
            }
        }
    }
}
</script>

<style scoped>

</style>