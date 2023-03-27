import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name='Dhaka' speacial="Biriyani"></District>
      <District name="Ctg" speacial=" Shilpo alaka"></District>
      <District name="Noakhali" speacial="bivag"></District>
    </div>
  );
}

function LoadPost(){
  const [posts, setPost] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data));
  },
    [])

  return (
    <div>
      <h2>Post: {posts.length}</h2>
     {
       posts.map(post =>  <Post title={post.title} body={post.body}> </Post>)
     }
    </div>
  )
}
function Post(props){
  return(
    <div style={{backgroundColor: 'lightGray', margin: '10px', padding: '10px', border: '5px solid black'}}>
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  )
}
const DistrictStyle ={
  backgroundColor: 'pink',
  padding: '10px',
  margin: '20px',
}
const BtnStyle ={
  backgroundColor: 'red',
  padding: '10px',
  border: 'none',
  borderRadius: '10px',
  marginRight: '5px'
}
function District(props){
  const [Power , setPower] = useState(1);
  const BoostPower = () =>{
    const newPower = Power * 2 ;
    setPower(newPower);
  }

  return(
    <div style={DistrictStyle}>
      <h3>Name: {props.name}</h3>
      <p>Specially:{props.speacial}</p>
      <h4>Boost The Power {Power}</h4>
      <button style={BtnStyle} onClick={BoostPower} >Boost</button>
    </div>
  )
}


export default App;
