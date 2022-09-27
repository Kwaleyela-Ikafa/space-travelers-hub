/* eslint-disable no-unused-vars */
import { useState } from 'react';

const Rockets = () => {
  const [data, setdata] = useState([
    {
      id: '1',
      rocket_name: 'falcon 3',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
      flickr_images: 'img',
      reserved: false,
    },
    {
      id: '2',
      rocket_name: 'falcon 3',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
      flickr_images: 'img',
      reserved: false,
    },
    {
      id: '3',
      rocket_name: 'falcon 3',
      description: '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni beatae facere dolorum voluptates consectetur unde libero obcaecati blanditiis voluptatibus minus, aliquid et rem ipsa perspiciatis ducimus maxime voluptatum repellendus asperiores laudantium sapiente mollitia ad? Corrupti iste similique tenetur vero?',
      flickr_images: 'img',
      reserved: false,
    },
  ]);

  return (
    <div>
      {data.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickr_images} alt="" />
          <div>
            <h1>
              {rocket.rocket_name}
            </h1>
            <p>
              {rocket.description}
            </p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rockets;
