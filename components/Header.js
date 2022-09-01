import headerStyles from '../styles/Header.module.css';

const Header = () => {
    var x = 15;
    return (
        <div>
            <h1 className={headerStyles.title}><span>WebDev</span> News</h1>
            <p className={headerStyles.description}>Keep upto date with web dev news</p>
        </div>
    );
}

export default Header;