
import { team } from "../data";

function Team() {
  return (
    <section className="team section" id="team">

      <div className="container">

        <div className="section-heading">

          <p className="section-small">
            OUR TEAM
          </p>

          <h2>Meet Our Experts</h2>

          <p>
            Our team is dedicated to providing reliable
            solar energy solutions, quality installation
            and professional customer support.
          </p>

        </div>

        <div className="team-grid">

          {team.map((member) => (
            <div className="team-card" key={member.id}>

              <div className="team-image">
                👤
              </div>

              <h3>{member.name}</h3>

              <p>{member.role}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Team;
