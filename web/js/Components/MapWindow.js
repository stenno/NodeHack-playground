import React from 'react';

export default class MapWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { glyphs } = this.props.currentMap;
    console.log('map window got glyphs', glyphs);
    const objectGlyphs = glyphs.filter(glyph => glyph.data.section === 'objects');
    const monsterGlyphs = glyphs.filter(glyph => glyph.data.section === 'monsters');
    const objects = objectGlyphs.map(glyph => {
      const { data, effects, row, col } = glyph;
      return (<li>{row}/{col}: {data.name} {effects.join(', ')}</li>);
    });
    const monsters = monsterGlyphs.map(glyph => {
      const { data, effects, row, col } = glyph;
      return (<li>{row}/{col}: {data.name} {effects.join(', ')}</li>);
    })
    return (
      <div class='map-container'>
        <ul>
          { objects }
        </ul>
        <ul>
          { monsters }
        </ul>
      </div>
    )
  }
}