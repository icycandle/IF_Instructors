export enum EServiceOptionType {
    Class = 'Class',
    Lesson = 'Lesson',
    Course = 'Course',
    Lecture = 'Lecture',
}

export interface IServiceOption {
    type: EServiceOptionType
    name: string
    example_url: string
    description: string
}

export interface ILecturer {
    pk: string
    name: string
    image: string
    tags: string[]
    introduction: string
    serviceOption: IServiceOption[]
}

export interface IServiceOptionWithLecturerInfo extends IServiceOption {
    lecturer: ILecturer,
}

export class LecturerEntity implements ILecturer {
    pk: string
    name: string
    image: string
    tags: string[]
    introduction: string
    serviceOption: IServiceOption[]

    constructor(data: ILecturer) {
        this.pk = data.pk
        this.name = data.name
        this.image = data.image
        this.tags = data.tags
        this.introduction = data.introduction
        this.serviceOption = data.serviceOption
    }
}