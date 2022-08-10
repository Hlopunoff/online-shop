import React from 'react';
import Filters from '../components/filters/Filters';
import PageRouting from '../components/pageRouting/PageRouting';

const CatalogPage  = () => {
  return (
    <main>
        <PageRouting/>
        <div className="container">
            <div className="content">
                <Filters/>
            </div>
        </div>
    </main>
  );
};


export default CatalogPage;