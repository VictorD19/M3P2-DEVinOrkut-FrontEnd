import ProfileAsideItems from "./ProfileAsideItems";
import * as S from "./style";
import { useData } from "../../Context/dataContext";
import { useParams } from "react-router-dom";

const Profile = ({nameUser}) => {
  const { user } = useData();
  const { id } = useParams();


  const DUMMY = {
    id: "A1",
    name: "Elon Musk",
    pictureProfile: "/assets/images/elon-musk.webp",
    genre: "Masculino",
    relationship: "Ex da Grimer",
    local: "Starbase, TX",
  };

  return (
    <S.ProfileContainer>
      <ProfileAsideItems
        key={user.id}
        name={id ? nameUser : user.fullName}
        pictureProfile={
          id
            ? "https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg"
            : user.pictureProfile || DUMMY.pictureProfile
        }
        relationship={user.relationship}
        local={user.local}
      />
    </S.ProfileContainer>
  );
};

export default Profile;
