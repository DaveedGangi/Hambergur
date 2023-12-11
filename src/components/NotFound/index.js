// Write your code here
import './index.css'

const NotFound = () => (
  <div className="BgNotFound">
    <div className="NoFound">
      <img
        className="NotFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
    </div>
    <h1>Lost Your Way?</h1>
    <p>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
