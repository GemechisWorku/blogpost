import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">Trending Technologies</span>
                <span className="headerTitleLarge">Personal Blog</span>
            </div>
            <img
                className="headerImg" 
                src="/images/computer3.jpg"
                alt=""
            />
        </div>
    )
}
