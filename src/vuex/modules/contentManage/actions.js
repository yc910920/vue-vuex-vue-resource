import vue from 'vue'

const _get = ({ url, query }, commit) => {
  let _url
  if (query) {
    _url = `http://highstyle-admin.ifeng.com${url}?${query}`
  } else {
    _url = `http://highstyle-admin.ifeng.com${url}`
  }

  return vue.http.get(_url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

const _post = ({ url, query }, commit) => {
  
  let _url = `http://highstyle-admin.ifeng.com${url}`
  
  return vue.http.post(_url,query)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}


export const fetchContentLists = ({ commit }, page) => {

  const url = '/topic/GetAdPositionList'
  const query = `num=15&p=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      json = JSON.parse(json)
      console.log(json)
      if (json.c === 0) {
        return commit('FETCH_CONTENT_SUCCESS', json)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

export const postContentLists = ({ commit }, query) => {

  const url = '/topic/GetAdPositionList'
  
  return _post({url, query}, commit)
    .then((json) => {
      json = JSON.parse(json)
      console.log(json)
      if (json.c === 0) {
        return commit('FETCH_CONTENT_SUCCESS', json)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

