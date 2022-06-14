import { ErrorMessage, Header, Loading } from './components';
import { LayoutCards } from './components/LayoutCards';
import { useFetch } from './hook';

const App = () => {

  const { data, loading, error } = useFetch();

  if (loading) return <Loading/>

  if (error) return <ErrorMessage msg={error}/>

  return (
    <div>
      <Header/>
      <LayoutCards data={data} />
    </div>
  )
}
export default App;

