
import { useHistory } from 'react-router-dom';

function ViewPost() {
  let history = useHistory();

  const redirect = () => {
    history.push('/post')
  }

  return (
    <div>
      <button onClick={redirect}>View post</button>
    </div>
  )
}
export default ViewPost
  