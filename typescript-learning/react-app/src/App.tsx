import "./App.css";
import Message from "./Message";
import {Welcome} from "./welcome";
import {UserCard} from "./UserCard";
import {Card} from "./card";
function App(){
  
  return (
  <>
    <Card>
      <Welcome name="Tanisha" />
    </Card>
   <Card> 
     <UserCard name='Ahsan' role='admin' verified={true} />
    <UserCard name='Azad' role='user' verified={false} />
    </Card>
  </>
  );
}
export default App;