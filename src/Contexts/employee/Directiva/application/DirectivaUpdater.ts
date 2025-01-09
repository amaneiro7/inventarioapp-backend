import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { Directiva, type DirectivaPrimitives } from "../domain/Directiva"
import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { UpdateDirectivaUseCase } from "../domain/UpdateDirectivaUseCase"

export class DirectivaUpdater {
  private readonly updateDirectivaUseCase: UpdateDirectivaUseCase
  constructor(private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>) {
    this.updateDirectivaUseCase = new UpdateDirectivaUseCase(directivaRepository)
  }

  async run({ id, params }: { id: string, params: Omit<DirectivaPrimitives, 'id'> }): Promise<void> {
    const { name } = params
    const directivaId = new DepartmentId(id)

    const directiva = await this.directivaRepository.searchById(directivaId.value)
    if (!directiva) {
      throw new DepartmentDoesNotExistError('La Directiva')
    }

    const directivaEntity = Directiva.fromPrimitives(directiva)
    await this.updateDirectivaUseCase.execute({ params: { name }, entity: directivaEntity })

    await this.directivaRepository.save(directivaEntity.toPrimitive())
  }


}
