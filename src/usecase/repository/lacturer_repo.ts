import {ILecturer, IServiceOptionWithLecturerInfo} from "@/domain/lecturer";

export interface ILacturerRepo {
    get_list: () => ILecturer[],
    get_detail: (pk: string) => ILecturer,
    filter: (search: string, tags: string[]) => ILecturer[],
    get_lacturer_service_details: (lecturer_pk: string, name: string) => IServiceOptionWithLecturerInfo,

}