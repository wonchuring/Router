import React from "react";
import { CharacterBox } from "../styled/CharacterStyle";
import { useNavigate } from "react-router-dom";

const Character = ({ item }) => {
  const { id, name, imageURL } = item;
  const navigate = useNavigate();

  const onGo = () => {
    navigate(`/character/${id - 1}`);
  };

  return (
    <CharacterBox onClick={onGo}>
      <img src={imageURL} alt={name} />
      <div className="bg"></div>
      <h2>{name}</h2>
    </CharacterBox>
  );
};

export default Character;
