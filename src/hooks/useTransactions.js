import {useState, useEffect} from 'react';
import axios from 'axios';

export function useTransactions() {
  const basePath = process.env.API_BASE_URL;
  const transactionsUrl = `${basePath}/transactions`;

  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const {data} = await axios.get(transactionsUrl);

    return data;
  };

  const _handleGetTransactions = async () => {
    const fetchedTransactions = await getTransactions();

    setTransactions(fetchedTransactions);
  };

  const addTransaction = async (value, isDebit) => {
    const type = isDebit ? 'debit' : 'credit';
    const transaction = {
      value,
      type,
    };
    await axios.post(transactionsUrl, transaction);
    await _handleGetTransactions();
  };

  const deleteTransaction = async id => {
    await axios.delete(`${transactionsUrl}/${id}`);
    await _handleGetTransactions();
  };

  useEffect(() => {
    _handleGetTransactions();
  }, []);

  return {
    transactions,
    addTransaction,
    deleteTransaction,
  };
}
