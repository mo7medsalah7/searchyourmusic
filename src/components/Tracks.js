import React, { Component } from 'react'
import Wrapper from './Wrapper';
import { Container,Grid,  Card, Header } from 'semantic-ui-react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import SearchTrack from '../components/SearchTrack';

import {LyricsContext} from '../context';
import TracksList from './TracksList';

export default class Tracks extends Component {
    static contextType = LyricsContext;
    render() {
        let {tracks, heading} = this.context;
        if(tracks === undefined || tracks.length === 0) {
            return (
                <>
                    <Segment>
                            <Dimmer active>
                            <Loader size='large'>Loading</Loader>
                            </Dimmer>
                    
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Segment>
                </>
            )
        } else {
            return(
                <>
                    <section className="mt-5 container">
                    <div className="row justify-content-center">
                            {tracks.map((item, index) => {
                                return (
                                    <div className="col-md-6 col-12 col-lg-4 mb-5">
                                        <TracksList
                                            key={index}
                                            trackName={item.track.track_name}
                                            artist={item.track.artist_name}
                                            album={item.track.album_name}
                                            track_id={item.track.track_id}
                                        />
                                    </div>
                                )
                            })};
                    </div>
                    </section>
                </>
            )
        }
        return (
            <Wrapper>
                <Header as="h1" textAlign="center">
                    {heading}
                </Header>
                {tracks}
            </Wrapper>
        )
    }
}
