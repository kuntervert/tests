import React from "react";

class Test9 extends React.PureComponent {

  state = {
        fullName:"",
        address:"",
        phoneNumber:"",
        personalCode:""
    };

handleSubmit = () => {
  event.preventDefault();
  fetch("/api/v1/users/", {
    method:"POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(this.state)
  });
};

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value,
  });
};

render(){
  return (
      <>
          <div><h1 style={{textAlign: "center"}}>Vorm</h1></div>
          <form onSubmit={this.handleSubmit}>
              <div className="box">
                  <h1>Lisa inimene</h1>

                  <input type="fullName"
                         name="fullName" placeholder={"Nimi"}
                         value={this.state.fullName}
                         onChange={this.handleChange}
                         className="fullName"/>

                  <input type="address"
                         name="address" placeholder={"Sinu aadress"}
                         value={this.state.address}
                         onChange={this.handleChange}
                         className="address"/>

                  <input type="phoneNumber"
                         name="phoneNumber" placeholder={"Telefoni nr."}
                         value={this.state.phoneNumber}
                         onChange={this.handleChange}
                         className="phoneNumber"/>

                  <input type="personalCode"
                         name="personalCode" placeholder={"Sinu isikukodd"}
                         value={this.state.personalCode}
                         onChange={this.handleChange}
                         className="personalCode"/>

                  <button className={"btn"}>Lisa</button>
              </div>


          </form>
      </>
  );
}
}

export default Test9;

  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>;


const LINK = "https://mongoosejs.com/docs/api.html";
