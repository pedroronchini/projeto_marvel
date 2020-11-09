import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Character from './Character';

@Entity('comics')
export default class Comic {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  language: string;

  @Column()
  publishing: string;

  @Column()
  launch: string;

  @Column()
  finish: string;

  @Column()
  editions: number;

  @ManyToOne(() => Character, character => character.comics)
  @JoinColumn({name: 'character_id'})
  characters_id: Character;
}