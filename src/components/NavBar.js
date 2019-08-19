import React, {Component} from 'react'
import { Container, Grid, Input, Menu } from 'semantic-ui-react';
import ModalComponent from '../components/Modal';
import { Card, Header, List, Image, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


import _ from 'lodash';
import AboutMe from './AboutMe';
import BuiltWith from './BuiltWith';



export default class NavBar extends Component {
    state = {
        activeItem: 'home'
        }

    handleItemClick = (e, { name }) => this.setState({ 
        activeItem: name,
     });


    render() {
        const { activeItem } = this.state
        return (
            <React.Fragment>
                <Container style={{marginTop: '1rem'}}>
                    <Menu secondary stackable>
                        <Link to="/" style={{marginRight: '0.6rem'}}>
                            <Icon size="huge" color="blue" name="headphones" />
                        </Link>
                        <ModalComponent 
                        buttonTitle="Built With"
                        modalTitle='Technologies Used'
                        iconName='react'
                        active={activeItem === 'Built-With'}
                        onClick={this.handleItemClick}
                        >
                            <BuiltWith />
                        </ModalComponent>
                        <ModalComponent
                        buttonTitle="About Me"
                        modalTitle='More About Me'
                        active={activeItem === 'About Me'}
                        onClick={this.handleItemClick}
                        >
                            <AboutMe />
                        </ModalComponent>
                    </Menu>
                    
                </Container>
            </React.Fragment>
    
        )
    }
}
