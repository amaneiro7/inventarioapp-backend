import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { CreateDirectivaUseCase } from "../domain/CreatorDirectivaUseCase"
import { Directiva, type DirectivaPrimitives } from "../domain/Directiva"

export class DirectivaCreator {
  private readonly createDirectivaUseCase: CreateDirectivaUseCase
  constructor(private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>) {
    this.createDirectivaUseCase = new CreateDirectivaUseCase(directivaRepository)
  }


  async run({ params }: { params: Omit<DirectivaPrimitives, 'id'> }): Promise<void> {
    const { name } = params
    await this.createDirectivaUseCase.execute({ name })

    const directiva = Directiva.create({ name })

    await this.directivaRepository.save(directiva.toPrimitive())
  }

}




