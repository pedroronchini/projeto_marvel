import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Character from './Character';

@Entity('events')
export default class Evento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Character, character => character.events)
  @JoinColumn({name: 'character_id'})
  characters_id: Character;
}