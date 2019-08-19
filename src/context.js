import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config()




const LyricsContext = React.createContext();

class LyricsProvider extends Component {
    state= {
        heading: 'Top 25 Tracks',
        tracks: [],
        artist: [],
        text: ''
    }

    componentDidMount() {
        axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=25&country=eg&f_has_lyrics=1
        &apikey=${process.env.REACT_APP_LYRICS_API_KEY_NAME}
        `)
            .then(response => {
                let tracks =response.data.message.body.track_list;
                this.setState({tracks: tracks});
                console.log(this.state.heading, tracks);
            });
    }


    handleTextChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        this.setState({text: val}, () => {
            if(val === '') {
                this.setState({tracks: []})
            } else {
                axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.text}&page_size=3&page=1&s_track_rating=desc
                &apikey=${process.env.REACT_APP_LYRICS_API_KEY_NAME}`)
                .then(response => {
                    let tracks =response.data.message.body.track_list;
                    this.setState({tracks: tracks});
                    console.log(tracks);
                });
            }

        });
    }

    getData = () => {
        let tracks = this.state.tracks;
        let {track, artist, album, id_track, id_artist, id_album, haslyrics} = tracks;
        axios.get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=&f_has_lyrics=1
        &apikey=${process.env.REACT_APP_LYRICS_API_KEY_NAME}`)
            .then(response => {
                if(haslyrics) {
                    console.log('NO Lyrics')
                }
                console.log(response.data)
            })
    } 


    render() {
        return (
            <div>
                <LyricsContext.Provider value={{
                    ...this.state, 
                    handleTextChange: this.handleTextChange,
                    getData: this.getData
                    }} >
                    {this.props.children}
                </LyricsContext.Provider>
            </div>
        )
    }
}

const LyricsConsumer = LyricsContext.Consumer;

export {LyricsContext, LyricsProvider, LyricsConsumer}