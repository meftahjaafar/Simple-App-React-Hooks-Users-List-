import React from 'react'
import { useHistory } from 'react-router-dom'

const ContactCard = ({name,email,img,id,deleteCard,setEditing,currentUserHandler}) => {

    const history = useHistory()

    return (
    <li className="list-group-item  d-flex justify-content-between my-2">
         <img src={img} alt={name} width="100x" height="100px" />
         <h6>{name}</h6>
         <h6>{email}</h6>
         <div className="user-icon">
             <span className="mx-2 text-success" 
             onClick={()=>{
                    setEditing(true)
                    currentUserHandler({'name':name,
                    'email': email,
                    'img': img,
                    'id': id})
                    history.push('/edit-form')
                 }}>
                 <i className="fas fa-pen"></i>
             </span>

             <span className="mx-2 text-danger" onClick={()=>deleteCard(id)} >
                 <i className="fas fa-trash" ></i>
             </span>
         </div>
      </li>

    )
}

export default ContactCard
