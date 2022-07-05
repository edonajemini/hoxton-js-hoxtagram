// solution goes here
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
  