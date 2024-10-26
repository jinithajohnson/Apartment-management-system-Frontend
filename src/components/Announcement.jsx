// import axios from 'axios'
// import React, { useState } from 'react'
// import NavbarAdmin from './NavbarAdmin'


// const Announcement = () => {

//     const [token,setToken]=useState(sessionStorage.getItem("token"))


//     const [input,setInput]=useState(
//         {"message":"","userId":sessionStorage.getItem("userId")}
// )

//     const InputHandler=(event)=>{
//         setInput({...input,[event.target.name]:event.target.value})
//     }
//     const readValues=()=>{
//         console.log(input)
//         console.log(token)
//         axios.post("http://localhost:8088/create",input, {
//             headers:{'token':sessionStorage.getItem("token"),"Content-Type":"application/json"}
//         }).then(
//             (response)=>{
//                 console.log(response.data)
//                 if(response.data.status=="success")
//                 {
//                     alert("Posted Successfully")
//                 }
//                 else
//                 {
//                     alert("Posting Failed")
//                 }
//             }
//         ).catch(
//             (error)=>{
//                 console.log(error.message)
//                 alert(error.message)
//             }
//         )
//     }
//   return (
//     <div>
//         <NavbarAdmin/>
//     <div className="container">
//         <div className="row">
//             <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                 <div className="row g-3">
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <label htmlFor="" className="form-label">Post a message</label>
//                         <textarea name="message" value={input.message} className="form-control" onChange={InputHandler}></textarea>
//                     </div>    
//                     <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <button  onClick={readValues} className="btn btn-success">POST</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>  
// )
// }
// export default Announcement


import axios from 'axios'
import React, { useState } from 'react'
import NavbarAdmin from './NavbarAdmin'


const Announcement = () => {

    const [token,setToken]=useState(sessionStorage.getItem("token"))


    const [input, setInput] = useState({
        message: "",
        userId: sessionStorage.getItem("userId")  // Make sure userId is set correctly here
    });


    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        console.log(token)

       axios.post("http://localhost:8088/create", input, {
    headers: { 'token': sessionStorage.getItem("token"), "Content-Type": "application/json" }
}).then(
    (response) => {
        console.log(response.data);
        if (response.data.status === "success") {
            alert("Posted Successfully");
        } else {
            alert(`Posting Failed: ${response.data.error || response.data.status}`);
        }
    }
).catch(
    (error) => {
        console.log(error.message);
        alert(`Error: ${error.message}`);
    }
);
    }
  return (
    <div>
        <NavbarAdmin/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Create an Announcement</label>
                        <textarea name="message" value={input.message} className="form-control" onChange={InputHandler}></textarea>
                    </div>    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button  onClick={readValues} className="btn btn-success">POST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>  
)
}
export default Announcement