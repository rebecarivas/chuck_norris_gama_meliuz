import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Grid,
  GridItem,
  Container,
  Select
}  from '@chakra-ui/react'
import Logo from '../../assets/logo.png';

import api from '../../services/api'


const Header = () => {
  const [main, setMain] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    api.get('categories').then(
      res => {
        setMain(res.data)
      }
    )
  }, [])

  const handleCategory = (e) => {
    navigate(`/categories/${e.target.value}`)
  }

  return(
    <nav>
      <Container maxW="container.xl">
        <Grid  templateColumns="repeat(5, 1fr)" gap={10}>
          <GridItem colStart={1}>
            <Link to='/'>
              <img src={Logo} className="logo" alt="Logo" />
            </Link>
          </GridItem>
          <GridItem  colStart={6} colEnd={12} h="150px">
              <Select  pt={10} placeholder="Selecione a categoria" focusBorderColor="white" onChange={handleCategory}>
                {main?.map( (item, index) => (
                  <option key={index} value={item}> {item} </option>
                ))}
              </Select>
        
          </GridItem>
        </Grid>
      </Container>
    </nav>
  )
}

export default Header;