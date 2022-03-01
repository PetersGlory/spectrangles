import React,{useState} from 'react'
import '../../assets/css/bootstrap.css'
import axios from 'axios'


export const JoinUs = () => {
  const [name, setName] = useState()
  const [lname, setLname] = useState()
  const [mail, setMail] = useState()
  const [message, setMessage] = useState()

  const handleForm = ()=>{
    // const url = "https://spec-node.vercel.app/send";'http://localhost/specapi/send.php'
    const url = "http://leadcodegiants.hstn.me/specapi/send.php";
    const datas = {
      fname: name,
      lname: lname,
      email: mail
    }
   setTimeout(()=>{
    axios.post(url, datas).then(function(response){
        console.log(response.data);
        setMessage(response.data)
    });
    
   },1000)
    // alert(datas.fname)
  }
  return (
    <>
      <div className="joinuss">
        {/* left section  */}
        <div className="left">
          <h3>Join Network</h3>
          <h5>Personal Information</h5>
         <div className="row form-group1">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>First Name *</label>
             <input type="text" className="form-control" name="fname" value={name} onChange={(e)=>{
               setName(e.target.value)
             }} />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Last Name *</label>
             <input type="text" className="form-control" name="lname" value={lname} onChange={(e)=>{
               setLname(e.target.value)
             }} />
           </div>
         </div>
         <div className="row form-group2">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Email Address *</label>
             <input type="text" className="form-control" name="email" value={mail} onChange={e=>{
               setMail(e.target.value)
             }} />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Phone Number *</label>
             <input type="text" className="form-control" />
           </div>
         </div>
         <div className="row form-group3">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>City *</label>
             <input type="text" className="form-control" />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Country *</label>
             <input type="text" className="form-control" />
           </div>
         </div>
         <div className="row form-group4">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Gender *</label>
             <select className="form-control" id="">
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select>
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Area of proficiency/experience *</label>
             <input type="text" className="form-control" />
           </div>
         </div>

         <h5 className='h5'>Employment Details</h5>
         <div className="row form-group5">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Salary Expectation *</label>
             <input type="text" className="form-control" />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Current Organization *</label>
             <input type="text" className="form-control" />
           </div>
         </div>
         <div className="row form-group6">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Employment Status *</label>
             <input type="text" className="form-control" />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Current Job Title *</label>
             <input type="text" className="form-control" />
           </div>
         </div>
         <div className="row form-group7">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Total Years of Professional Experience *</label>
             <input type="text" className="form-control" />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Preferred Work Type *</label>
             <input type="text" className="form-control" />
           </div>
         </div>
         <h5 className='h4'>Resume and Skills</h5>
         <div className="row form-group8">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Resume/CV *</label>
             <input type="file" className="btn btn-primary" />
           </div>
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Other Skills *</label>
             <div className="d-flex">
             <input type="text" className="form-control col-5" />
             <button className="btn btn-primary col-2">Add</button>
             </div>
           </div>
         </div>
         <h5 className='h3'>Links & Portfolio</h5>
         <div className="row form-group9">
           <div className="form-group ">
           <label htmlFor="" className='text-primary'>Linkedin Profile *</label>
             <input type="text" className="form-control" style={{width:"50%",marginTop:"10px"}} />
           </div>
           <div className="form-group ">
            <label htmlFor="" className='text-primary'>Github Profile *</label>
            <input type="text" className="form-control" style={{width:"50%",marginTop:"10px"}} />
 
           </div>
           <div className="form-group ">
            <label htmlFor="" className='text-primary'>Portfolio url *</label>
            <input type="text" className="form-control" style={{width:"50%",marginTop:"10px"}} />
 
           </div>
         </div>
         <div className="row form-group10">
           <div className="form-group col-6">
             <label htmlFor="" className='text-primary'>Twitter Profile *</label>
             <input type="text" className="form-control" />
           </div>
           <div className="form-group col-6" style={{marginTop:"-5%"}}>
             <h4 className='text-primary'>Additional Information</h4>
             <label htmlFor="" className='text-primary'>How did you here about us?</label>
             <select name="" className="form-control"  id="">
               <option value=""></option>
               <option value=""></option>
               <option value=""></option>
               <option value=""></option>
             </select>
           </div>
           <div className="form-group mt-5">
             <label htmlFor="" className='text-primary'><input type="checkbox" /> <b className='text-dark'> &nbsp;&nbsp;&nbsp;I accept to Applicants Terms and Condition</b></label>
           </div>
           <button className="btn btn-primary mx-auto d-block " onClick={handleForm} style={{width:"30%", marginTop:"20px", padding:"2%", backgroundColor:"#135896"}}>Submit Application</button>
         </div>
         <p className="text-primary text-center">{message}</p>
        </div>

        {/* right section  */}
        <div className="right">
          <div className="mask">
            <div className="grouped">
              <div className="stac"></div>
            </div>
          </div>
          <div className="firstText">
            <h3>Join Our Network</h3>
            <p>Spectrangle hires and manages the best talents for in-house projects and external companies globally. We are currently accepting applications for Fullstack developers, Frontend developers, Backend developers, DevOps engineers, Cybersecurity engineers, UI/UX designers, Graphic designers, Data scientists, Content developers, Digital marketers, etc.</p>
          </div>
          <div className="secondText">
            <h3>What to expect:</h3>
            <p>Drills testing your communication, reasoning and tecnical skils.
If accepted, you will be able to get internal and external job oppurtunities with priu packages.</p>
          </div>
        </div>
      </div>
    </>
  )
}
