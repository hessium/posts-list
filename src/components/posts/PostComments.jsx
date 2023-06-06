import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const PostComments = ({comments}) => {
	return (
		<div>
			{comments.map((com) =>
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