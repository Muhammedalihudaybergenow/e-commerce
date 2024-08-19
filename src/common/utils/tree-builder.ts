export class TreeBuilder {

    static buildTree(datas: any[],parent_id:number | null){
        return datas.filter((data)=>data.parent_id === parent_id)
        .map((item)=>({
            ...item,
            children: TreeBuilder.buildTree(datas,item.id)
        }))

    }
}