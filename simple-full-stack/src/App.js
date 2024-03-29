import React, {Component} from 'react';
import './App.css';

class App extends Component {

 

  constructor() {  
      super();
      this.state = {
        title: 'User Info',
        Users: []
      }
    }
    

    
    //learn ajax and make calls here ?????????




    componentDidMount(){
      console.log('Component has mounted');
    }

addUser(event)
{
  var that = this;
event.preventDefault();
let data={
  User_Name: this.refs.User_Name.value,
  User_Level: this.refs.User_Level.value
};

var request = new Request('http://localhost:3000/api/new-user',{
  method: 'POST',
  headers: new Headers ({ 'Content-Type': 'application/json'}),
  body: JSON.stringify(data)
});

// trying new xml http request()

fetch(request)
.then(function(response){
  response.json()
  .then(function(data) {

    console.log(data);
  
    if(data.code == "23505")
    {
      alert("Name already exists, please enter a different name. (Error 400: Bad Request)");
    }
   


    let users = that.state.users;
  //  users.concat(data);
    that.setState({
      users:users
   
    })
  })
})
.catch(function(err) {
  console.log(err);
})
}


render(){
let title = this.state.title;

      return (<div className="App">
      <h1> {title} </h1>

      <form ref="userForm">
      <input type="text" ref="User_Name" placeholder="User Name"/>
      <input type="text" ref="User_Level" placeholder="User Level"/>
      <button onClick = {this.addUser.bind(this)}> Add User </button>
      </form>

    </div>);
  }
}

export default App;
