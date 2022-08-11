import React from 'react';
import Catalog from '../components/catalog/Catalog';
import Filters from '../components/filters/Filters';
import PageRouting from '../components/pageRouting/PageRouting';

const CatalogPage  = () => {
  return (
    <main>
        <PageRouting/>
        <div className="container">
            <div className="content" style={{display: 'flex', columnGap: '20px', paddingBottom:'60px'}}>
                <Filters/>
                <div className='catalog__wrap'>
                    <Catalog type="rose"/>                
                </div>
            </div>
        </div>
    </main>
  );
};


export default CatalogPage;