import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";
import { useParams } from "react-router-dom";

export const Lateral = ({ content, title }) => {
  const { id } = useParams();
  let toAllUri = "";
  if (id) {
    toAllUri = title === "Amigos" ? `/user/${id}/friends` : `/user/${id}/communities`;
  } else {
    toAllUri = title === "Amigos" ? `/friends` : `/communities`;
  }

  return (
    <CardMain title={title} count={content.length} toAll={toAllUri}>
      {content.map((data, key) => (
        <CardSecondary
          round
          // to='usuario'
          to={title === "Amigos" ? "usuario" : "comunidade"}
          id={data.id}
          key={key}
          text={title === "Amigos" ? data.fullName : data.name}
          // text={fullName}
          src={title === "Amigos" ? data.profilePicture : data.logo}
        />
      ))}
    </CardMain>
  );
};
