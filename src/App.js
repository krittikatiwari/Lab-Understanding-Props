import './App.css';


function App({krittika}) {
  // code here
  return(
    <div className='image'>
      <h1>KALVIUM GALLERY</h1>
      <div className='img'>
      {krittika.map((elt)=>{
        return (
          <div className='imga'>
            <img src={elt.img}></img>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App;
