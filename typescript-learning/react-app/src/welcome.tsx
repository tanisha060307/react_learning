type WelcomeProps = {
  name: string;
};

export const Welcome = ({name}: WelcomeProps) =>{
return <h1>Hello, {name} !</h1>;
};
