import { createUseStyles } from 'react-jss';
import randomColor from '../randomColor';

//

const StatListItem = ( { data: { label, percentage },  quantity }) => {
    const useStyles = createUseStyles({
        item: {
            width: `calc(100% / ${quantity})`,
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
    const classes = useStyles();
 return   (
    <li className={classes.item}>
        <span className={classes.label}>{label}</span>
        <span className={classes.percentage}>{percentage}%</span>
    </li>
)
};

export default StatListItem;