import React, { Component } from 'react'
import { Container, Header, Loader, Grid, Button, Icon, Segment, Dimmer, Image, Label } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Lyrics extends Component {
    state={
        lyrics: {},
        track: {}
    }

    componentDidMount() {
        axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.track_id}
        &apikey=ece3066004476881fe5f610bf4d61870`)
            .then(response => {
                let lyrics = response.data.message.body.lyrics;
                this.setState({
                 lyrics: lyrics
                });
                return axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.track_id}
                &apikey=${process.env.REACT_APP_LYRICS_API_KEY_NAME}`)
                .then(res => {
                    let track = res.data.message.body.track
                    this.setState({
                        track
                    })
                })
            });
    }
    render() {
        const {lyrics, track} = this.state;
        if(track === undefined ||Object.keys(track).length === 0 ) {
            return  <Segment>
                        <Dimmer active>
                        <Loader size='large'>Loading</Loader>
                        </Dimmer>
                
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Segment>
        } else if( lyrics === undefined || Object.keys(lyrics).length === 0  ) {
            return <Container>
                <Grid>
                    <Grid.Row textAlign="center" style={{ justifyContent: 'center', marginTop: '7rem'}}>
                        <Grid.Column largeScreen={16}>
                            <Link to="/">
                                <Button animated fluid color="blue">
                                    <Button.Content visible>Go Back</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                                </Button>
                            </Link>
                        </Grid.Column>
                        <Grid.Column largeScreen={16}>
                            <Label className="availability-alert" ribbon>No Lyrics Available</Label>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        } else {
            return (
                <Container>
                    <Header as="h1" textAlign="center">Lyrics</Header>
                    <Link to="/">
                        <Button animated fluid color="blue">
                            <Button.Content visible>Go Back</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow left' />
                            </Button.Content>
                        </Button>
                    </Link>
                    <Segment placeholder>
                        <Grid columns={2} relaxed='very' stackable style={{padding: '40px 30px'}}>
                            <Grid.Column>
                                <div style={{marginTop: '-1.75rem'}}>
                                    <Icon name="play" size="large" style={{marginBottom: '20px', display: 'inline'}}/> 
                                    <span style={{marginBottom: '20px', display: 'inline-block',marginLeft: '20px'}}>{track.track_name}</span>
                                    <p className="lyrics-box">{lyrics.lyrics_body}</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column >
                                <Segment><strong>Artist: </strong>{track.artist_name}</Segment>
                                <Segment><strong>Track ID:</strong> {track.track_id}</Segment>
                                <Segment><strong>Album ID:</strong> {track.album_id}</Segment>
                                <Segment><strong>Song Genre: </strong>{track.primary_genres.music_genre_list > 0 ? track.primary_genres.music_genre_list[0].music_genre.music_genre_name: 'Not Available'}</Segment>
                                <Segment><strong>Explicit Words: </strong>{track.explicit===0 ? 'No' : 'Yes'}</Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Container>
            )

        }
    }
}
