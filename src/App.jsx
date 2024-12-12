
import './App.css'
import Home from './components/Home/Home';
import Person from './components/Person/Person';
import Counter from './components/Counter/Counter'

function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]

  

  return (
    
      <div>
        <Person name="Breyner" surname="Pavas" age="22"/>
      <Person name="Mario" surname="Tomas" age="23"/>
      <Person name="Luis" surname="Rioja" age="31"/>
      <Home 
      plates = {dishes}
      />
        
         {/* <Counter  initialValue={0} step={2}/> */}
       <Counter 
       initialValue={0}
       step={2}
       />
       <Counter 
       initialValue={3}
       step={1}
       />
    </div>
    

    
  )
}

export default App
