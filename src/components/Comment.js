import React from 'react'
import {connect} from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import {deleteComment, fetchComments, changeCommentScore} from '../actions'

function Comment(props) {
let scoreClass;
if (props.score > 0){
	scoreClass = 'pos-score';
} else if (props.score < 0) {
	scoreClass = 'neg-score';
} else {
	scoreClass = '';
}

const {id, content, author} = props;

return(
	<div className="comment">
		<div className={`comment-score ${scoreClass}`}>{props.score}</div>
		<button className="comment-edit" href="" onClick={() => props.edit(id, content, author)}><FaPencil/></button>
		<a className="comment-remove"
						href=""
						onClick={(event) => {
							props.removeComment(props.id);
							props.getComments(props.parentId);
						}}><FaTrash/></a>
		<p className="comment-author">{props.author}</p>
		<p className="comment-body">{props.content}</p>
		<div className="comment-controls">
			<span><a className="comment-upvote" href="" onClick={() => props.voteOnComment(props.id, 'upVote')}><FaArrowUp /></a></span>
			<span><a className="comment-downvote" href="" onClick={() => props.voteOnComment(props.id, 'downVote')}><FaArrowDown /></a></span>
		</div>
	</div>
)
}


function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    getComments: (id) => dispatch(fetchComments(id)),
	removeComment: (comment) => dispatch(deleteComment(comment)),
	voteOnComment: (id, voteType) => dispatch(changeCommentScore(id, voteType)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment)