import React from "react";
import "./css/style.css";

class Acordeon extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [
      {
        title: "Erevan",
        text: `The history of Yerevan dates back to the 8th century BCE,
                      with the founding of the fortress of Erebuni in 782 BCE by King
                      Argishti I of Urartu at the western extreme of the Ararat Plain.
                  `,
      },
      {
        title: "Paris",
        text: `Paris is a major railway, highway, and air-transport hub served 
                  by two international airports: Paris–Charles de Gaulle (the second-busiest 
                  airport in Europe) and Paris–Orly. 
                  `,
      },
      {
        title: "Rome",
        text: `Rome's history spans 28 centuries. While Roman mythology dates the 
                  founding of Rome at around 753 BC, the site has been inhabited for much longer.
                  
                  `,
      },
    ];
  }
  render() {
    return (
      <>
        {this.sections.map((val, i) => (
          <Items key={`val.title_${i}`} title={val.title} context={val.text} />
        ))}
      </>
    );
  }
}
class Items extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isActive: false,
    };
    this.isActiveClick = this.isActiveClick.bind(this);
  }
  isActiveClick() {
    this.setState({ isActive: !this.state.isActive });
  }
  render() {
    const { isActive } = this.state;

    return (
      <div className="items">
        <div className="title" onClick={this.isActiveClick}>
          <div>{this.props.title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="content">{this.props.context}</div>}
      </div>
    );
  }
}

export default Acordeon;
