import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "boolean", default: false })
    isDone: boolean;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}