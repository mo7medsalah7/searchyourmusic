import React, { Component } from 'react'
import Wrapper from './Wrapper';
import {LyricsContext} from '../context';
import { Container, Header, Input, Menu, Icon, Image, Modal, Grid } from 'semantic-ui-react';
import ModalComponent from '../components/Modal';

export default class SearchTrack extends Component {
    static contextType = LyricsContext;
    render() {
        let {handleTextChange} = this.context
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16}>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='music' circular />
                                <Header.Content>Search Your Music</Header.Content>
                            </Header>
                            <Input vertical fluid icon='search' placeholder='Track...' onChange={handleTextChange} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}
