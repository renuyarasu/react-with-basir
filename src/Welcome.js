import Message from './Message';

function Welcome(props){
    return <div>
        <h1>Welcome to the {props.title}</h1>
        <Message message="React is which framework?" />
    </div>
}
export default Welcome;