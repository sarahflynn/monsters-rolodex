import React from "react";
import "./card-list.css";

export const CardList = (props) => {
  return props.children.map((monster) => (
    <div key={monster.id} className={"card-list"}>
      {monster.name}
    </div>
  ));
};
