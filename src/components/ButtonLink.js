import React, {Component} from 'react';

class ButtonLink extends Component{

  render(){
    return(
      <button><a href={this.props.url}>{this.props.children}</a></button>
    )
  }

}

export default ButtonLink;
