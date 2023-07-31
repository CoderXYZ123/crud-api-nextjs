type Params = {
  params: {
    userId: string
  }
}

const UserDetails = ({params: {userId}}: Params) => {
  return (
    <div>
      Hello
    </div>
  )
}

export default UserDetails
