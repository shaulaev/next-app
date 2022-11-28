import cl from "../assets/styles/users.module.css"
import {useEffect} from "react";
import Link from "next/link"
import MainContainer from "../components/MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/userSlice";
import Loading from "../UI/Loading/Loading";

const Users = () => {

    const dispatch = useDispatch()
    const usersArr = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <MainContainer>
            {usersArr.pending ?
                <Loading/>
            :
                <ul>
                    {usersArr.users.map(item => {
                        return <li key={item.id}> <Link href={"/users/" + item.id} className={cl.user} key={item.id}>{item.name}</Link></li>
                    })}
                </ul>
            }

        </MainContainer>
    );
};

// export async function getStaticProps(context) {
//
//
//
//     return {
//         props: {usersArr}, // will be passed to the page component as props
//     }
// }


export default Users;