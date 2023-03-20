import React, { useState, useRef, useEffect } from 'react'
import css from '../css/pages/theteam.css'
// import cryptoworks from '../common/images/cryptoworks.png'
import { Localise } from '../Localise'
import ProfileCard from '../components/common/containers/ProfileCard'
import Team from '../Data.json'
  
class TheTeam extends React.Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <div className="teamContainer">
            {/* <ProfileCard name={"test"} photo={"test photo"} description={"test description"}/> */}
            {/* {this.displayMembers()} */}
            <div className='profilesContainer'>
                {Team.members.map((member, key) => {
                    var description = ''
                    var profiles = Localise().the_team.profiles
                    member && member.description in profiles ? description = profiles[member.description] : console.log('member description not available')
                    return (
                        <ProfileCard key={key}
                            name={member.name} 
                            photo={member.photo} 
                            description={description}
                        />
                    );
                })}
            </div>
        </div>
      </>
    );
  }
}
  
export default TheTeam;
