import fetch from '../utils/fetch'

export function fetchList (query) {
  console.log('article_fetchlist')
  return fetch({
    url: 'api/admin/article/list',
    method: 'get',
    params: query
  })
}
