
import PropTypes from "prop-types";
import styles from './FriendListItem.module.scss';


const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
return (
    <li className={styles.item}>
        {isOnline ? 
            (<span className={styles.status__active}></span>)
        : ( <span className={styles.status}></span>)}
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool
   }) 
}

FriendListItem.defaultProps = {
    friend: {
        isOnline : false,
    }
}

export default FriendListItem;
