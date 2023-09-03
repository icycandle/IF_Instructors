import {ILacturerRepo} from "@/usecase/repository/lacturer_repo";
import {ILecturer} from "@/domain/lecturer";

export function listAllLacturer(lacturerRepo: ILacturerRepo): ILecturer[] {
    return lacturerRepo.get_list()
}
