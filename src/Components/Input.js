const  Input = (props) => {
    return <div className="form-group">
        <label for={props.type+"-"+props.role}>Password *</label>
        <input type={props.role} className="form-control" ref={props.ref} name={props.type+"-"+props.role} required />
    </div>
}
export default Input;