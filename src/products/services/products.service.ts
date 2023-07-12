import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { BrandEntity } from 'src/brands/entities/brand.entity';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { ProductQueryDto} from '../dto/product-query.dto';

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

  findAll(dto:ProductQueryDto) {
    const {limit,search,skip}=dto; 
const query =this.productRepository.createQueryBuilder('products');
if(search){
  query.where(
    'products.name ILIKE (:search) OR products.description ILIKE (:search)',
    {search : `%${search}%`}
  )
}
return query 
.take(limit)
.skip((skip-1)*limit)
.getMany()
  
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
    const entity=new ProductEntity({
      id,
    })
    return this.productRepository.remove(entity)
  }
}
