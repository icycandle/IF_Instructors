import {ILacturerRepo} from "@/usecase/repository/lacturer_repo";
import {ILecturer} from "@/domain/lecturer";

export function filterLecturers(lacturerRepo: ILacturerRepo, search: string, tags: string[]): ILecturer[] {
    return lacturerRepo.filter(search, tags)
}
