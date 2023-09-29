import TransactionList from './TransactionList';
import styles from './Transactions.module.scss';

const Transactions = () => {
  return (
    <section className={styles.section}>
      <TransactionList type={'income'} title='Receitas' />
      <TransactionList type={'expense'} title='Despesas' />
    </section>
  );
};

export default Transactions;
