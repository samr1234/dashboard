import './auth.css'

const Image = () => {
  return (
    <div className="auth-image">
    <img
      src="image.png"
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
  )
}

export default Image