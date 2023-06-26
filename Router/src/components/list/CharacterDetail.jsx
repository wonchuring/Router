import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharacterDetailBox } from "../styled/CharacterStyle";
// import { useAxios } from "../../hooks/useAxios";

const CharacterDetail = ({ data }) => {
  const { characterID } = useParams();
  const navigate = useNavigate();

  const onGo = () => {
    navigate("/");
  };

  const { name, role, imageURL, introduction } = data[characterID];

  return (
    <CharacterDetailBox>
      <div className="top">
        <img src={imageURL} alt={name} />
      </div>
      <div className="bottom">
        <div className="left">
          <h2>{name}</h2>
          <h3>{role}</h3>
          <button onClick={onGo}>목록보기 </button>
        </div>
        <div className="right">
          <span>{introduction}</span>
        </div>
      </div>
    </CharacterDetailBox>
  );
};

export default CharacterDetail;
