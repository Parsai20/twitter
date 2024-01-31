import { TwitterX } from "../../assets/icons";
import {
  faBell,
  faBookmark,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faHouse,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProfileCardProps = {
  image: String;
  username: String;
  name: String;
};
type Icon = {
  svg: JSX.Element;
  label: String;
};
const ICONS: Icon[] = [
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faHouse} />,
    label: "Home",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faMagnifyingGlass} />,
    label: "Explore",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faBell} />,
    label: "Notification",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faEnvelope} />,
    label: "Explore",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faBookmark} />,
    label: "Bookmarks",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faUsers} />,
    label: "Communities",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faUser} />,
    label: "Profile",
  },
  {
    svg: <FontAwesomeIcon className="w-6 h-6" icon={faEllipsis} />,
    label: "More",
  },
];
const ProfileData = {
  image:
    "https://i.pinimg.com/564x/e8/a8/da/e8a8da0cacc834b88db50c9390d5b2d3.jpg",
  username: "@lakshaykamat",
  name: "Dreadful Dev",
};

const ProfileCard = ({ image, username, name }: ProfileCardProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-full hover:bg-gray-100 ">
      <div className="flex gap-3">
        <img className="w-12 h-12 rounded-full" src={image.toString()} alt="" />
        <div className="flex-col hidden  xl:flex">
          <h1 className="font-bold">{name}</h1>
          <span className="text-sm text-gray-500">{username}</span>
        </div>
      </div>
      <FontAwesomeIcon className="w-4 h-4" icon={faEllipsis} />
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <section className="bg-white xl:pl-10 border py-3 px-3 flex-col justify-between border-r h-screen hidden sm:flex w-[6rem] xl:w-[25%] overflow-y-auto scroll-m-2">
      <div className="flex flex-col items-center xl:px-7 xl:items-start">
        <div className="px-3 my-3">
          <TwitterX width={"w-8"} height={"h-8"} />
        </div>
        <div className="flex flex-col items-start gap-1">
          {ICONS.map((icon, i) => {
            return (
              <div
                key={i}
                className="flex items-start justify-start gap-3 px-5 py-3 rounded-full hover:bg-slate-100"
              >
                {icon.svg}
                <span className="hidden xl:block">{icon.label}</span>
              </div>
            );
          })}
        </div>
        <button className="hidden px-3 py-3 mx-2 my-2 font-semibold text-white bg-blue-400  rounded-3xl drop-shadow-xl xl:visible">
          Post
        </button>
        <button className="visible px-3 py-3 m-2 font-semibold text-white bg-blue-400 rounded-full  drop-shadow-xl xl:hidden">
          <FontAwesomeIcon className="w-6 h-6" icon={faBell} />
        </button>
      </div>
      <ProfileCard
        image={ProfileData.image}
        username={ProfileData.username}
        name={ProfileCard.name}
      />
    </section>
  );
};

export default LeftSidebar;
