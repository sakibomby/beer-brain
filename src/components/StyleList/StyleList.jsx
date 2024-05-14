import './StyleList.css';

export default function StyleList({ styles, activeStyle, setActiveStyle }) {
    const stylesList = styles.map(style =>
      <ul
        key={style}
        className={style === activeStyle ? 'active' : ''}
        onClick={() => setActiveStyle(style)}
      >
        {style}
      </ul>
    );
    return (
      <ul className="StyleList">
        {stylesList}
      </ul>
    );
  }
  