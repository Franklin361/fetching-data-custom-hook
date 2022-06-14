import { Header } from './components';
import { LayoutCards } from './components/LayoutCards';
import { useFetch } from './hook';

const App = () => {

  const { data } = useFetch();

  return (
    <div>
      <Header/>
      <LayoutCards data={data} />
    </div>
  )
}
export default App;

