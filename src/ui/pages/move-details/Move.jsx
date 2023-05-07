import React,{useEffect, useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import cancle from "../../../assets/cancle.png";
import "./move.scss"
export default function Move() {
    window.scrollTo(0, 0)
    const [show,setShow]=useState(false);
    const navigate=useNavigate()
    const location = useLocation();
    const {pathname, state} = location
    // console.log(location)
    const closeform = (data) => {
        setShow(!show);
        localStorage.setItem('user', JSON.stringify(data));
      };
    return (
        <div>
            <section>
                <div className="container">
                    <div className="header-frame py-4">
                        <span className="fx-16 text-decoration-none fw-bold text-primary ">
                            &gt;<span onClick={()=>navigate('/')}>Move</span>  &gt;&nbsp;{state.item.show.name}
                        </span>
                    </div>
                    <div className="move-frame-section">
                        <div className="w-51 ">
                            <h3 className='fs-22-16 fw-bold black-2f2'>Move Name
                                <span className='text-black'>: {state.item.show.name}</span>
                            </h3>

                            <h3 className='fs-22-16 fw-bold black-2f2'>Reating
                                <span className='text-black'>: {state.item.show.rating.average == null
                                        ? Math.floor(Math.random() * 6).toFixed(1)
                                        : state.item.show.rating.average}</span>
                            </h3>
                            <h3 className='fs-22-16 fw-bold black-2f2'>Status
                                <span className='text-black'>
                                    : {state.item.show.status}</span>
                            </h3>

                            <h3 className='fs-22-16 fw-bold black-2f2'>
                                language
                                <span className='text-black'>: {state.item.show.language}</span>
                            </h3>
                            <h3 className='fs-22-16 fw-bold black-2f2 w-100 d-flex'>
                                Geners
                                <span className='d-flex'>:&nbsp;<p className='mb-0 text-black w-100'>{state
                                            .item
                                            .show
                                            .genres
                                            .map((item, i) => {
                                                return <> {
                                                    item
                                                } 
                                                </>
                                    } )}</p>
                                </span>
                            </h3>
                            <h3 className='fs-22-16 fw-bold black-2f2'>
                                Type
                                <span className='text-black'>: {state.item.show.type}</span>
                            </h3>
                            <h3 className='fs-22-16 fw-bold black-2f2'>
                                Release date
                                <span className='text-black'>: {state.item.show.premiered}</span>
                            </h3>
                            <button onClick={closeform} className='primary-btn text-white w-50 mt-5 mk-full'>Book Know</button>
                        </div>
                        <div className="w-51 img-box">
                            <img
                                src={state.item.show.image
                                ?.original}
                                alt=""/>
                        </div>
                    </div>
                    <div className="summary-box">
                        <h4 className='fs-26-20'>Summary :-</h4>
                        <p className='mt-4  fs-22-16 black-2f2 fw-normal'>{state.item.show.summary}</p>
                    </div>
                </div>
            </section>
{
    show?<Form onClose={closeform}/>:null
}
            

        </div>
    )
}

function Form({onClose}) {
    const location = useLocation();
    const {pathname, state} = location;
    const [inputform,setInputform]=useState({move:state.item.show.name,language:state.item.show.language,type:state.item.show.type,date:state.item.show.premiered,phone:"",name:"",age:"",gender:""})
    const {move,language,type,date,phone,name,age,gender}=inputform;
    function changhandle(e){
    setInputform({...inputform,[e.target.name]:e.target.value});
   }
   function submithandler(){
    onClose(inputform)
    setInputform({move:"",language:'',type:"",date:"",phone:"",name:"",age:"",gender:""})
    console.log(inputform)
   }
    return (
        <section className='form-main-secton'>
            <form action="" >
                <img src={cancle} alt="" onClick={onClose} />
                <div className="input-frame">
                    <label htmlFor="move">Move :</label>
                    <input type="text" id='move' value= {move} name='move'  onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="language">Language :</label>
                    <input type="text" id='language' value={language} name='language' onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="Type">Type :</label>
                    <input type="text" id='Type' placeholder='' value={type} name='type' onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="Date">Date :</label>
                    <input type="date" id='Date' value={date} name='date' onChange={changhandle}  className='input-box' />
                </div>
               
                <div className="input-frame">
                    <label htmlFor="no">Your Phone No :</label>
                    <input type="text" id='no' placeholder='123456789' name='phone' value={phone} onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="Name">Your Name :</label>
                    <input type="text" id='Name' placeholder='Alex' name='name' value={name} onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="move">Age :</label>
                    <input type="number" id='move' pattern='/^[0-9]+$/' name='age' value={age} placeholder='19' onChange={changhandle}  className='input-box' />
                </div>
                <div className="input-frame">
                    <label htmlFor="Gender">Gender :</label>
                    <input type="text" id='Gender'  placeholder='Male' name='gender' value={gender} onChange={changhandle}  className='input-box' />
                </div>
                <div className="w-100 text-center">
                <button type='button' onClick={submithandler} className='primary-btn text-white w-50 mx-auto mt-5 mk-full'>proceed to payment</button>
                        
                </div>
            </form>
        </section>
    )
}