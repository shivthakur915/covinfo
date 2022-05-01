import { BrowserRouter as Route, useHistory } from "react-router-dom";

function Image(props) {
  
  const history = useHistory();

  const handleAppointment = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 750,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleVaccination = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 1500,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleAvailability = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 2900,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const handleDonation = () => {
    history.push("/services");
    setTimeout(
      function() {
        window.scrollTo({
          top: 2220,
          behavior: "smooth",
        });
      }, 100
    );
  };

  const checkIt = () => {
    const id = props.id;
    if(id == "1")
      handleAppointment();
    else if(id == "2")
    handleVaccination();
    else if(id == "3")
    handleDonation();
    else
    handleAvailability();
  };

  return (
    <a onClick={checkIt}>
      <div className="m-3 d-inline-block">
      <div className="services-item">
        <div className="services-item-caption d-flex align-items-center justify-content-center">
          <div className="services-item-caption-content text-center text-white">
            {props.text}
          </div>
        </div>
        <img className="img-fluid" src={props.src} alt="..." />
      </div>
    </div>
    </a>
  );
}

export default Image;
