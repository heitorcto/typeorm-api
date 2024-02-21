import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Item } from './item.entity';

@Entity()
export class Coment extends AbstractEntity<Coment> {
  @Column()
  content: string;

  @ManyToOne(() => Item, (item) => item.coment)
  item: Item;
}
