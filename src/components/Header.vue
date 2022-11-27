<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Add Post</router-link>
            </li>
            <li>
                <router-link to="/show">Show Blogs</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {

}

</script>

<style scoped>
nav {
    padding: 20px;
    background-color: darkgray;
}

ul {
    display: flex;
}

nav ul li {
    list-style: none;
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    padding: 10px;
}

.router-link-exact-active {
    background-color: #eee;
    color: red;
    border-radius: 8px;
}
</style>