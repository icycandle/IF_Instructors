import {ILacturerRepo} from "@/usecase/repository/lacturer_repo";
import {ILecturer} from "@/domain/lecturer";

export function showLacturerDetail(lacturerRepo: ILacturerRepo, pk: string): ILecturer {
    return lacturerRepo.get_detail(pk)
}
