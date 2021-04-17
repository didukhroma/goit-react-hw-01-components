import FriendListItem from './FriendListItem';
import PropTypes from "prop-types";
import styles from "./FriendList.module.scss"



const FriendList = ({ friends }) => {
    return (
        <section className={styles.friends}>
            <h2 className={styles.title}>Friends</h2>
            <ul className={styles.list}>
            {friends.map(friend => <FriendListItem key={friend.id } friend={friend}/>) }
            </ul>
        </section>)
} 

FriendList.propTypes = {
   friends: PropTypes.array.isRequired 
}

export default FriendList;



