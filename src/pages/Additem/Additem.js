import React from 'react';
import './Additem.css';
import {postItem} from '../../api'
import Header from '../Header/Header';
class Main extends React.Component {
  state = { // set state can use in class component only
    name : '',
    description : '',
    lookfor:'',
    send:'',
    category:''
  }

  constructor(props) {
   super(props)
       this.state = {
           imageFiles: []
   }
   this.onTextChange = this.onTextChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
}
handleChange = (value) => {
  this.setState({ category: value })
}
onDrop(imageFiles) {
   this.setState({
      imageFiles: imageFiles
   })
}

onTextChange = event => { // can use for all that have name and value
  const name = event.target.name
  const value = event.target.value;
  this.setState({
    [name]: value
  })
}

onSubmit = event => {
  event.preventDefault() // no refresh
  postItem(this.state.name,this.state.description,this.state.look,this.state.send,this.state.category)
  .then(data => {
 if (data.status === 200) {
      this.props.history.replace('/post') // can use when import to file routes // redirect
   }
  })
}

  render() {
    return (
      <div className="main">
         < Header/>
        <div>
          <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <td>
                <input type="text" name="name" placeholder="ชื่อสิ่งของ" value={this.state.name} onChange={this.onTextChange} /><br />
                <input type="text" name="description" placeholder="คำอธิบาย" value={this.state.description} onChange={this.onTextChange}/><br />
                <input type="text" name="look" placeholder="มองหา" value={this.state.look} onChange={this.onTextChange}/><br />
                <input type="text" name="send" placeholder="การจัดส่ง" value={this.state.send} onChange={this.onTextChange}/><br />

                <input type="radio" name="category" value="shirt" onClick={(e) => this.handleChange('shirt')}/> เสื้อผ้า<br />
                <input type="radio" name="category" value="IT" onClick={(e) => this.handleChange('IT')} /> it<br />
                <input type="radio" name="category" value="on" onClick={(e) => this.handleChange('on')}  /> other
              </td>
            </tr>
            <div>
              <button type='submit'>เสนอ</button>
            </div>
          </table></form>

        </div>

      </div>
    );
  }
}

export default Main;
