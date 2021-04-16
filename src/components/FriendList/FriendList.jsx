import FriendListItem from './FriendListItem';
import { createUseStyles } from 'react-jss';
import PropTypes from "prop-types";

const useStyles = createUseStyles({
    friends: {
        textAlign: 'center',
        padding: 10,
    },
    title: {
        margin: [0,0,20,0],
        padding: 0,
    },
    list: {
        margin: '0 auto',
        padding: 0,
        textDecoration: 'none',
        maxWidth: 220,
    }
})

const FriendList = ({ friends }) => {
     const classes = useStyles();
    return (
        <section className={classes.friends}>
            <h2 className={classes.title}>Friends</h2>
            <ul className={classes.list}>
            {friends.map(friend => <FriendListItem key={friend.id } friend={friend}/>) }
            </ul>
        </section>)
} 

FriendList.propTypes = {
   friends: PropTypes.array.isRequired 
}

export default FriendList;



