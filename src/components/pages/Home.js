import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllBooks, getAllCharacters, getAllHomes } from '../../businessLogic'
import BookCard from '../molecules/book-card/bookCard';
import HeroSection from '../molecules/hero-section/heroSection';

const btns = [ {
  iconClassName: 'fas fa-book',
  content: 'Show All Books',
},
{
  iconClassName: 'fas fa-home',
  content: 'Show All Houses',
},
{
  iconClassName: 'fas fa-user',
  content: 'Show All Characters',
} ]

class Home extends Component {
  state = {
    activeBtnIndex: 0,
  }

  componentDidMount() {
    getAllBooks();
    getAllHomes();
    getAllCharacters();
  }

  updateActiveBtnIndex = (index) => {
    this.setState({ activeBtnIndex: index })
  }

  renderView = (books) => {
    const { activeBtnIndex } = this.state;
    if (activeBtnIndex === 1) {
      return <h2 className="text-center">WIP: houses not found</h2>
    } else if (activeBtnIndex === 2) {
      return <h2 className="text-center">WIP:characters not found</h2>
    } else {
      return (
        <div className="books-wrapper">
          {
            books ? books.map((book, index) =>
              <BookCard data={book} index={index} />
            ) : <h2 className="text-center">books not found</h2>
          }
        </div>
      )
    }
  }

  render() {
    const { activeBtnIndex } = this.state;
    const { books, houses, characters } = this.props;

    return (
      <div style={{paddingBottom:"3rem"}}>
        <HeroSection />
        <div className='data-section'>
          {
            btns.map((btn, index) =>
              <button
                className={activeBtnIndex === index ? 'btn active-btn' : 'btn'}
                onClick={() => this.updateActiveBtnIndex(index)}>
                <i class={btn.iconClassName}></i>{" " + btn.content + " "}
              </button>
            )
          }
        </div>


        <div class="section-heading">
          <span class="section-title">
            {activeBtnIndex === 1 ? "Houses List" : activeBtnIndex === 2 ? "Characters List" : "Books List"}
          </span>
        </div>

        {this.renderView(books)}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    books: state.mainReducer.books,
    houses: state.mainReducer.houses,
    characters: state.mainReducer.characters
  }
}
export default connect(mapStateToProps)(Home)
