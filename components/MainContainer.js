import Link from "next/link";

const MainContainer = ({children}) => {
    return (
        <>
            <header className="header">
                <Link href="/">
                    Главная
                </Link>
                <Link href="/users">
                    Пользователи
                </Link>
            </header>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;