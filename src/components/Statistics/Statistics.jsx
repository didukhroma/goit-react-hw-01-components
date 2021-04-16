import { createUseStyles } from 'react-jss';
import StatListItem from './StatListItem'
import PropTypes from "prop-types";

const useStyles = createUseStyles({
    statistics: {
        margin: [20,0,20,0],
        textAlign: 'center',
    },
    title: {
        margin: [0,0,20,0],
        padding: 0,
    },
    stat__list: {        
        margin: '0 auto',
        padding: 0,
        listStyle: 'none',
        width: 300,
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } 
    })
   

const Statistics = ({ title, stats }) => {
    const classes = useStyles();
  return  (
        <section className={classes.statistics}>
            {title && (<h2 className={classes.title}>{title}</h2>)}

            <ul className={classes.stat__list}>
            
                {stats.map((elem) => (<StatListItem key={elem.id} data={elem} quantity={stats.length} />)
                )}
           
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;
