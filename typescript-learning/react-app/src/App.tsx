import Message from "./Message";
import {Welcome} from "./welcome";
function App(){
  const  name='Tanisha';
  const items = [1,2,3];
  const styles ={
    backgroundColor: 'red',
    color:'white'
  }
  return (
  <div>
    <Welcome />
    <input type="text" defaultValue={name} />
    <p style={styles}>Sum: {2 + 2}</p>
    <p>Items: {items.length}</p>
    <p>Today: {new Date().toDateString()}</p>
  </div>
  );
}
export default App;