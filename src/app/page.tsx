import Link from "next/link";
import { getLacturerRepoHardCode } from "@/infra/lecturerRepo";
import { listAllLacturer } from "@/usecase/list-all-lacturer";
import { ILecturer } from "@/domain/lecturer";

function CellComponent(data: ILecturer) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={data.image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link
            href={`/lecturer/${data.pk}`}
            target="_blank"
            rel="noopener noreferrer"
          >{data.name}</Link>
        </h2>
        <p>{data.introduction}</p>
      </div>
    </div>
  );
}

const lacturerRepo = getLacturerRepoHardCode();
const lecturerList = listAllLacturer(lacturerRepo);

const cellComponents = lecturerList.map(CellComponent);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/banner.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">當代文學之聲，啟發明日創新</h1>
            <p className="mb-5">創作者是教授創作最理想的人選。因應全國各級組織對於文學講師聯繫手段的渴求，這個網站彙整當代一流文學講師，著重技術分享，期望能將名為「文學」的魔法賦能給任何年齡層的受眾。幫助學生探索自身潛力，促進組織多元思維。</p>
            <a className="btn btn-primary" href="#intros">瀏覽課程資源</a>
          </div>
        </div>
      </div>

      <div id="intros" className="divider divider-horizontal w-full text-4xl my-8"> 講師介紹 </div>

      <div className="mb-32 grid lg:grid-cols-2 gap-4">
        {cellComponents}
      </div>
    </main>
  );
}
