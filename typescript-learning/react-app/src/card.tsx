import { Button } from "./Button";


export const Card=({ children }:React.PropsWithChildren) =>{
return (<div className="card">
   <Button />
    <section> {children} </section>
</div>
);
};