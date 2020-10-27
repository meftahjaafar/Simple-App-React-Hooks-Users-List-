import React, { useState} from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from './Components/ContactCard'
import Form from './Components/Form'

function App() {

  const [contacts, setContacts] = useState([
    {'name':'John',
     'email': 'john@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
     {'name':'Joe',
     'email': 'joe@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
     {'name':'Johann',
     'email': 'johann@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
  ])
  const [currentUser, setCurrentUser] = useState(
    {'name':'',
     'email': '',
     'img': '',
     'id': 0}
  )
  
  const addCard = (e) => {
    setContacts([...e,...contacts])
  }

  const editCard = (e) => {
    setContacts(contacts.map(el=>el.id===e.id? e : el))
  }

  const currentUserHandler = (e) => {
    setCurrentUser(e)
  }
  
  const deleteCard = (e) => {
    setContacts(contacts.filter(person=>person.id !== e))
  }

  const [editing, setEditing] = useState(false)

  return (
    <div className="container">
    <div class="row">
        <div class="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Users List CRUD APP</h3>
      <Link to="/contact-list">
       <button className="btn btn-block btn-primary mt-3">Contact List</button>
      </Link>
      <Link to="/add-form">
        <button className="btn btn-block btn-primary mt-3" onClick={()=>{setEditing(false)
                              setCurrentUser({'name':'',
                              'email': '',
                              'img': '',
                              'id': 0})
        }}>Add Contact</button>
      </Link>
      </div>
    </div>
    <Switch>
    <div class="row">
        <div class="col-10 mx-auto col-md-8 mt-4">
      <Route path="/contact-list">

        <ul className="list-group my-5">
		  <h3 className="text-center">Users List</h3>
         {contacts.map((contact,i)=>{return <ContactCard currentUserHandler={currentUserHandler} setEditing={setEditing} key={i} deleteCard={deleteCard} name={contact.name} email={contact.email} id={contact.id} img={contact.img}/>} )}
         </ul>

      </Route>
      {editing ?
        <Route path="/edit-form"><Form editCard={editCard} setEditing={setEditing} setCurrentUser={setCurrentUser}  currentUser={currentUser}  editing={editing}/></Route> :
        <Route path="/add-form"><Form addCard={addCard} setCurrentUser={setCurrentUser} currentUser={currentUser}  editing={editing}/></Route>}
    </div>
    </div>
    </Switch>
  </div>
  );
}

export default App;
