import React from 'react'
import { Grid, Header, List, Image, Icon } from 'semantic-ui-react'

export default function BuiltWith() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Icon name='react' size='huge' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Header>Built with <Icon name='heart' size='huge' />Using:</Header>
                        <List as='ul'>
                            <List.Item as='li' size='massive'>React</List.Item>
                            <List.Item as='li' size='massive'>React Context Api</List.Item>
                            <List.Item as='li' size='massive'>MusixMatch Music Api</List.Item>
                            <List.Item as='li' size='massive'>Semantic UI</List.Item>
                            <List.Item as='li' size='massive'>Google Fonts</List.Item>
                            <List.Item as='li' size='massive'>Bootstrap v4</List.Item>

                        </List>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    )
}
