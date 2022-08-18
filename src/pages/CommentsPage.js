import React from 'react';

import PageRouting from '../components/pageRouting/PageRouting';
import Reviews from '../components/reviews/Reviews';

const CommentsPage = () => {
  return (
    <main>
        <div className="container">
            <PageRouting direction='Отзывы'/>
            <Reviews/>
        </div>
    </main>
  )
}

export default CommentsPage;