import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Character from './Character';

@Entity('series')
export default class Serie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  status: string;


  @ManyToOne(() => Character, character => character.series)
  @JoinColumn({name: 'character_id'})
  characters_id: Character;
}