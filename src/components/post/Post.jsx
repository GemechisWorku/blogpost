import "./post.css"

export default function Post() {
    return (
        <div>
            <div className="post">
                <img
                    className="postImg"
                    src="/images/computer1.jpg"
                    alt=""
                />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias velit repudiandae voluptatem dignissimos consectetur
                    aperiam labore, ipsum, et culpa iure aut pariatur veritatis
                    harum, alias earum dicta recusandae similique eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias velit repudiandae voluptatem dignissimos consectetur
                    aperiam labore, ipsum, et culpa iure aut pariatur veritatis
                    harum, alias earum dicta recusandae similique eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias velit repudiandae voluptatem dignissimos consectetur
                    aperiam labore, ipsum, et culpa iure aut pariatur veritatis
                    harum, alias earum dicta recusandae similique eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias velit repudiandae voluptatem dignissimos consectetur
                    aperiam labore, ipsum, et culpa iure aut pariatur veritatis
                    harum, alias earum dicta recusandae similique eligendi.
                </p>
            </div>
        </div>
    )
}
