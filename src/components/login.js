import React, {Component} from 'react';


class Login extends Component {

    constructor(props){
        super(props);
        this.state = {username: '', password:'', status : false};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

       
    }

    handleUsernameChange(event) {
      
        this.setState({username: event.target.value});
        // this.props.handleChange(this.state);
    }

    handlePasswordChange(event) {
        
        this.setState({password: event.target.value});
       
    }

    componentDidMount(){
       
    }
    
    handleSubmit() {
       fetch('http://demo2658235.mockable.io/login',{
            method: 'POST',
			body: JSON.stringify({
				username: 'prashantj',
				password: 'asdsaa'
			})
        }).then((response) =>  {
            return  response.json();
        }).then((data) => {
            this.setState({ status : data.success });
        });
    }


     render(){
        return (
            <div className="container" >
                {/* <form> */}
                    <label>Name:
                    <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                    <div>{this.state.status ? "success" : "fail"}</div>
                 {/* </form> */}
            </div>
        );

    }; 
}

export default Login;