import { BaseEntity, DeepPartial, ObjectLiteral, Repository } from 'typeorm';
export declare abstract class BaseRepository<T extends BaseEntity, R extends Repository<T>> {
    protected readonly repository: R;
    constructor(repository: R);
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(data: T): Promise<T>;
    update(id: number, data: T extends DeepPartial<ObjectLiteral> ? ObjectLiteral : {}): Promise<T>;
    delete(id: number): Promise<boolean>;
}
