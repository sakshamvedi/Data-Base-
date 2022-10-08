import React from 'react'
import Services from './Services';
function Input() {

const [data,newdata] = React.useState("");
const [info , newinfo] = React.useState([]);
const [gitlink,newgitlink] = React.useState("");
const [hosted ,newhost]  = React.useState("");
const [solved ,unsolved]  = React.useState("");
const[value,novalue] = React.useState("under review");






const getinfo = async()=>
    {
        console.log("hey")
        const data = await Services.getAllchat();
        console.log(data.docs);
       
        newinfo(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }


function handle(event)
{
   newdata(event.target.value);
   console.log(data);
}
function handle1(event)
{
   newgitlink(event.target.value);
   console.log(gitlink);
}
function handle2(event)
{
   newhost(event.target.value);
   console.log(hosted);
}
function handle3(event)
{
   unsolved(event.target.value);
   console.log(solved);
}


const submit  = async(e)=>
{
getinfo();
e.preventDefault();
const chats = {
 data,
 gitlink,
 hosted,
 solved,
 value,
}
console.log(chats);
try {
  await Services.addchat(chats);
   alert("Detail submitted successfully ")
  console.log("able to pass data")
  
} catch (error) {
  console.error("unable to pass data")
}

}

  return (
    <div className='container m-4'>



<div className="input-group">
  <span className="input-group-text">👤</span>
  <div className="form-floating is-invalid">
    <input
      type="text"
      onChange={handle}
      className="form-control is-invalid"
      id="floatingInputGroup2"
      placeholder="Username"
      required=""
    />
    <label htmlFor="floatingInputGroup2">Username</label>
  </div>
  
</div>


<div className="input-group has-validation">
  <span className="input-group-text">🧑‍💻</span>
  <div className="form-floating is-invalid">
    <input
      type="text"
      onChange={handle1}
      className="form-control is-invalid"
      id="floatingInputGroup2"
      placeholder="Git-REPO-LINK"
      required=""
    />
    <label htmlFor="floatingInputGroup2">Git-Repo-Link</label>
  </div>
 
</div>


<div className="input-group has-validation">
  <span className="input-group-text">🧩</span>
  <div className="form-floating is-invalid">
    <input
      type="text"
      onChange={handle2}
      className="form-control is-invalid"
      id="floatingInputGroup2"
      placeholder="Git-REPO-LINK"
      required=""
    />
    <label htmlFor="floatingInputGroup2">Hosted-Websote-link (if hosted)</label>
  </div>
 
</div>


<div className="input-group has-validation">
  <span className="input-group-text">😓</span>
  <div className="form-floating is-invalid">
    <input
      type="text"
      onChange={handle3}
      className="form-control is-invalid"
      id="floatingInputGroup2"
      placeholder="Git-REPO-LINK"
      required=""
    />
    <label htmlFor="floatingInputGroup2">Hard Question in Nishant-17</label>
  </div>
 
</div>




     
      <button className='btn btn-success mt-4 mx-4' onClick={getinfo}>Final Submissions</button>

<hr></hr>
<h1>Submissions</h1>
<hr></hr>

     


      {info.map((docs,index)=>
{
  


  return (

    <>
    <div className="card border  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">
              {docs.data}</div>
            <div className="card-body text-danger">
               <h5 className="card-title"></h5>
         < a href={docs.gitlink}>
         <img
  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
  height="40px"
  width="40px"
/>
{docs.data} Repo 

         </a>
         <hr></hr>
<a href={docs.hosted}>View Hosted Site</a>
<hr></hr>
         <div className='alert alert-danger'>{docs.solved} Questions I Feel Hard </div>
         </div>


               <span     style={{
        backgroundColor: "#06283D",
        color :"white"
      
      }}>
               <mark> Nishant-Review :</mark> {docs.value}
               </span>
       
          
    <span class="visually-hidden"></span>

          </div>
    </>
  )
}) 

}









    </div>
  )
}

export default Input
