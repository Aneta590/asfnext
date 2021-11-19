// import { useRouter } from 'next/router'

// we use handler function for api and api dynamic files
export default function handler(req, res) {
  res.status(200).json("idpage-ROOMS");
}
//to be able to use instead of id a number of the room(which might be called a post)
// const Room = () => {
//   const router = useRouter()
//   const { id } = router.query

//   return <p>Room: {id}</p>
// }
// export default Room;