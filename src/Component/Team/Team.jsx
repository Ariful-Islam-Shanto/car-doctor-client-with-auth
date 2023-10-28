import React from 'react';
import img1 from '../../assets/images/team/1.jpg';
import img2 from '../../assets/images/team/2.jpg';
import img3 from '../../assets/images/team/3.jpg';

const Team = () => {

    const Teams = [img1, img2, img3];

    return (
        <div className="space-y-6 py-24">
        <p className="text-[#FF3811] font-medium text-center">Team</p>
        <h1 className="text-4xl text-black text-center">Meet Our Team</h1>
        <p className="text-center mb-8">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className="grid grid-cols-3 gap-4 ">
          {
              Teams.map((team, index) =>  <div key={index} className="card   bg-white drop-shadow-sm p-4 space-y-3">
              <figure className="">
                <img
                  src={team}
                  alt="team"
                  className="rounded-xl w-full h-[200px]"
                />
              </figure>
              <div className=" items-center text-center space-y-2">
                <h2 className=" text-black text-center text-xl font-bold">Car Engine Plug</h2>
                <p className="text-[#FF3811] text-center font-medium">Engine Expert</p>
              </div>
            </div>)
          }
        </div>
  
      </div>
    );
};

export default Team;