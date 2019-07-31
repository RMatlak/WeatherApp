import React from "react";

const Form = props => {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        placeholder="Type City"
        onChange={props.handleInputChange}
      />
    
    </form>
  );
};

export default Form;
