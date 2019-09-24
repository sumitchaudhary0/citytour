import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar';
import './App.scss';
import TourList from './Component/TourList/TourList';
export default class App extends Component {
  render() {
    return (
      <main>
          <Navbar />
          <TourList />
      </main>
    )
  }
}
