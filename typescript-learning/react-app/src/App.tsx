import Message from "./Message";
import {Welcome} from "./welcome";
import {UserCard} from "./UserCard";
function App(){
  
  return (
  <>
    <Welcome name='Tanisha' />
    <UserCard name='Ahsan' role='admin' verified={true} />
    <UserCard name='Azad' role='user' verified={false} />
  </>
  );
}
export default App;