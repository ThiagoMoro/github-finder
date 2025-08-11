import { MdLocationPin } from "react-icons/md"
import classes from "./User.module.css"

import type { UserProps } from "../types/user"

const User = ({avatar_url, login, location, followers, following}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )
      }
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo: </p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <a
        href={`https://github.com/${login}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Ver melhores projetos
      </a>
    </div>
  )
}

export default User