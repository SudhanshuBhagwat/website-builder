import { FiLayers, FiPlus } from "react-icons/fi";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export const NAV_ITEMS = [
  {
    slug: "elements",
    icon: <FiPlus className="w-6 h-6" />,
  },
  {
    slug: "layers",
    icon: <FiLayers className="w-6 h-6" />,
  },
];

const Nav = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPanel = searchParams.get("panel");

  function _navigate(panel: string) {
    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        panel,
      })}`,
    });
  }

  return (
    <nav className="w-14 py-4 bg-slate-200 h-full flex flex-col items-center">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.slug}
          onClick={() => _navigate(item.slug)}
          className={`w-full py-3 flex justify-center items-center ${
            selectedPanel === item.slug ? "bg-white" : ""
          }`}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
