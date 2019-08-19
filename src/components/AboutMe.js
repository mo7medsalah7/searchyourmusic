import React from 'react'
import { Grid, List, Icon, Image, Card } from 'semantic-ui-react';

export default function AboutMe() {

    return (
        <Grid>
            <Grid.Column width={8}>
                <Image src='/assets/images/profile-picture.jpg' size='medium'/>
            </Grid.Column>
            <Grid.Column width={6}>
            <List size="huge">
                <List.Item icon='user' content='Mohamed Salah' />
                <List.Item icon='marker' content='Cairo, Egypt' />
                <List.Item
                icon='mail'
                content={<a href='msmido9@gmail.com'>mohamed.salahhh.1996@gmail.com</a>}
                />
                <List.Item icon='phone' content='01204898905' />
            </List>
            </Grid.Column>
                <Grid.Column width={2}>
            </Grid.Column>
       </Grid>
    )
}

   