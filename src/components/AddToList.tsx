import React, { useState } from 'react';
import { Istate as Props } from "../App";


// we first pass in the props we're dealing with as IProps
interface IProps{
	people: Props["people"]
	setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

// Then we change "AddToList" into a FC and it takes IProps as its props
const AddToList: React.FC<IProps> = () => {

	const [input, setInput] = useState({
		name: "",
		age: "",
		note: "",
		img:  ""

	})

	const handleChange  =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void  => {
		setInput({
			...input, // keep the rest of the input the same
			[e.target.name]: e.target.value
		})
	}

	const handleClick = (): void => {} // means fn returns void

	return (
		<div className="AddToList">
			<input 
				type="text" 
				placeholder="Name"
				className="AddToList-input"
				value={input.name}
				name="name"
				onChange={handleChange}
			/>
			<input 
				type="text" 
				placeholder="Age"
				className="AddToList-input"
				value={input.age}
				name="age"
				onChange={handleChange}
			/>
			<input 
				type="text" 
				placeholder="Image url"
				className="AddToList-input"
				value={input.img}
				name="img" // this has to match type in useState above
				onChange={handleChange}
			/>
			<textarea 
				placeholder="Notes"
				className="AddToList-input"
				value={input.note}
				name="note"
				onChange={handleChange}
			/>

		</div>
	)

} 

export default AddToList