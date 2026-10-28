import { team } from "../data";
function Team(){
  return(
     <section className="team section">

        <div className="container">

          <div className="section-heading">

            <p className="section-small">
              OUR TEAM
            </p>

            <h2>
              Meet Our Experts
            </h2>

            <p>
              At Oplentix Tech, we are passionate about empowering
              businesses with innovative solutions.
            </p>

          </div>


          <div className="team-grid">

            {team.map((member, index) => (

              <div className="team-card" key={index}>

                <div className="team-image">
                  👤
                </div>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.role}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
  );
}

export default Team;
     