import React, {Component} from 'react';
import Film from '../components/Film.js'
import ButtonLink from '../components/ButtonLink.js'

class FilmList extends Component{

  render(){

    let films = this.props.films.map(film => {
      return (
        <Film url={film.url} key={film.id}>{film.name}</Film>
      )
    })
    return(
    <div className="FilmBox">
      <ul>
        {films}
      </ul>
      <ButtonLink url={this.props.link.url}>{this.props.link.text}</ButtonLink>
    </div>
  )}

}

export default FilmList;
