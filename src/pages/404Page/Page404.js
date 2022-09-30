import React from 'react';
import { Link } from 'react-router-dom';

import st from './page404.module.scss';

const Page404 = () => {
  return (
    <main className={st['main']}>
        <div className="container">
            <section className={st['notfound']}>
                <div id={st['first']} className={st['round']}></div>
                <div id={st['second']} className={st['round']}></div>
                <div id={st['third']} className={st['round']}></div>
                <div id={st['fourth']} className={st['round']}></div>
                <div id={st['fifth']} className={st['round']}></div>
                <h1 className={st['notfound__title']}>404</h1>
                <h2 className={st['notfound__subtitle']}>Упс, эта страница не найдена</h2>
                <span className={st['notfound__desc']}>Страница, которую вы ищите, возможно, удалена, поменяла адрес, или больше недоступна.</span>
                <Link to="/" className={st['notfound__btn']}>Вернуться на главную</Link>
            </section>
        </div>
    </main>
  )
}

export default Page404;