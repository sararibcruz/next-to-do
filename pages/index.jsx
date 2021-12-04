import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const listaMock = [
    'tomar remedio para não dormir',
    'fazer cafe rancheiro',
    'estudar javascript',
    'jogar video game',
  ];

  const [lista, setLista] = useState(listaMock);
  const [item, setItem] = useState('');

  const adicionarItens = (evento) => {
    evento.preventDefault();
    console.log('adicionarItens');

    setLista([...lista, item]);

    console.log(lista);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next to do</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>To do list - Next</h1>
      <form onSubmit={adicionarItens}>
        <input type="text" autoFocus value={item} onChange={(evento) => setItem(evento.target.value)} />
      </form>
      <div>
        {lista.map((item, posicao) => (
          <p key={posicao}>{item}</p>
        ))}
      </div>
    </div>
)
}