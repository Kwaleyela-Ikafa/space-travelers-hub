/* eslint-disable jsx-a11y/control-has-associated-label */
const Missions = () => {
  const data = [
    {
      mission_id: '1',
      mission_name: 'Thaicon',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
    },
    {
      mission_id: '2',
      mission_name: 'Jmall',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
    },
    {
      mission_id: '3',
      mission_name: 'Solhof',
      description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
    },
  ];
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Statue</th>
        <th />

      </tr>
      {data.map((mission) => (
        <tr key={mission.mission_id}>
          <th>{mission.mission_name}</th>
          <td>{mission.description}</td>
          <td> not a member</td>
          <td> join</td>
        </tr>
      ))}
    </table>
  );
};

export default Missions;
