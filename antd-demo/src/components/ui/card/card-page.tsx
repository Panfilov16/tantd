import React from 'react';
import Gallery from './callery';
import ReitingStar from '../reiting-stars';
import PagePag from '../pagination';

function CardPage(){
    return(
      <div >
        <div>
           <div style={{display: 'flex'}}>
           <Gallery/>
           <div>
           <h2>Name</h2>
           <p>Date</p>
          <div style={{display: 'flex'}}>
            <button>Action</button>
            <button>Drama</button>
          </div>
          </div>
          </div>
          <div> 
          A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...
          </div>
           <ReitingStar />
        </div>
        <PagePag />
      </div>
    );
}
export default CardPage;