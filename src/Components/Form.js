import React from 'react'
import { useHistory } from 'react-router-dom'


const Form = ({setCurrentUser,addCard,editing,setEditing,currentUser,editCard}) => {

    const history = useHistory()

    return (
    <div className="card card-body  my-3">
        
        <form>
        <div className="form-group "> 
            <div className="input-group-prepend">
            <h2>{editing?'Edit contact':'Add contact'}</h2>
             <div       className={
                        editing ? "input-group-text bg-success text-white" :
                        "input-group-text bg-primary text-white"}> 
                <i className="fas fa-book"></i> 
             </div>
            </div>
                <label>Name:</label>
                <input type="text" className="form-control" onChange={(e)=>setCurrentUser(currentUser,[currentUser.name=e.target.value])} placeholder={currentUser.name} ></input>
                <label>Email:</label>
                <div className="input-group-prepend ">
                  <div className="input-group-text">@</div>
                  <input type="text" className="form-control" onChange={(e)=>setCurrentUser(currentUser,[currentUser.email=e.target.value])} placeholder={currentUser.email} ></input>
                </div>
                <label>Image url:</label>
                <input type="text" className="form-control" onChange={(e)=>setCurrentUser(currentUser,[currentUser.img=e.target.value])} placeholder={currentUser.img} ></input>
        </div>

                <button type="submit" onClick={(e)=>{if(currentUser.name.trim() && currentUser.email.trim() && currentUser.img.trim()!==''){
                    if(!editing){
                        addCard([{
                            name: currentUser.name,
                            email: currentUser.email,
                            img: currentUser.img,
                            id: Math.random()
                        }])
                        e.preventDefault()
                        history.push('/contact-list')} 
                    else {
                        editCard({
                            name: currentUser.name,
                            email: currentUser.email,
                            img: currentUser.img,
                            id: currentUser.id
                            })
                        setEditing(false)
                        e.preventDefault()
                        history.push('/contact-list')
                    }
                } else {
                        alert('Please, fill all fields')
                    }}}
                    className={
                        editing ? "btn btn-block btn-success mt-3" :
                        "btn btn-block btn-primary mt-3"}>
                {editing?'Save':'Add'}</button> 
                <button className="btn btn-block btn-secondary mt-3" onClick={()=>history.push('/contact-list')} >Cancel</button>                           
            </form>
    </div>
    )
}

export default Form
