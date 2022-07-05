type CommentData = {
  id: number
  content: string
  imageId: number
}

type Image = {
  id: number
  title: string
  likes: number
  image: string
  comments: CommentData[]
}

type State = {
  images: Image[]
}

let state: State = {
  images: []
}


function getImagesFromServer () {
  fetch('http://localhost:3001/images')
    .then(resp => resp.json())
    .then(imagesFromServer => {
      state.images = imagesFromServer
      render()
    })
}

function updatetheImage (image) {
  let imageCopy = { ...image }
  delete imageCopy.comments
  return fetch(`http://localhost:3333/images/${image.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(imageCopy)
  })
}

function createanimage (title: string ImageID: number) {
  fetch('http://localhost:3000/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      image,
      likes: 0
    })
  }).then(() => getImagesFromServer())
}

function renderComment (comment: CommentData, commentsUl: HTMLUListElement) {
  let commentLi = document.createElement('li')
  commentLi.className = 'comment'

  let commentSpan = document.createElement('span')
  commentSpan.textContent = comment.content

  let deleteButton = document.createElement('button')
  deleteButton.className = 'comment-button'
  deleteButton.textContent = '🗑️'
  deleteButton.addEventListener('click', function () {
    deleteComment(comment.id)
  })

  commentLi.append(commentSpan, deleteButton)

  commentsUl.append(commentLi)
}
let commentInput = document.createElement('input')
  commentInput.className = 'comment-input'
  commentInput.type = 'text'
  commentInput.name = 'comment'
  commentInput.placeholder = 'Add a comment...'

  let submitButton = document.createElement('button')
  submitButton.className = 'comment-button'
  submitButton.type = 'submit'
  submitButton.textContent = 'Post'

  addCommentForm.append(commentInput, submitButton)
  articleEl.append(addCommentForm)
}


getImagesFromServer()
renderComment()