import {useState} from 'react';
import AboutContact from '../aboutContact';
import './index.css';
const AboutUs = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="aboutMore" id="aboutMore">
      <div className="titleAndStory">
        <div className="naslov">Our story</div>
        <div className="content">
          <div className="story">
            <div style={{fontWeight: '600'}}>
              Pawville Animal Shelter, where paws find their way home.
            </div>
            <br></br>
            Our story began with a deep love for animals and a shared mission to
            provide a safe haven for those in need. We embarked on this journey
            driven by the belief that every furry friend deserves a second
            chance at a happy and fulfilling life. <br></br>
            Pawville was born out of a desire to make a meaningful impact on the
            lives of abandoned and neglected animals. We recognized the urgent
            need for a compassionate shelter that not only offered temporary
            refuge but also worked tirelessly to find loving forever homes.{' '}
            <br></br>
            <div style={{fontWeight: '600'}}>
              Our mission is clear: to rescue, rehabilitate, and rehome animals,
              one paw at a time.
            </div>
            Within our shelter's walls, every animal is provided with the care,
            attention, and nurturing they deserve. Our dedicated team of staff
            and volunteers pour their hearts into ensuring that each resident
            receives proper medical care, nutritious meals, and a cozy space to
            heal and thrive. But our journey doesn't stop there. <br></br>We are
            passionate about finding forever families for our furry residents.
            Through a thoughtful adoption process, we aim to match each animal
            with their perfect companion, creating lasting bonds that will bring
            joy to both human and animal alike. At Pawville, we understand that
            our impact extends beyond the shelter's boundaries. We actively
            engage with the community, promoting responsible pet ownership
            through education and outreach programs.<br></br> 
            <div style={{fontWeight: '600'}}>Together, we can
            give these precious souls the love, care, and forever homes they
            deserve.</div>
          </div>
        </div>
        <div  className="contactButton">
          <button onClick={toggleModal} className="contact"> <i className="bi bi-person-lines-fill"></i>Contact us</button>
        </div>
      </div>

      <AboutContact
        toggleModal={toggleModal}
        modal={modal}
        setModal={setModal}
      />
      <div className="edited">
        <div className="iconsAbout">
          <div className="icons">
            <i className="bi bi-geo-alt-fill"></i>
            <p>Sukoišanska 21, 21000 Split</p>
          </div>
          <div className="icons">
            <i className="bi bi-envelope"></i>

            <p>pawvilleShelter@gmail.com</p>
          </div>
          <div className="icons">
            <i className="bi bi-telephone-fill"></i>
            <p>+385 91 9464064</p>
          </div>
        </div>
        <iframe
          className="mapContact"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.4143035185311!2d16.48029682923665!3d43.50948599869541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6adf347f7b3ee58c!2zNDPCsDMwJzM0LjIiTiAxNsKwMjgnNTEuMCJF!5e0!3m2!1shr!2shr!4v1642104370945!5m2!1shr!2shr"
          width="600"
          height="450"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
