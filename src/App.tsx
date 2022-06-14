import { ErrorMessage, Header, Loading, Profile } from './components';
import { LayoutCards } from './components/LayoutCards';
import { useFetch } from './hook';

const App = () => {

  const { data, loading, error } = useFetch();

  const showData =  () => {
    if (loading) return <Loading/>
    if (error) return <ErrorMessage msg={'asdasd'}/>
    
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

