import React,{useState} from "react";

function Form(props){
		const [name,setName]=useState("");

		function handleChange(event){
			setName(event.target.value);
			console.log(event.target.value);
		}
		function handleSubmit(event){
			event.preventDefault();
			// props.addTask("Say hello!");
			// props.addTask(name);
			props.onSubmit(name);
			setName("");
		}
		return(
			<form onSubmit={handleSubmit}>
			<h2 className="label-wrapper">
			<label htmlFor="new-todo-input" className="label__lg">
			What needs to be done?
			</label>
			</h2>
			<input
			type="text"
			id="new-todo-input"
			className="input input__lg"
			name="text"
			autoComplete="off"
			value={name}
			onChange={handleChange}
			/>
			<button type="submit"
			className="btn btn__Primary btn__log">
			Add
			</button>
			</form>
		);
}


export default Form;
