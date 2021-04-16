import { createUseStyles } from 'react-jss';
import PropTypes from "prop-types";

const useStyles = createUseStyles({
    item: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        border: '1px solid black',
    },
    status: {
        width: 20,
        height: 20,
        borderRadius: `50%`,
        backgroundColor: (isOnline) => (isOnline ? 'green' : 'red'),
        marginRight:10
    },
    avatar: {
         marginRight:10
    },
    name: {
        fontSize: 20,
        fontWeight: 500,
    }
    })

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
      const classes = useStyles(isOnline);
return (
    <li className={classes.item}>
        <span className={classes.status}></span>
        <img className={classes.avatar} src={avatar} alt={name} width="48" />
        <p className={classes.name}>{name}</p>
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
