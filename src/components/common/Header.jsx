import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemberStore } from "../../store/store";
import { pathnames } from "../../contents/pathnames";

const Header = () => {
    const { memberInfo, clearMember } = useMemberStore((state) => ({
        memberInfo: state.memberInfo,
        clearMember: state.clearMember,
    }));

    const navigater = useNavigate();

    const { pathname } = useLocation();

    const onHandleClickSignOut = () => {
        clearMember();
        navigater(pathnames.sign);
    };

    return (
        <div className="flex justify-center items-center gap-5 p-4 shadow-xl shadow-slate-950 top-0">
            <h1 className="text-white">Toy Project</h1>
            <Link
                to={pathnames.home}
                className={`text-sm ${
                    pathname === pathnames.home
                        ? "text-teal-500"
                        : "text-teal-700"
                } hover:text-teal-500 transition`}
            >
                Home
            </Link>
            <Link
                to={pathnames.list}
                className={`text-sm ${
                    pathname === pathnames.list
                        ? "text-teal-500"
                        : "text-teal-700"
                } hover:text-teal-500 transition`}
            >
                List
            </Link>
            <Link
                to={pathnames.map}
                className={`text-sm ${
                    pathname === pathnames.map
                        ? "text-teal-500"
                        : "text-teal-700"
                } hover:text-teal-500 transition`}
            >
                Map
            </Link>
            {memberInfo.memberName ? (
                <button
                    className="text-sm text-teal-500 font-bold"
                    type="text"
                    onClick={onHandleClickSignOut}
                >
                    {memberInfo.memberName}
                </button>
            ) : (
                <Link
                    to={pathnames.sign}
                    className={`text-sm ${
                        pathname === pathnames.sign
                            ? "text-teal-500"
                            : "text-teal-700"
                    } hover:text-teal-500 transition`}
                >
                    Sign
                </Link>
            )}
        </div>
    );
};

export default Header;
