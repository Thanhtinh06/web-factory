import React, { useState } from "react";
import { AllGames } from "./../../data/constant";
import clsx from "clsx";

const ListGames = () => {
  const [active, setActive] = useState(0);

  const renderListGames = () => {
    return AllGames.map((game, index) => {
      return (
        <button
          onClick={() => {
            setActive(index);
          }}
          className={clsx("game-item", {
            active: index === active ? true : false,
          })}
          key={index}
        >
          <img src={game.image} alt={game.title} />
          <p>{game.title}</p>
        </button>
      );
    });
  };

  return <div className="listgame">{renderListGames()}</div>;
};

export default ListGames;
