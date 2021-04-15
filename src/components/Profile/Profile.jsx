import PropTypes from "prop-types";
import styles from './Profile.module.css';


const Profile = ({ data: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
} }) => (
    <div className={styles.profile}>
        <h2 className={styles.title}>Profile</h2>
        <div className={styles.description}>
            <div className={styles.wrapper}>
            <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
            </div>
                <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
            <li className={styles.stats__item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li  className={styles.stats__item} >
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li  className={styles.stats__item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
);
Profile.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}

export default Profile;
