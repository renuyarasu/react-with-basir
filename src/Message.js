import React from 'react';

class Message extends React.Component{
    render(){
        return <h3>React is {this.props.message}</h3>
    }
}
export default Message;