import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Comic from './Comic';
import Evento from './Evento';
import Serie from './Serie';
import Storie from './Storie';

@Entity('characters')
export default class Character {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  character: string;

  @Column()
  species: string;

  @Column()
  occupation: string;

  @Column()
  power: string;

  @Column()
  affiliation: string;


  @OneToMany(() => Comic, comic => comic.characters_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'characters_id'})
  comics: Comic[];

  @OneToMany(() => Evento, evento => evento.characters_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'characters_id'})
  events: Evento[];

  @OneToMany(() => Serie, serie => serie.characters_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'characters_id'})
  series: Serie[];

  @OneToMany(() => Storie, storie => storie.characters_id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'characters_id'})
  stories: Storie[];
}
