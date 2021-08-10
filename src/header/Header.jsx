import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img
                className="headerImg" 
                src="/images/computer.jpg"
                alt=""
            />
        </div>
    )
}
