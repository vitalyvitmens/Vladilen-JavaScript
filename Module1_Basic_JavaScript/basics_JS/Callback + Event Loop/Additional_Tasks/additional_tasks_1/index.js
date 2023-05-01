const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`

const renderPost = async (...postId) => {
  try {
    const requestsPosts = postId.map((id) => fetch(`${POSTS_URL}/${id}`))
    const responsesPosts = await Promise.all(requestsPosts)
    const allPosts = await Promise.all(
      responsesPosts.map((data) => data.json())
    )

    const title = document.querySelector(`.post__title`)
    title.textContent = `${allPosts[0].title}`

    const body = document.querySelector(`.post__text`)
    body.textContent = `${allPosts[0].body}`

    const requestsComments = postId.map((id) => fetch(`${COMMENTS_URL}/${id}`))
    const responsesComments = await Promise.all(requestsComments)
    const allComments = await Promise.all(
      responsesComments.map((data) => data.json())
    )

    const email = document.querySelector(`.post-comment__author`)
    email.textContent = `${allComments[0].email}`

    const bodyComments = document.querySelector(`.post-comment__text`)
    bodyComments.textContent = `${allComments[0].body}`
  } catch (error) {
    console.error(error)
  }
}

renderPost(1)
// https://jsonplaceholder.typicode.com/comments?postId=1

const arr = [1, 2, 2, 2, 3, 3, 9, 5, 5, 77]

console.log(arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)))
console.log(arr.filter((i) => arr.indexOf(i)))
console.log(arr.filter((i) => arr.lastIndexOf(i)))

console.log([
  ...new Set(arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i))),
])

console.log(
  ...[...new Set(arr.filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i)))]
)

console.log(arr.filter((i) => i === 1))

console.log(arr.reduce((acc, i) => (acc += i)))

acc = 0
arr.forEach((i) => (acc += i ** 2))
console.log(acc)

console.log(arr.reverse())
