import "./App.css";

import {Welcome} from "./welcome";
import {UserCard} from "./UserCard";
import {Card} from "./card";
import {Button} from "./Button";

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
    <Button />
  </>
  );
}
export default App;