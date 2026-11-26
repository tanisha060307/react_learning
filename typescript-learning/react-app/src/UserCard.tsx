type UserCardProps = {
  name: string;
  role: 'admin' | 'user';
  verified: boolean;
};

export const UserCard = ({ name, role, verified }: UserCardProps) => {
const greetUser = (userName : string)=>{
  alert(`Hello, ${userName}!`);
}
return (
<div style ={{
    display:'flex',
    gap:'10px',
    alignItems:'center',
    border:'1px solid gray',
    padding:'10px',
    borderRadius:'5px'
}}>
<h2>{name}</h2>
<p>{role}</p>
{verified && <span>✓</span>}
<button onClick={() => 
  greetUser(name)
  }> user info </button>
</div>
);
}