<template>
    <footer>
        <h3>{{ title }}</h3>
        <p>{{ copyright }}</p>
    </footer>
</template>


<script>
import { bus } from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        console.log('Inside footer!');
        return {
            copyright: 'Copyright 2022 Roknuzzaman.'
        }
    },
    created() {
        bus.$on('changeTitleFromBus', (data) => {
            this.title = data;
        })
    }
}
</script>

<style scoped>
footer p,
h3 {
    text-align: center;
}
</style>