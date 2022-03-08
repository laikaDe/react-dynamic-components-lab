import React, { Component } from 'react';

export default class ColorBox extends Component {
  render() {
    let opacityVal;
    if (this.props.opacity >= 0.2) {
      opacityVal = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      opacityVal = null;
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {opacityVal}
      </div>
    )
  }
}






// import React, { Component } from 'react';

// export default class ColorBox extends Component {

//   state = {
//     todos: [
      
//     ]
//   }

//   render() {
//     const newOpacity = this.props.opacity - 0.1;
//     return this.props.opacity == 0 ? null : (
//       <div className="color-box" style={{opacity: 1}}>
//         <div className="color-box"> ColorBox opacity={newOpacity}</div>
//       </div>
//     )
//   }

// }

