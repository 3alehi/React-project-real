import React,{useContext,useState} from 'react'
import Product from './Componnents/Product'
import { IsShow } from './Context/IsShow'
import { CardList } from './Context/CardList'
export default function App() {
  const [Show, setShow] = useState(false)
  const [Card, setCard] = useState([])
  return (
    <IsShow.Provider value={Show}>
<CardList.Provider value={Card}>

    <div>
      
      <Product/>
    </div>
</CardList.Provider>
    </IsShow.Provider>
  )
}
