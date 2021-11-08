
import { useHistory } from 'react-router-dom';

function ViewComment() {
  let history = useHistory();

  const redirect = () => {
    history.push('/Comment')
  }

  return (
    <div>
      <button onClick={redirect}>ViewPostComment</button>
    </div>
  )
}
export default ViewComment
  