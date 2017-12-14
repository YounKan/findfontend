import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Grid,Image} from 'semantic-ui-react'

class Home extends React.Component {

  render() {
    return (
      <div>
  <Header />
  <Grid centered columns={2}  >
    <Grid.Row centered columns={4} color='black'>
    <Grid.Column>
    <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
    <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
    <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
    <Grid.Column>
    <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
    </Grid.Column>
  </Grid.Row>

    <Grid.Row centered columns={4} color='black'>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4} color='black'>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
      <Grid.Column>
      <Image src='https://i.pinimg.com/736x/67/ac/b9/67acb9194605e8c8341864b0d22cd680--we-bare-bears-panda.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Footer/>
      </div>


    );
  }
}

export default Home;
