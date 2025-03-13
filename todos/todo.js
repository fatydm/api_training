async function getTodos(query = '') {
        const url = `https://dummyjson.com/todos/search?q=${query}`
        const response = await fetch(url)
        const data = await response.json()
    }
    getTodos()