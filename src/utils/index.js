//Backend URL
const url = `${process.env.REACT_APP_BACKEND}`;

//Fetch all categories
export const fetchCategories = () =>
  fetch(`${url}/categories`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .then(data => data.categories)
    .catch(err => { console.log('Categoryies request failed', err); })

//Fetch all posts
export const fetchPosts = () =>
  fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log('Posts request failed', err); })

//Fetch posts in a category
export const fetchPostsInCategory = (category) =>
  fetch(`${url}/${category}/posts`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log('Posts by category request failed', err); })

//Get an individual post by ID
export const fetchPost = (id) =>
  fetch(`${url}/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log(`Request for post ID: ${id} failed`, err); })

//Add new post
export const addPost = (data) =>
  fetch(`${url}/posts`, {
    method: 'POST',
    headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json'},
    body: JSON.stringify(data) })
    .then(data => data.json())
    .catch(err => { console.log(`Request to add post failed`, err); })

//Edit post
export const editPost = (id, data) =>
  fetch(`${url}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data) })
    .then(data => data.json())
    .catch(err => { console.log(`Request to edit post ${id} failed`, err); })

//Delete post
export const deletePost = (id) =>
  fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': 'whatever-you-want' } })
    .then(data => data.json())
    .catch(err => { console.log(`Request to delete post ID: ${id} failed`, err); })

//Change post score
export const changeVoteScore = (id, voteType) =>
  fetch(`${url}/posts/${id}`, {
    method: 'POST',
    headers: { 'Authorization': 'whatever-you-want', 'Content-Type': 'application/json' },
    body: JSON.stringify({ option: voteType })
  }).then(data => data.json())
