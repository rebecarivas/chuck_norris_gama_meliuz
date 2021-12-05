import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { Text, Box} from '@chakra-ui/react'
import Loader from '../../assets/carregando.gif';

const Categories = () => {
  const [joke, setJoke] = useState({});
  const [ isLoad, setIsLoad ] = useState(false)
  const { category } = useParams();

  useEffect(() => {
    setIsLoad(true)
    api.get(`random?category=${category}`).then(
      res => {
        setJoke(res.data)
      }
    )
    .catch( err => console.error(err) )
    .finally( () => setIsLoad(false))
  }, [category])

  if(isLoad){
    return(
      <div className="loader">
        <img src={Loader} alt="loader" />
      </div>
    )
  }

  return (
    <>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="#f1f1f1" p="20px">
        <h1>Categoria - {category}</h1>
        <h1 letterSpacing="10px" >Joke</h1>
      </Text>
      <div className="jokes">
        <img className="icon" src={joke?.icon_url} alt={joke?.value}/>
        <Box w="80%" borderWidth="2px" borderRadius="10px" margin="auto" paddingTop="5px">
            <Text fontSize="2xl">
              <h3>{joke?.value}</h3>
            </Text>
        </Box>
      </div>
    </>
  )
}

export default Categories;