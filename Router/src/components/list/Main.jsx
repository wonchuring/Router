import { useAxios } from "../../hooks/useAxios";
import Character from "./Character";
import { Container } from "../styled/CharacterStyle";

const Main = () => {
  const { data, loading, error } = useAxios(`https://gist.githubusercontent.com/wonchuring/86b161825fea586c9b58bd4732aef860/raw/ddc06c7e3032745e37feaf47b4ff8115849f11e0/MS.json`);

  return (
    <>
      <h1>
        <img src="./images/logo.png" alt="" />
      </h1>
      <Container>
        {data.map((item) => (
          <Character key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};

export default Main;
