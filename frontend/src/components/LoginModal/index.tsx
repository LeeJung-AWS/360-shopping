import { useState } from "react";
import tempAv from "../../img/tempAv.png";
import ReactDOM from "react-dom";

interface ModalProps{
onBackdropClick: () => void
}

const LoginModal: React.FC <ModalProps> = ({onBackdropClick, children}) => {
return ReactDOM.createPortal (<div onClick={onBackdropClick}>
<span>Modal</span>
  </div>, document.getElementById("modal-root")!)

};
export default LoginModal;

// Login Modal__________________
 // return (
  //   <>
  //     <div id="modalID" className="modal">
  //       <form className="modal-content animate">
  //         <div className="imgcontainer">
  //           <span onClick={closeModal} className="close" title="Close Modal">
  //             &times;
  //           </span>
  //           <img src={tempAv} alt="Avatar" className="avatar"></img>
  //         </div>
  //         <div className="container-log">
  //           <label>Username</label>
  //           <input type="text" placeholder="SuperCoolUser" required />
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             placeholder="Enter super secret password here.."
  //             required
  //           />
  //           <div>
  //             <label>
  //               <input
  //                 className="remember-me"
  //                 type="checkbox"
  //                 checked={true}
  //                 name="remember"
  //               />
  //               Remember me
  //             </label>
  //             <div>
  //             <button type="button" onClick={closeModal} className="cancelbtn">Lgoin </button>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="container-log" style={{ backgroundColor: "#f1f1f1" }}>
  //           <button type="button" onClick={closeModal} className="cancelbtn">
  //             Cancel
  //           </button>
  //           <span className="psw">
  //             Forgot <a href="#">password?</a>
  //           </span>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );

  // _____________________________________

// import { useForm } from "../../hooks/useForm";

// export default function Login() {
//   // defining the initial state for the form
//   const initialState = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   // getting the event handlers from our custom hook
//   const { onChange, onSubmit, values } = useForm(UserLogin, initialState);

//   async function UserLogin() {
//     // send "values" to database via API call
//   }

//   return (
//     <main className="container-A">
//       <form onSubmit={onSubmit}>
//         <div>
//           <input
//             name="name"
//             id="email"
//             type="text"
//             placeholder="Name"
//             onChange={onChange}
//             required
//           />
//           <input
//             name="email"
//             id="email"
//             type="text"
//             placeholder="Email"
//             onChange={onChange}
//             required
//           />

//           <input
//             name="password"
//             id="password"
//             type="text password"
//             placeholder="Password"
//             onChange={onChange}
//             required
//           />
//           <div>
//             <button type="submit">Login</button>
//           </div>
//         </div>
//       </form>
//     </main>
//   );
// }
