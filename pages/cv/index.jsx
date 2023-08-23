import { motion } from "framer-motion";
import BasicLayout from "../../components/Layout/BasicLayout";
import { profileInfor, skillList } from "../../util/data";

const Index = () => {
  return (
    <motion.div className="p-5">
      <motion.div className="background-paper rounded-md p-[50px] text-black wapper-cv">
        <div className="pb-2">
          <h1 className="text-5xl font-[700] uppercase ">
            Cao hoài sang
          </h1>
          <h1 className="text-5xl  uppercase">
            <b>it</b> developer
          </h1>
        </div>

        <ul className="list mt-3 text-xl">
          {profileInfor.map(({ type, data }) => (
            <li className="flex" key={data}>
              <div className="min-w-[180px]">
                ✦ <i>{type}</i>:
              </div>
              <div className="font-semibold">{data}</div>
            </li>
          ))}
        </ul>

        <motion.div className="mt-5 text-xl">
          <h1 className="font-bold uppercase pb-1 text-3xl border-b-[10px] border-black/20 border-double">
            EDUCATION
          </h1>

          <div className="flex gap-10 mt-2">
            <h1 className="w-[150px] shrink-0">2021-Present</h1>
            <div>
              University of Information Technology <br /> Majors:
              Information Systems <br /> GPA: ???
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-5 text-xl">
          <h1 className="font-bold uppercase pb-1 text-3xl border-b-[10px] border-black/20 border-double">
            pet projects
          </h1>

          <div className="flex gap-10 mt-2">
            <h1 className="w-[150px] shrink-0 ">
              Oct 2021 - Nov 2021
            </h1>
            <div>
              <div>
                <b>Blog Website</b> <br />
                <hr className="mt-1 mb-1" />
                <b>Technology</b> <br /> • HTML, CSS, Javascript{" "}
                <hr className="mt-1 mb-1" /> <b>Fetures</b>: Add,
                edit, delete posts using API
              </div>

              <div className="flex items-start justify-start">
                <a
                  target="_blank"
                  className="  bg-gradient-to-r from-pink-500 to-rose-500 button-cv-page"
                  href={"https://js-ui-tawny.vercel.app/"}
                  rel="noreferrer"
                >
                  Product
                </a>

                <a
                  target="_blank"
                  className="bg-gradient-to-r from-rose-400 to-red-500 button-cv-page ml-2"
                  href={"https://github.com/hSangg/JsUI"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4 " />

          <div className="flex gap-10 ">
            <h1 className="w-[150px] shrink-0 ">
              15 Mar 2023 - 1 Jul 2023{" "}
            </h1>
            <div>
              <div>
                <b>Java Application </b> <br />
                Fast Food Restaurant Management{" "}
                <hr className="mt-1 mb-1" />
                <b>Technology</b> <br /> • Draw use-case diagram,
                class diagram, activity diagram, sequence diagram,
                state diagram using StarULM <br />• Javafx using Scene
                Builder
                <br />• Oracle Database <br />• Website: Nextjs +
                Tailwindcss <hr className="mt-1 mb-1" />{" "}
                <b>Fetures</b>: Order screen, employee management,
                order management, supiler management, ingredient
                management, menu management, report screen, inspection
                of food processing materials in the warehouse.
              </div>

              <div className="flex items-start justify-start flex-wrap gap-2 mt-2">
                <a
                  target="_blank"
                  className="  bg-gradient-to-r from-pink-500 to-rose-500 button-cv-page"
                  href={"https://itro-java-project.vercel.app/"}
                  rel="noreferrer"
                >
                  Introduction
                </a>

                <a
                  target="_blank"
                  className="bg-gradient-to-r from-rose-400 to-red-500 button-cv-page"
                  href={"https://github.com/hSangg/fast_food"}
                  rel="noreferrer"
                >
                  Github
                </a>

                <a
                  target="_blank"
                  className="bg-gradient-to-r from-red-500 to-orange-500 button-cv-page"
                  href={"https://youtu.be/dpXeXn4EE3o"}
                  rel="noreferrer"
                >
                  Product Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-5 text-xl">
          <h1 className="font-bold uppercase pb-1 text-3xl border-b-[10px] border-black/20 border-double">
            Skills
          </h1>

          <div className="gap-10 mt-2 ">
            {skillList.map(({ index, skills }) => (
              <div key={index} className=" flex mb-1 items-center">
                <div className="min-w-[120px] font-semibold italic capitalize">
                  {index}:
                </div>
                <div className="capitalize">{skills.join(", ")}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;

Index.getLayout = BasicLayout;
