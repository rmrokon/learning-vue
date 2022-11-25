<template>
    <div>
        <form-helper>
            <div slot="form-fields">
                <input type="text" v-model.lazy="blog.title">
                <textarea name="" placeholder="Ented text" v-model.lazy="blog.content"></textarea>

                <div id="checkboxes">
                    <label>Cat 1</label>
                    <input type="checkbox" value="cat 1" v-model="blog.cats">
                    <label>Cat 2</label>
                    <input type="checkbox" value="cat 2" v-model="blog.cats">
                    <label>Cat 3</label>
                    <input type="checkbox" value="cat 3" v-model="blog.cats">
                </div>

                <div>
                    <select v-model="blog.author">
                        <option v-for="author in authors">{{ author }}</option>
                    </select>
                </div>
            </div>
        </form-helper>

        <div id="preview">
            <h3>Title: {{ blog.title }}</h3>
            <p>Description:</p>
            <p>{{ blog.content }}</p>
            <p>Cats:</p>
            <ul>
                <li v-for="cat in blog.cats">{{ cat }}</li>
            </ul>

            <p>Authos:</p>
            <ul>
                <li>{{ blog.author }}</li>
            </ul>
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
            blog: {
                title: '',
                content: '',
                cats: [],
                author: ''
            },
            authors: ['Rokon', 'Naeim', 'Reza']
        }
    }
}
</script>

<style scoped>

</style>