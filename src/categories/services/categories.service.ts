import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository, TreeRepository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepository: TreeRepository<CategoryEntity>){
  }
  create(createCategoryDto: CreateCategoryDto) {
    const entity = new CategoryEntity();
    entity.name = createCategoryDto.name;
    if(createCategoryDto.parentId){
      const parent = new CategoryEntity()
      parent.id = createCategoryDto.parentId;
      entity.parent = parent;
    }
    return this.categoryRepository.save(entity);
  }

  findAll() {
    return this.categoryRepository.findTrees()
  }

  findOne(id: number) {
    const category = new CategoryEntity()
    category.id = id;
    return this.categoryRepository.findDescendantsTree(category);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
