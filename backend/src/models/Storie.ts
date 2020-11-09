import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Character from './Character';

@Entity('stories')
export default class Storie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => Character, character => character.stories)
  @JoinColumn({name: 'character_id'})
  characters_id: Character;
}