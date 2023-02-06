const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todoList: []
        }
    },
    created() {
        axios.get(this.apiUrl).then(response => {
            console.log(response.data);
        });
    }
}).mount('#app');