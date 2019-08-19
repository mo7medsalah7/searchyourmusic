import React from 'react'
import { Button,Icon,  Card, Header, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


export default function TracksList({trackName, artist, album, track_id}) {
    return (
        <React.Fragment>
               
            <Card>
                <Card.Content>
                <Header as='h2'>{trackName}</Header>
                <Header as='h3'>{artist}</Header>
               
                <Label ribbon style={{minWidth: '-webkit-fill-available'}}>
                    <Card.Description as="h3">{album}</Card.Description>
                </Label>
                </Card.Content>
                <Link to={`lyrics/track/${track_id}`}>
                    <Button animated fluid color="blue">
                        <Button.Content visible>View Lyrics</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Link>
            </Card>
 

        </React.Fragment>
    )
}
