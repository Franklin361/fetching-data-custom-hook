import { Header } from './components';
import { useFetch } from './hook';

const App = () => {

  const { data } = useFetch();

  return (
    <div>
      <Header/>
      {
        (data.length > 0) && data.map( ({ id, image, name }) => (
          <div key={id}> 
            <img src={image} alt={image} /> 
            <p>{name}</p> 
          </div>
        ))
      }
    </div>
  )
}
export default App;

