import React, {useEffect, useState} from 'react'
import { Input, Button, Text, Box} from '@chakra-ui/react'
import api from '../../services/api'
import loader from '../../assets/loader.gif'

const App = () =>{
  const [data, setData] = useState({});
  const [allJokes, setAllJokes] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [searchJoke, setSearchJoke] = useState('');

  useEffect(() => {
    setIsLoad(true)
    api.get('random')
    .then(
      response => {
        setData(response.data)
      }
    )
    .catch(e => console.error(e))
    .finally(() => setTimeout(() =>{setIsLoad(false)},2500))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoad(true)
    api.get(`search?query=${searchJoke}`).then(
      res => {
        setIsSearch(true)
        setAllJokes(res.data)
      }
    )
    .catch( err => console.error(err))
    .finally( () => setIsLoad(false))
  }

  if (isLoad){
    return(
      <div className="loader">
        <img src={loader} alt="Loader"/>
      </div>
    )
  }

   return(
    <div className="home-component">
      
      <div>
        <form onSubmit={handleSubmit}>
          <Input focusBorderColor="white" type="text" placeholder="Pesquise sua piada" onChange={e => setSearchJoke(e.target.value)} />
          <Button marginTop="10px" className="button" type="submit" colorScheme="#f2f2f2" variant="outline">Pesquisar</Button>
        </form>
        <Text fontSize="4xl" fontWeight="bold"  letterSpacing="10px" color="#f1f1f1"> 
          <h1>Joke</h1>
        </Text>
      </div>
      { !isSearch ? (
        <div className="jokes">
          <img className="icon" src={data?.icon_url} alt={data?.value} />
          <Box w="80%" borderWidth="2px" borderRadius="10px" margin="auto" paddingTop="5px">
            <Text fontSize="2xl">
              <h3>{data?.value}</h3>
            </Text>
          </Box>
        </div>
      ) : (
        <>
          { allJokes?.result.map( (item, index) => (
            <div key={index} className="jokes">
              <img src={item?.icon_url} alt={item?.value} />
              <h3>{item?.value}</h3>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default App;
//essa funcao é assincrona. eu to atribuindo a data a toda a api do chuck norris e o data.icon_url é atribuida pq é um obejto se der o console.log em response ou data da pra ver

