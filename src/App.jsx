import { createContext,  useState } from 'react'
import UseCall from './USECALLBACK/UseCall';
import ChildA from './USECALLBACK/ChildA';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Child1 from './PropDrilling/Child1'
// import UseMemoo from './USEMEMO/UseMemoo';

// import Maping from './Maping'
// import Usestat from './Usestat'
// import UseEff from './UseEff'
// import UseRef from './UseRef'


// const news = 'mobile'


// const data = createContext()
// const data1 = createContext()

function App() {
// const name= "Ali"
// const city= "lahore"
  return ( <> 
<ChildA />
<UseCall />


{/* <UseMemoo /> */}



{/* <data.Provider value={name}>
  <data1.Provider value={city}> 
<Child1 />
</data1.Provider>
</data.Provider> */}



{/* <UseRef /> */}

{/* <UseEff />
<Maping news={news}/>

<Usestat /> */}





  </>

  )
}

export default App;
// export {data};
// export {data1};