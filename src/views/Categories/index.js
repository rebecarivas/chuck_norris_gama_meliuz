import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Loader from '../../assets/loader.gif';

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
      <div>
        <img src={Loader} alt="loader" />
      </div>
    )
  }

  return (
    <>
      <h1>Categorias</h1>
      <div>
        <img src={joke?.icon_url} alt={joke?.value}/>
        <h4>{joke?.value}</h4>
      </div>
    </>
  )
}

export default Categories