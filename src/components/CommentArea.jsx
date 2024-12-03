import Loading from './Loading'
import SingleComment from './SingleComment'
import { useEffect, useState, useCallback } from 'react'
const STRIVE_STUDENT_KEY =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBkNDhhZDEyOTAwMTU4NzZiYjMiLCJpYXQiOjE3MzI4MDc0MjMsImV4cCI6MTczNDAxNzAyM30.6CuTL1V-q2Xq2FFoFBCzMXZ-azM-H_1kUp8wIlSDFFw'
function CommentArea({ selectedBook }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [comments, setComments] = useState(null)
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState(0)

  const fetchComments = useCallback(() => {
    if (!selectedBook) return
    setLoading(true)
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${selectedBook}`,
      {
        headers: { Authorization: STRIVE_STUDENT_KEY },
      }
    )
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('errore')
      })
      .then((data) => setComments(data))
      .catch((_) => setError(true))
      .finally((_) => setLoading(false))
  }, [selectedBook])

  useEffect(fetchComments, [fetchComments])

  return (
    <section className="comments">
      <h2>Commenti del libro:</h2>

      {loading ? (
        <Loading />
      ) : (
        comments?.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))
      )}
      <h3>Aggiungi commento:</h3>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="scrivi il tuo commento.."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => {
          const star = 5 - i
          return (
            <i
              key={i}
              data-star={star}
              className="fas fa-star rating__star"
            ></i>
          )
        })}
      </div>
    </section>
  )
}

export default CommentArea
