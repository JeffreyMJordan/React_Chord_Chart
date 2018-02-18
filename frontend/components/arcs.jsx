import React from "react";


//I just define the inner and outer radius for the arcs 
//Then when I pass the arc a group, d3 automatically draws it in the right place 
//So I have to have the chords 
class Arcs extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.chords);
  }

  render(){
    return (
      <g transform={`translate(${this.props.width/2}, ${this.props.height/2})`}>
        {this.props.chords.groups.map((group) => {
          return (
            <path d={this.props.arc(group)} 
            fill={`black`}/>
          )
        })}
      </g>
    );
  }
}

export default Arcs;