import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these your Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.pinimg.com/564x/a6/0e/d0/a60ed0eb0b71c5c142c3120f5163553b.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Tunis'
              path='/services'
            />
            <CardItem
              src='https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/Ouv.png?itok=96NzZg1j'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Manouba'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://lh5.googleusercontent.com/p/AF1QipMLYjXz85c3Lz1C4PTh5295OpuJklTW4oUb3xI=w203-h114-k-no'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Ariana'
              path='/services'
            />
            <CardItem
              src='https://i.pinimg.com/originals/72/be/9e/72be9e16a175aa527328298508214a01.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Ben Arous'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
                <CardItem
              src='images/img-7.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;