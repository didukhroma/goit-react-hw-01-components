import PropTypes from "prop-types";
import Transaction from './Transaction'
import styles from './transactionHistory.module.scss'

const TransactionHistory = ({items}) => {
    return (
    <section className={styles.transactions}>
        <h2 className={styles.title}>Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.table__header}>Type</th>
                    <th className={styles.table__header}>Amount</th>
                    <th className={styles.table__header}>Currency</th>
                </tr>
             </thead>

            <tbody>
                {items.map(item => <Transaction key={item.id} item={ item} />)}           
            </tbody>
        </table>
    </section>
);
}
TransactionHistory.propTypes = {
     items: PropTypes.array.isRequired
 }

export default TransactionHistory;

