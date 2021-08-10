import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className='singlePostImg'
                    src="images/computer2.jpg"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Gemechis</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error quasi quod dignissimos non enim consequatur ipsam. 
                    Temporibus deleniti est ipsam provident dignissimos eius,
                    amet reiciendis, voluptates error maxime similique vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error quasi quod dignissimos non enim consequatur ipsam. 
                    Temporibus deleniti est ipsam provident dignissimos eius,
                    amet reiciendis, voluptates error maxime similique vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error quasi quod dignissimos non enim consequatur ipsam. 
                    Temporibus deleniti est ipsam provident dignissimos eius,
                    amet reiciendis, voluptates error maxime similique vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error quasi quod dignissimos non enim consequatur ipsam. 
                    Temporibus deleniti est ipsam provident dignissimos eius,
                    amet reiciendis, voluptates error maxime similique vitae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Error quasi quod dignissimos non enim consequatur ipsam. 
                    Temporibus deleniti est ipsam provident dignissimos eius,
                    amet reiciendis, voluptates error maxime similique vitae?
                </p>
            </div>
        </div>
    )
}
