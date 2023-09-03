import { ILacturerRepo } from "@/usecase/repository/lacturer_repo";
import { EServiceOptionType, ILecturer, IServiceOption, IServiceOptionWithLecturerInfo } from "@/domain/lecturer";

const lecturerData: ILecturer[] = [
    {
        pk: "寺尾",
        name: "寺尾哲也",
        image: "/寺尾.jpg",
        tags: ["novel"],
        introduction: "臺灣作家、工程師。作品常以天才的各種面向為出發。著有短篇小說集《子彈是餘生》",
        serviceOption: [
            {
                name: "novel-1",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            },
            {
                name: "novel-2",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            }
        ]
    },
    {
        pk: "林楷倫",
        name: "林楷倫",
        image: "/林楷倫.jpg",
        tags: ["novel"],
        introduction: "出生於台中，魚販、作家。曾獲林榮三文學獎小說獎。著有《偽魚販指南》、《雪卡毒》",
        serviceOption: [
            {
                name: "novel-3",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            },
            {
                name: "novel-4",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            }
        ]
    },
    {
        pk: "李奕樵",
        name: "李奕樵",
        image: "/奕樵.jpg",
        tags: ["novel"],
        introduction: "一九八七年生，台北人。曾獲林榮三文學獎小說獎。著有小說《遊戲自黑暗》",
        serviceOption: [
            {
                name: "novel-5",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            },
            {
                name: "novel-6",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            }
        ]
    },
    {
        pk: "陳冠宏",
        name: "陳冠宏",
        image: "/冠宏.jpg",
        tags: ["novel"],
        introduction: "一九九六年生，台中人。曾獲文化部青年創作補助。出版小說《東宮行啟》。",
        serviceOption: [
            {
                name: "lesson-poem",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            },
            {
                name: "lesson-poem-2",
                type: EServiceOptionType.Lecture,
                description: "lesson-one description",
                example_url: "https://youtube.com"
            }
        ]
    },
]

export class LacturerRepoHardCode implements ILacturerRepo {
    get_list = () => lecturerData.concat(lecturerData).concat(lecturerData).concat(lecturerData).concat(lecturerData).concat(lecturerData).concat(lecturerData);
    get_detail = (pk: string) => {
        const lecturer = lecturerData.filter((value) => value.pk === pk).pop()
        if (!lecturer) {
            throw Error(`lecturer pk ${pk} not found`)
        }
        return lecturer
    };

    filter = (search: string, tags: string[]) => {
        return lecturerData.filter((value) => {
            const tagFilled = tags.every(
                (tag) => value.tags.includes(tag)
            )
            if (!tagFilled) return false
            return JSON.stringify(value).includes(search)
        })
    };

    get_lacturer_service_details = (lecturer_pk: string, name: string) => {
        const lecturer = this.get_detail(lecturer_pk)
        const lesson = this.get_detail(lecturer_pk).serviceOption.filter(value => value.name === name).pop()
        if (!lesson) throw Error(`lesson not fount lecturer_pk=${lecturer_pk} name=${name}`)
        const data: IServiceOptionWithLecturerInfo = {
            ...lesson,
            lecturer,
        }
        return data
    };
}

export function getLacturerRepoHardCode() {
    return new LacturerRepoHardCode()
}