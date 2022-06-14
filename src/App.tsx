import { ErrorMessage, Header, Loading, Profile, LayoutCards } from './components'
import { useFetch } from './hook';

const App = () => {

  const { data, loading, error } = useFetch();

  const showData =  () => {
    if (loading) return <Loading/>
    if (error) return <ErrorMessage msg={error}/>
    return <LayoutCards data={data} />
  }

  return (
    <>
      <Header/>
      { showData() }

      <Profile/>
    </>
  )
}
export default App;

