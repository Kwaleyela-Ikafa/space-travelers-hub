import { React } from 'react';
import MyRockets from './RocketsForProfile/profileRockets';
import MyMissions from './MissionsForProfile/profileMissions';

const MyProfile = () => (
  <div>
    <MyMissions />
    <MyRockets />
  </div>
);

export default MyProfile;
