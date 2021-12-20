import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const basePath = process.env.API_BASE_URL;
const transactionsUrl = `${basePath}/transactions`;

export function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async () => {
    const {data} = await axios.get(transactionsUrl);

    return data;
  }, []);

  const _handleGetTransactions = useCallback(async () => {
    const fetchedTransactions = await getTransactions();

    setTransactions(fetchedTransactions);
  }, [getTransactions]);

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
  }, [_handleGetTransactions]);

  return {
    transactions,
    addTransaction,
    deleteTransaction,
  };
}
