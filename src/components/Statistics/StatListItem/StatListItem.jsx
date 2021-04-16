import { createUseStyles } from 'react-jss';
import randomColor from '../randomColor';
import PropTypes from "prop-types";

   const useStyles = createUseStyles({
        item: {
            width: (quantity)=>`calc(100% / ${quantity})`,
            height: 50,
            backgroundColor: () => randomColor(),
        },
        label: {
            padding: [5,0,5,0],
            display: 'block',
            minHeight: 20,
        },
         percentage: {
            display:'block'
        }
 
    })

const StatListItem = ( { data: { label, percentage },  quantity }) => { 
    const classes = useStyles(quantity);
 return   (
    <li className={classes.item}>
        <span className={classes.label}>{label}</span>
        <span className={classes.percentage}>{percentage}%</span>
    </li>
)
};
StatListItem.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
    quantity:PropTypes.number.isRequired
}

export default StatListItem;