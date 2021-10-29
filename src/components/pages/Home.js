import React, { Component } from 'react'
import { getAllBooks, getAllCharacters, getAllHomes } from '../../businessLogic'
import HeroSection from '../molecules/hero-section/heroSection';

export default class Home extends Component {
  state={
    activeBtn:'btn-get-books',

  }
  
  componentDidMount() {
    getAllBooks();
    getAllHomes();
    getAllCharacters();
  }

  render() {
    return (
      <div>
        <HeroSection />
        <div className='data-section'>
          <button className='btn btn-get-books' ><i class="fas fa-book"></i> Show All Books</button>
          <button className='btn btn-get-homes' ><i class="fas fa-home"></i> Show All Houses</button>
          <button className='btn btn-get-users' ><i class="fas fa-user"></i> Show All Characters</button>
        </div>
      </div>
    )
  }
}
