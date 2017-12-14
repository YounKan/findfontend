import React from 'react';
import './Item.css';
import Header from '../Header/Header';


import { } from 'semantic-ui-react'



class Profile extends React.Component {

  render() {
    return (
      <div>
        < Header />
       

        <div class="content">
        <img class="ui medium centered image" src="https://www.dhresource.com/0x0s/f2-albu-g5-M01-C0-65-rBVaI1lLb_SAMx-sAADUS0h9O6w346.jpg/50cm-line-friends-brown-bear-plush-toys-cony.jpg" /> 
        <div class="ui one column centered grid">
          <div class="row">
              <div class="column" >
              <h2>>name owner</h2>
              </div>
            </div>  </div>
          <div class="ui two column grid">
            <div class="row">
              <div class="column">
                <div class="ui segment">name item</div>
              </div>
              <div class="column">
                <div class="ui segment">description</div>
              </div>
            </div>
            <div class="row">
              <div class="column">
              <div class="ui segment">looking for</div>
              </div>
              <div class="column">
              <div class="ui segment">transportation</div>
              </div>
            </div>
                
                <div class="ui segment" >

                  <div class="ui labeled button" floated="right">
                    <button class="ui red button" tabindex="0"><i aria-hidden="true" class="heart icon"></i> Like</button>
                    <div class="ui red left pointing basic label">2,048</div>
                  </div>
                  <div class="ui labeled button" >
                    <button class="ui blue basic button " tabindex="0" >
                      <i aria-hidden="true" class="fork icon"></i>View</button>
                    <a class="ui blue left pointing basic label">1,048</a>
                  </div>

                </div>

              </div>
            </div>
          </div>

       
        );
  }
}

export default Profile;
