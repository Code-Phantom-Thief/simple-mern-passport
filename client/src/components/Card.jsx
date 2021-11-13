import {Link} from 'react-router-dom'

const Card = ({ post }) => {
    return (
        <div className="card">
            <Link className="link" to={`/post/${post.id}`}>
            <span className="title">{post.title}</span>
            <img src={post.img} alt="postImg" className="img" />
            <button className="cardButton">Read More</button>
            </Link>
        </div>
    )
}

export default Card
