import React from "react";

const Modal = (props) => (
<div className={props.isActive} onClick = {() => props.closeModal()}>
  <div className="modal-background"></div>
  <div className="modal-content">
    <div className = "box has-text-centered">
        <p className = "is-size-3">You already chose that pup!</p>
        <p className = "is-size-5">Your final score was <strong>{props.count}</strong>.</p>
        <p className = "is-size-5">Try Again!</p>
    </div>
  </div>
</div>
)



export default Modal;