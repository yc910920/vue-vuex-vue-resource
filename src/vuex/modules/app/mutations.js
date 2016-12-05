import * as API_TYPE from './mutation-type'

const mutations = {
 
  [API_TYPE.START_LOADING] (state) {
    state.loading = true
  },
  [API_TYPE.FINISH_LOADING] (state) {
    state.loading = false
  }
}
export default mutations
