import React from 'react';
import _ from 'lodash';
import '../../scss/map.scss';

const Cell = (props) => {
  const handleTileHover = (e) => {
    const { row, col, updateGlyphData } = props;
    updateGlyphData(row, col);
  };
  return (<li className='cell' onMouseMove={ handleTileHover }>{ props.sym }</li>);
};

const GlyphDataWindow = (props) => {
  const {
    row, col, data: { name, section}, effects, 
  } = props.glyph;
  // lazy
  return (
      <ul class='glyphDataList'>
        <li>Row: { row }</li>  
        <li>Col: { col }</li>
        <li>Name: { name }</li>
        <li>Category: { section } </li>
        <li>Effects: { effects.join(', ') }</li>
      </ul>
  );
}
export default class MapWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGlyph: null
    };
    this.updateGlyphData = this.updateGlyphData.bind(this);
  }

  updateGlyphData(row, col) {
    const { glyphs } = this.props.currentMap;
    const currentGlyph = glyphs.find(glyph => glyph.row === row && glyph.col === col);
    console.log('current glyph glyphData', currentGlyph);
    if (typeof currentGlyph !== 'undefined') {
      console.log('current glyph gets set to', currentGlyph);
      this.setState({ currentGlyph });
    }
  }

  render() {

    const { data: { dimensions, data } } = this.props.currentMap;
    const chunkedData = _.chunk(data, dimensions.cols);
    const tileRows = chunkedData.map((row, index) => {
      const rowListItems = row.map(cell => {
        const index = cell.row * dimensions.cols + cell.col;
        const displayValue = cell.sym === '' ? '\u00A0' : cell.sym; // &nbsp;
        return (<Cell 
          key={ index } 
          sym={ displayValue }
          row={ cell.row }
          col={ cell.col } 
          updateGlyphData={ this.updateGlyphData }  />);
      });
      return (<li key={ index } className='row'><ul>{ rowListItems }</ul></li>);
    });
    return (
      <div class='map-container'>
        <ul class='map' onMouseMove={ this.handleTileHover }>
          { tileRows }
        </ul>
        <div class='currentGlyphContainer'>
          { this.state.currentGlyph !== null && <GlyphDataWindow glyph={ this.state.currentGlyph } /> }
        </div>
      </div>
    )
  }
}