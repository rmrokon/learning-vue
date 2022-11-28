<template>
    <div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.body }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },

    created() {
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(res => this.blog = res.body);
    }
}
</script>