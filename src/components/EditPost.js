import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchCategories,
		fetchAllPosts,
		fetchPost,
		editPost} from '../actions'

class EditPost extends Component {
	state = {
		id: '',
		title: '',
		author: '',
		body: '',
		category: '',
	}

	componentDidMount(){
		//Fetch post details for a single post
		const postID = this.props.match.params.post_id;
		if (postID !== '') {
			this.setState({id: postID});
			this.props.getPostByID(postID)
				.then(data => this.setState(data.post))
		} else {
			console.log('Error: No post ID available!');
		}
	}

	updateInput = (inputName, inputValue) => {
		this.setState({
			[inputName]: inputValue
		})
	}

	editPost = (event) => {
		event.preventDefault();
		const {id, timestamp, title, author, body, category, voteScore, deleted, commentCount} = this.state
		const editedPost = {
			id,
			timestamp,
			title,
			body,
			author,
			category,
			voteScore,
			deleted,
			commentCount,
		}
		this.props.submitPostChanges(editedPost.id, editedPost);
		this.props.history.push('/');
		this.props.getPosts();
	}

	render(){
	const {categories} = this.props.readableApp;
	

	return(
	<div className="edit-post container">
		<h3>Edit Post</h3>
		<p><strong>Post ID:</strong> {this.state.id}</p>
		<hr />
		
		<table className="post-form table-responsive">
	
		<tbody>
			<tr>
			<td>Title:</td>
			<td>
				<input id="title"
					   type="text"
					   className="form-control"
					   value={this.state.title}
					   onChange={event => (this.updateInput(event.target.id, event.target.value))} />
			</td>
			</tr>

			<tr>
			<td>Author:</td>
			<td>
				<input id="author"
							 type="text"
							 className="form-control"
							 value={this.state.author}
							 onChange={event => (this.updateInput(event.target.id, event.target.value))} />
			</td>
			</tr>

			<tr>
			<td>Post:</td>
			<td>
			<textarea id="body"
					  className="form-control"
					  value={this.state.body}
					  onChange={event => (this.updateInput(event.target.id, event.target.value))} >
			</textarea>
			</td>
			</tr>

			<tr>
			<td>Category:</td>
			<td>
			<select id="category"
					className="form-control"
					value={this.state.category}
					onChange={event => (this.updateInput(event.target.id, event.target.value))}>
				{categories ? categories.map((category, index) =>
				<option key={index} value={category.name}>{category.name}</option>)
				: <option>No categories</option>}
			</select>
			</td>
			</tr>

		</tbody>
		
		</table>
		<input type="submit" value="Submit Changes" onClick={event => this.editPost(event)} />
		<Link to="/">Cancel</Link>
	</div>
	)
	}
}
function mapStateToProps (readableApp) {
  return {
    readableApp
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    getCategories: () => dispatch(fetchCategories()),
    getPosts: () => dispatch(fetchAllPosts()),
	getPostByID: (id) => dispatch(fetchPost(id)),
	submitPostChanges: (id, post) => dispatch(editPost(id, post)),
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(EditPost)
