import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div>
      404 Page not found
      <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default PageNotFound
