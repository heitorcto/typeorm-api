import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Coment } from './coment.entity';

@Entity()
export class Item extends AbstractEntity<Item> {
  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  @OneToMany(() => Coment, (coment) => coment.item, { cascade: true })
  coment: Coment[];
}
