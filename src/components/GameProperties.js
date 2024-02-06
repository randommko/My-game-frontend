import React from "react";

class GamePropeties extends React.Component {
  state = {
    cell_x: 0,
    cell_y: 0
  }


  // state = {
  //   firstName: "",
  //   firstNameError: ""
  // };

  // onFirstNameChange = event => 
  //   this.setState({
  //     firstName: event.target.value
  //   });

  
  // validateName = name => {
  //   const regex = /[A-Za-z]{3,}/;

  //   return !regex.test(name)
  //   ? "Имя должно содержать не менее 3 символов и содержать только буквы"
  //   : "";
  // }

  // onFirstNameBlur = event => {
  //   const firstName = this.state.firstName;
  //   const firstNameError = this.validateName(firstName)
  //   return this.setState({firstNameError})
  // }
    


  // render () {
  //   const { firstNameError, firstName } = this.state;

  //   return (
  //     <div>
  //       <text>Введите имя: </text>
  //       <input type="text"
  //         placeholder="Введите имя" 
  //         name="firstName"
  //         size="30"
  //         onChange={this.onFirstNameChange} 
  //         onBlur={this.onFirstNameBlur}
  //       />
  //       <p/>
  //       <text>
  //         Name: {this.state.firstName}
  //       </text>
  //       <p/>
  //       <text>
  //          <div>Name Error: {this.state.firstNameError}</div>
  //       </text>
  //     </div>
  //   );
  // }
}

export default GamePropeties;