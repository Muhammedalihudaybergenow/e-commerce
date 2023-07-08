import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { BrandEntity } from 'src/brands/entities/brand.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>){}
  create(createProductDto: CreateProductDto) {
    const entity = new ProductEntity(createProductDto);
    if(createProductDto.brandId){
      entity.brand = new BrandEntity({
        id: createProductDto.brandId
      })
    }
    if(createProductDto.categoryId){
      entity.category = new CategoryEntity({
        id: createProductDto.categoryId
      })
    }
    return this.productRepository.save(entity);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return this.productRepository.createQueryBuilder('product')
    .leftJoinAndSelect('product.brand','brand')
    .leftJoinAndSelect('product.category','category')
    .where('product.id =:id',{id})
    .getOne()
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
