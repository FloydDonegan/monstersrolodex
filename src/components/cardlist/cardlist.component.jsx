import React from 'react';
import './cardlist.styles.css'

import { Card } from '../card/card.component';

export const Cardlist = props => {
return <div className="card-list">
       {
         props.monsters.map(monster => (<Card key={monster.id} monster={monster}/>))
        }
    </div>
}