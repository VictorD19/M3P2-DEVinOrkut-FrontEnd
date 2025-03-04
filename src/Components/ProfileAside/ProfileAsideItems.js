import React from 'react';
import {
  IoPersonCircleOutline,
  IoCameraOutline,
  IoChatboxOutline,
  IoToggleOutline,
  IoFileTrayOutline,
  IoAddCircle,
} from 'react-icons/io5';
import { NewButtonLink } from '../Button';
import {
  EditButton,
  MenuOptions,
  ProfileAsideButton,
  ProfileAsideImage,
} from './style';

import { useParams } from 'react-router-dom';
import classes from './style.module.css';

const ProfileAsideItems = ({
  name,
  profilePicture,
  gender,
  relationship,
  city,
  state,
  buttonText,
  onClick,
}) => {
  const { id } = useParams();

  return (
    <>
      {!id && (
        <div className={classes.container}>
          <ProfileAsideButton>
            <img className={classes.image} src={profilePicture} alt={name} />
          </ProfileAsideButton>
          <div className={classes.middle}>
            <div>
              <button className={classes.buttonIcon} onClick={onClick}>
                <IoAddCircle size={50} />
              </button>
            </div>
          </div>
        </div>
      )}
      {id && (
        <ProfileAsideImage>
          <img src={profilePicture} alt={name} />
        </ProfileAsideImage>
      )}
      <h2>{name}</h2>
      <ul>
        <li>
          {gender}, {relationship}
        </li>
        <li>
          {city}, {state}
        </li>
      </ul>
      <MenuOptions>
        <NewButtonLink
          to="/"
          icon={<IoPersonCircleOutline size={25} />}
          name={id ? 'Meu Perfil' : buttonText}
          bg="#EBEBED"
        />
        <NewButtonLink
          to="/friends"
          icon={<IoChatboxOutline size={24} />}
          name="Recados"
        />
        <NewButtonLink
          to="/communities"
          icon={<IoCameraOutline size={24} />}
          name="Fotos"
        />
        <NewButtonLink
          to="/"
          icon={<IoFileTrayOutline size={24} />}
          name="Depoimentos"
        />
      </MenuOptions>
      <div className="edit-profile">
        {!id && (
          <EditButton onClick={() => {}}>
            <IoToggleOutline size={25} /> Editar Perfil
          </EditButton>
        )}
      </div>
    </>
  );
};

export default ProfileAsideItems;
