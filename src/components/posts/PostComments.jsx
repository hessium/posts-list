import React, {useEffect, useState} from 'react';
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";

const PostComments = ({comments}) => {

	const [isLoader, setIsLoader] = useState(true)

	const  loaderDestroy = () => {
		setTimeout(()=> {
			setIsLoader(false)
		}, 1000)
	}
	useEffect(()=> {
		loaderDestroy()
	}, [])
	return (
		<div>
			{isLoader
				? <div className='spinner-wrapper'><Spinner animation="border" variant="primary" /></div>
				:	comments.map((com) =>
						<Accordion.Body key={com.id}>
							<h4>
								{com.email}
							</h4>
							<p>
								{com.body}
							</p>
						</Accordion.Body>
					)

			}
		</div>
	);
};

export default PostComments;