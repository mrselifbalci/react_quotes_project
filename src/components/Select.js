import React from 'react';

export class Select extends React.Component {
  constructor(props){
    super(props)

  }
  handleChange=(event)=>{
    let selectedName=event.target.value;
    this.props.changeName(selectedName)
  }



  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
         {this.props.names.map(item=> <option value={item}>{item}</option>)}
          
        </select>
      </div>
    );
  }
}