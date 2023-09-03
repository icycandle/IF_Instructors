import {ILacturerRepo} from "@/usecase/repository/lacturer_repo";
import {IServiceOptionWithLecturerInfo} from "@/domain/lecturer";

export function showLacturerLessonDetail(lacturerRepo: ILacturerRepo, pk: string, name: string): IServiceOptionWithLecturerInfo {
    return lacturerRepo.get_lacturer_service_details(pk, name)
}
