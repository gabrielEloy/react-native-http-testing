import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const basePath = process.env.API_BASE_URL;
const transactionsUrl = `${basePath}/transactions`;

export function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.get(transactionsUrl);
      return data;
    } catch (err) {
      console.error(err);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const _handleGetTransactions = useCallback(async () => {
    const fetchedTransactions = await getTransactions();

    setTransactions(fetchedTransactions);
  }, [getTransactions]);

  const addTransactionToState = newTransaction =>
    setTransactions([newTransaction, ...transactions]);
  const removeTransaction = id =>
    setTransactions(transactions.filter(transaction => transaction.id !== id));

  const addTransaction = async (value, isDebit) => {
    const type = isDebit ? 'debit' : 'credit';
    setIsLoading(true);
    try {
      const transaction = {
        value,
        type,
      };
      const {data} = await axios.post(transactionsUrl, transaction);
      addTransactionToState(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTransaction = async id => {
    setIsLoading(true);
    try {
      await axios.delete(`${transactionsUrl}/${id}`);
      removeTransaction(id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    _handleGetTransactions();
  }, [_handleGetTransactions]);

  return {
    transactions,
    addTransaction,
    deleteTransaction,
    isLoading,
  };
}
