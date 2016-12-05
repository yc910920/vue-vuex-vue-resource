import * as API_TYPE from './mutation-type'
import {dateFormat} from '../../../utils/common'


const mutations = {
  [API_TYPE.FETCH_CONTENT_SUCCESS] (state, data) {
   
    
    state.contentLists = data.d.list
    state.count = parseInt(data.d.count)

  }
  
}

export default mutations