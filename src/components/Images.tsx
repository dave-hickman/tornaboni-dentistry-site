import waitingRoom from "../assets/waiting-room.jpeg";
import sign from "../assets/sign.jpeg";
import giulia from "../assets/giulia.jpeg"
import "../styling/Images.css"

const Images = () => {
  return (
    <section className="images-container">
      <img src={waitingRoom} alt="dentist waiting room"/>
      <img src={sign} alt="tornoboni sign"/>
      <img src={giulia} alt="dentist"/>
    </section>
  );
};

export default Images;
