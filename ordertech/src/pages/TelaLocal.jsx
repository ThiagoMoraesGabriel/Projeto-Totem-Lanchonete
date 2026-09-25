import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaLocal.module.css';

export default function TelaLocal({ executarComAtraso, setLocal }) {
  const navegar = useNavigate();
