import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
        this.state={
            username:'',
            password:'',
            isValidate:0
        };
    }
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value});
    }
    handleValidate(username,password,isValidate){
      if(this.state.username==="mounika" && this.state.password==="1234")
      {
        this.setState({isValidate:1});
        this.props.history.push('/dashboard')
      }
      else if(this.state.username && !this.state.password)
        alert("Please enter password")
      else if(!this.state.username && this.state.password)
        alert("Please enter username")
      else if(!this.state.username && !this.state.password)
        alert("Please enter username and password")
      else if(this.state.username && this.state.password)
        alert("Please enter valid username and password")
    }
    render() {
        return (
            <div className='lloyds' style={{ width: '100%', height: '100vh'}}>
        <div className='login container-fluid'>
        <div className='bank'>
            <b>Lloyds Banking Group</b>
          </div>
          <div className='row'>
            <div className='col-sm-5 col-xs-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='row'>
            <div className='col-12'>
              <div className='login_bg' style={{ paddingTop: '49px', paddingLeft: '38px' }}>
                <div className='login_heading'>
                  <b>User Login Page</b>
                </div>
                <input type='text' className='fieldoutline' style={{ marginTop: '28px' }}
                  placeholder='User Name' name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                <input type='password' className='fieldoutline' style={{ marginTop: '13.9px' }}
                  placeholder='Password' name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                <div className='button_bg' style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer'
                }}
                  tabIndex="1" onClick={()=>this.handleValidate(this.state.username,this.state.password,this.state.isValidate)}>
                  Login
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Login;