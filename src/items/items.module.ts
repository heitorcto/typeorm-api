import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';
import { Coment } from './entities/coment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Listing, Coment])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
