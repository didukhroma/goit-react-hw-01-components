import StatListItem from './StatListItem'
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

  

const Statistics = ({ title, stats }) => {
  return  (
        <section className={styles.statistics}>
            {title && (<h2 className={styles.title}>{title}</h2>)}

            <ul className={styles.stat__list}>
            
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
