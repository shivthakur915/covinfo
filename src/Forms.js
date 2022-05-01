export default function Forms(props) {

    const citiesByState = {
        Haryana: ["Ambala", "Gurugram", "Panchkula"],
        Himachal: ["Shimla", "Dharamshala", "Solan"],
        Punjab: ["Ludhiana", "Mohali"],
      };

      function makeSubmenu(e) {
        if (e.target.value.length == 0)
          document.getElementById("citySelect").innerHTML = "<option></option>";
        else {
          var citiesOptions =
            "<option value='' disabled selected> Choose your city </option>";
            var cityId;
          for (cityId in citiesByState[e.target.value]) {
            citiesOptions += "<option>" + citiesByState[e.target.value][cityId] + "</option>";
          }
          document.getElementById("citySelect").innerHTML = citiesOptions;
        }
      }

      var centreByCity = {
        Ambala: ["abc", "def"],
        Gurugram: ["ghi", "jkl"],
        Panchkula: ["mno", "pqr"],
        Shimla: ["stu", "vwx"],
        Dharamshala: ["yza", "bcd"],
        Solan: ["abc", "def"],
        Ludhiana: ["mno", "pqr"],
        Mohali: ["stu", "vwx"],
      };
      
      function makeMenu(e) {
        if (e.target.value.length == 0)
          document.getElementById("centreSelect").innerHTML = "<option></option>";
        else {
          var centreOptions =
            "<option value='' disabled selected> Choose the nearest centre </option>";
            var centreId;
          for (centreId in centreByCity[e.target.value]) {
            centreOptions += "<option>" + centreByCity[e.target.value][centreId] + "</option>";
          }
          document.getElementById("centreSelect").innerHTML = centreOptions;
        }
      }
    
    const handleAlert = event => {
    alert('Your appointment has been successfully booked.');
  }

  const handleAlert1 = event => {
    alert('You have successfully registered for the vaccination.');
  }

  const handleAlert2 = event => {
    alert('Thanks for the generous donation.');
  }

    if (props.frm == "Book")
        return (
            <form className="form " onSubmit={handleAlert}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">
                            Full Name
                            </span>
                        <input className="a" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">
                            DOB
                            </span>
                        <input className="b" type="date" placeholder="Enter your date of birth" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Email </span>
                        <input className="c" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Phone Number </span>
                        <input className="d" type="tel" pattern="[0-9]{10}" placeholder="Enter your Ph. No." required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Preferred Date </span>
                        <input className="e" type="date" min="2021-05-22" max="2021-06-10"
                            placeholder="Enter the preferred date" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> State </span>
                        <select className="f" id="countrySelect" size="1" onChange={makeSubmenu}>
                            <option value="" disabled selected> Choose your State</option>
                            <option>Haryana</option>
                            <option>Himachal</option>
                            <option>Punjab</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <span className="details"> City </span>
                        <select className="g" id="citySelect" onChange={makeMenu}>
                            <option value="" disabled selected> Choose your City</option>
                            <option></option>
                        </select>
                    </div>
                    <div className="input-box">
                        <span className="details"> Centre </span>
                        <select className="h" id="centreSelect">
                            <option value="" disabled selected> Choose the nearest Centre</option>
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className="slot-details">
                    <input className="i" type="radio" name="slot" id="dot-1" required />
                    <input className="j" type="radio" name="slot" id="dot-2" />
                    <input className="k" type="radio" name="slot" id="dot-3" />
                    <span className="slot-title"> Preferred Slot </span>
                    <div className="category">
                        <label for="dot-1">
                            <span className="dot one"> </span>
                            <span className="slot"> Morning (10:00 AM - 12:00 PM) </span>
                        </label>
                        <label for="dot-2">
                            <span className="dot two"> </span>
                            <span className="slot"> Afternoon (1:00 PM - 3:00 PM) </span>
                        </label>
                        <label for="dot-3">
                            <span className="dot three"> </span>
                            <span className="slot"> Evening (4:00 PM - 6:00 PM) </span>
                        </label>
                    </div>
                </div>
                <div className="button">
                    <button type="submit"> Book </button>
                </div>
            </form>
        );
    else if (props.frm == "Register")
        return (
            <form className="form" onSubmit={handleAlert1}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">
                            Full Name
                            </span>
                        <input className="a" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">
                            DOB
                            </span>
                        <input className="b" type="date" placeholder="Enter your date of birth" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Email </span>
                        <input className="c" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Phone Number </span>
                        <input className="d" type="tel" pattern="[0-9]{10}" placeholder="Enter your Ph. No." required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Preferred Date </span>
                        <input className="e" type="date" min="2021-05-22" max="2021-06-10"
                            placeholder="Enter the preferred date" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> State </span>
                        <select className="f" id="countrySelect" size="1" onChange={makeSubmenu}>
                            <option value="" disabled selected> Choose your State</option>
                            <option>Haryana</option>
                            <option>Himachal</option>
                            <option>Punjab</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <span className="details"> City </span>
                        <select className="g" id="citySelect" onChange={makeMenu}>
                            <option value="" disabled selected> Choose your City</option>
                            <option></option>
                        </select>
                    </div>
                    <div className="input-box">
                        <span className="details"> Centre </span>
                        <select className="h" id="centreSelect">
                            <option value="" disabled selected> Choose the nearest Centre</option>
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className="dose-details">
                    <input className="k" type="radio" name="dose" id="dot-4" required />
                    <input className="l" type="radio" name="dose" id="dot-5" />
                    <span className="dose-title"> Dose No. </span>
                    <div className="category doses">
                        <label for="dot-4">
                            <span className="dot four"> </span>
                            <span className="dose"> Dose 1 </span>
                        </label>
                        <label for="dot-5">
                            <span className="dot five"> </span>
                            <span className="dose"> Dose 2 </span>
                        </label>
                    </div>
                </div>
                <div className="slot-details">
                    <input className="i" type="radio" name="slot" id="dot-1" required />
                    <input className="j" type="radio" name="slot" id="dot-2" />
                    <input className="k" type="radio" name="slot" id="dot-3" />
                    <span className="slot-title"> Preferred Slot </span>
                    <div className="category">
                        <label for="dot-1">
                            <span className="dot one"> </span>
                            <span className="slot"> Morning (10:00 AM - 12:00 PM) </span>
                        </label>
                        <label for="dot-2">
                            <span className="dot two"> </span>
                            <span className="slot"> Afternoon (1:00 PM - 3:00 PM) </span>
                        </label>
                        <label for="dot-3">
                            <span className="dot three"> </span>
                            <span className="slot"> Evening (4:00 PM - 6:00 PM) </span>
                        </label>
                    </div>
                </div>
                <div className="button">
                    <button type="submit"> Register </button>
                </div>
            </form>
        );
    else
        return (
            <form className="form" onSubmit={handleAlert2}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">
                            Full Name
                            </span>
                        <input className="a" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <span className="details">
                            DOB
                            </span>
                        <input className="b" type="date" placeholder="Enter your date of birth" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Email </span>
                        <input className="c" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Phone Number </span>
                        <input className="d" type="tel" pattern="[0-9]{10}" placeholder="Enter your Ph. No." required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Amount </span>
                        <input className="e" type="number" placeholder="Enter the Amount" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Credit card number </span>
                        <input className="f" type="text" name="cardnumber" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" placeholder="1111-2222-3333-4444" required />
                    </div>
                    <div className="input-box">
                        <span className="details"> Exp Date </span>
                        <input className="g" type="text" name="expmonth" pattern="[0-3]{1}[0-9]{1}-[0-1]{1}[0-9]{1}" placeholder="01-12" style={{ width: "48%" }} required />
                        <input className="h" type="number" name="expyear" placeholder="eg. 2023" min="2021" style={{ width: "48%" }} required />
                    </div>
                    <div className="input-box">
                        <span className="details"> CVV </span>
                        <input className="i" type="text" id="cvv" name="cvv" placeholder="xxx" required />
                    </div>
                </div>


                <div className="button">
                    <button type="submit"> Donate </button>
                </div>
            </form>
        );
}