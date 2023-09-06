import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "想像文學獎師網",
  description: "致力於成為教學現場與優秀文學講師之間的橋樑",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <div data-theme="dark" className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>關於我們</a>
                </li>
                <li>
                  <a>課程資源</a>
                  <ul className="p-2">
                    <li>
                      <a href="#intros">講師介紹</a>
                    </li>
                    <li>
                      <a href="#course-filter">課程搜尋介面</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>講師邀約教學</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <img
                className=""
                src="/logo-1.png"
                alt=""
                width={10}
                height={20}
              ></img>
              想像文學獎師網
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>關於我們</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>課程資源</summary>
                  <ul className="p-2">
                    <li>
                      <a href="#search-box">講師介紹</a>
                    </li>
                    <li>
                      <a href="course-filter">課程搜尋介面</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>講師邀約教學</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">登錄講者資料</a>
          </div>
        </div>
        {children}

        <footer
          data-theme="dark"
          className="footer footer-center p-10 bg-base-300 text-base-content rounded"
        >
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Image
                src={"/logo.svg"}
                alt={"IF"}
                width={180}
                height={180}
              ></Image>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
