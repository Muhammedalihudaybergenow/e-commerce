import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { Repository, TreeRepository } from 'typeorm';
import { TreeBuilder } from 'src/common/utils/tree-builder';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepository: TreeRepository<CategoryEntity>){
  }
  create(createCategoryDto: CreateCategoryDto) {
    const entity = new CategoryEntity();
    entity.name = createCategoryDto.name;
    entity.icon = createCategoryDto.icon;
    if(createCategoryDto.parentId){
      const parent = new CategoryEntity()
      parent.id = createCategoryDto.parentId;
      entity.parent = parent;
    }
    return this.categoryRepository.save(entity);
  }

  async findAll() {
    const result =await this.categoryRepository.query(
  `
  WITH RECURSIVE category_trees AS (
    SELECT 
        id,
        name,
        icon,
        parent_id,
        1 AS level
    FROM categories pc
    WHERE pc.parent_id IS NULL
    
    UNION ALL
    
    SELECT 
        c.id,
        c.name,
        c.icon,
        c.parent_id,
        ct.level + 1 AS level
    FROM categories c
    INNER JOIN category_trees ct ON c.parent_id = ct.id
)
    SELECT * FROM category_trees`)
      return TreeBuilder.buildTree(result,null)
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
