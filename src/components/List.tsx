import React from "react";

interface IProps{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

// const List = (props: IProps) => { could also do:
// const List = ({ people }: IProps) => { or
// const List: React.FC<IProps> = () => { or
const List: React.FC<IProps> = ({ people }) => {

	return (
		<div>
			I am a list
		</div>
	)
}

export default List