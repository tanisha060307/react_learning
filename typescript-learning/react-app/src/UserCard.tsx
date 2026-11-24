type UserCardProps = {
  name: string;
  role: 'admin' | 'user';
  verified: boolean;
};

export const UserCard = ({ name, role, verified }: UserCardProps) => {
return (
<div>
<h2>{name}</h2>
<p>{role}</p>
{verified && <span>/</span>}
</div>
);
}