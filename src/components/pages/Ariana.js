import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';



function Ariana() {
    return (
      <div className='cards'>
        <h1>Check out these your Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='https://i.pinimg.com/564x/a6/0e/d0/a60ed0eb0b71c5c142c3120f5163553b.jpg'
                text='Tunis --> Manouba'
                label='Tunis'
                path='/services'
              />
              <CardItem
                src='https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/Ouv.png?itok=96NzZg1j'
                text='Tunis --> Ariana'
                label='Manouba'
                path='/services'
              />
       
              
            </ul>
    
     
          </div>
        </div>
      </div>
    );
  }
  
  export default Ariana;