import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [OrderItemsModule]
})
export class OrdersModule {}
