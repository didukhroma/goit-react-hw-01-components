import styles from './transaction.module.scss';
import PropTypes from "prop-types";

const Transaction = ({ item: { type, amount, currency } }) => {
    return (<tr>
                <td className={styles.data}>{type}</td>
                <td className={styles.data}>{amount}</td>
                <td className={styles.data}>{currency}</td>
            </tr>)
}

Transaction.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
}
export default Transaction;