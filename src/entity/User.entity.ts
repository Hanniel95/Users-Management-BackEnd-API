import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ nullable: false, name: "first_name" })
  first_name: string;

  @Column({ nullable: false, name: "last_name" })
  last_name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  gender: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
