import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const renderBands = this.props.bands.map((band, indx) => <li key={indx}>{band.name}</li>)
    return(
      <div>
        <BandInput addBand ={this.props.addBand}/>
        <h1>Bands</h1>
        <ul>
          {renderBands}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band: band})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
