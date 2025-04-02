import { useNavigate } from 'react-router'

export const MainAppPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => navigate('/app/feedback')}>Feedback</button>
    </div>
  )
}
