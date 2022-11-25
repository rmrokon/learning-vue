<template>
    <div>
        <h3>Learning From: </h3>
        <h1>{{ title }}</h1>
        <button v-on:click="changeTitle">Change Title</button>
        <button v-on:click="changeTitleFromBus">Change Title from bus</button>
        <ul>
            <li v-for="channel in channels">{{ channel }}</li>
        </ul>
    </div>
</template>

<script>
import { bus } from '../main';

export default {
    props: {
        channels: {
            type: Array,
            required: true,
        },
        title: {
            type: String
        }
    },
    data() {
        return {

        }
    },
    methods: {
        changeTitle: function () {
            this.$emit('changeTitle', "Vue is Impressive!")
        },
        changeTitleFromBus: function () {
            this.title = 'Title From Bus!';
            bus.$emit('changeTitleFromBus', 'Title From Bus!')
        }
    },
    //Life cycle hooks
    // beforeCreate() {
    //     alert('Before Create');
    // },

    // created() {
    //     alert('created');
    // },

    // beforeMount() {
    //     alert('before Mount');
    // },

    // mounted() {
    //     alert('Mounted');
    // },
    // beforeUpdate() {
    //     alert('Before Update!');
    // },

    // updated() {
    //     alert('Updated!');
    // }

}
</script>

<style scoped>
div {
    background-color: lightgreen;
}

h3,
ul {
    text-align: center;
}

h1 {
    text-align: center;
}
</style>