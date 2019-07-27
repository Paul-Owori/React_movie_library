import React, { Component } from 'react';

class MoviesLibrary extends Component {
  state={
    title:"",
    description:"",
    genre:"",
    actors:{actorList:["Actor1","Actor2","Actor3"]},
    name:"Paul"
  }


  handleInputChange = ({ target }) => {
   this.setState({ [target.name]: target.value });
   console.log("Current state==>>", this.state)
 };

 handeSubmit=event=>{
   event.preventDefault()
   console.log("EVENT",event)
   console.log("STATE",this.state)

   this.setState({
     [this.title.name]:this.title.value,
     [this.description.name]:this.description.value,
     [this.genre.name]:this.genre.value
   }, () => {
     console.log("THIS==>>",this)
     console.log("STATE==>>",this.state)
   })

 }

  render() {
    return (
      <div>
      <h1>Controlled Component</h1>
      <form>
      <label>Title</label><br/>
      <input type="text" name="title" onChange={this.handleInputChange}></input><br/>
      <label>Description</label><br/>
      <input type="text" name="description" onChange={this.handleInputChange}></input><br/>
      <label>Genre</label><br/>
      <input type="text" name="genre" onChange={this.handleInputChange}></input><br/>
      </form>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={this.handeSubmit}>
      <label>Title</label><br/>
      <input type="text" name="title" ref={input=>{this.title= input}}></input><br/>
      <label>Description</label><br/>
      <input type="text" name="description" ref={input=>{this.description= input}}></input><br/>
      <label>Genre</label><br/>
      <input type="text" name="genre" ref={input=>{this.genre= input}}></input><br/>
      <button type="submit">Submit</button>
      </form>
      </div>
    );
  }

}

export default MoviesLibrary;
