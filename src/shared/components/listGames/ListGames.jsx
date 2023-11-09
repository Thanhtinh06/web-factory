import React from "react";
import { AllGames } from "./../../data/constant";
import clsx from "clsx";

const ListGames = () => {
  const renderListGames = () => {
    return AllGames.map((game, index) => {
      return (
        <div
          className={clsx("game-item", { active: index === 0 ? true : false })}
          key={index}
        >
          <img src={game.image} alt={game.title} />
          <p>{game.title}</p>
        </div>
      );
    });
  };

  return <div className="listgame">{renderListGames()}</div>;
};

export default ListGames;
