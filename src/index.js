import Arena from './arena';
import Card from './card';
import Chest from './chest'
import Player from './player';

export default (baseUri = 'http://www.clashapi.xyz') => {

  return {
    arenas: new Arena(baseUri),
    cards: new Card(baseUri),
    chests: new Chest(baseUri),
    players: new Player(baseUri)
  }

}
