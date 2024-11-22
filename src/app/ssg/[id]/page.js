import getData from "../../../../services/getData"

const user = async (props) => {
    const data=getData()
    const users=await data
    const userId=props.params.id
    const userInfo=users[userId-1]
    
  return (
    <>
      <h2>user Info</h2>
      <h3>ID:{userInfo.id}</h3>
      <h3>UserName:{userInfo.username}</h3>
      <h3>UserEmail:{userInfo.email}</h3>
    </>
  )
}

export default user


export const generateStaticParams=async ()=>{
    const data=getData();
    const users=await data;
    return users.map(user=>({
        id:user.id.toString()
    }))
}
