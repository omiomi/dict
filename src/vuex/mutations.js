export const STORAGE_KEY = 'htdata-app'
export const search = {
  search: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
  addKeywords (state, { text }) {
    state.search.push({
      text,
      done: false
    })
  },

  delKeywords (state, { search }) {
    state.search.splice(state.search.indexOf(search), 1)
  },

  toggleKeywords (state, { search }) {
    search.done = !todo.done
  },

  editKeywords (state, { search, value }) {
    search.text = value
  },

  toggleAll (state, { done }) {
    state.search.forEach((search) => {
      search.done = done
    })
  },

  clearCompleted (state) {
    state.search = state.todos.filter(search => !search.done)
  }
}
