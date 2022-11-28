import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {


    const {query} = useRouter()

    return (
        <MainContainer>
            Users ID: {query.id},
            Users Name: {user.name}
        </MainContainer>
    )
}

export async function getServerSideProps(context) {
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await data.json()

    return {
        props: {user}
    }
}