import Link from "next/link";
import getData from "../../../services/getData";

const SSG =async () => {
    const data=getData();
    const users=await data;
  return (
    <>
      <h1>Static Side Generation</h1>
      {
        users && users.map((item,index)=>(
            <h3 key={index}>
                <Link href={`/ssg/${item.id}`}>{item.username}</Link>
            </h3>
        ))
      }
    </>
  )
}

export default SSG
