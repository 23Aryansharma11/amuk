import { useUserStore } from "@/store/useStore"

const Dashboard = () => {
  const {user} = useUserStore()
  console.log(user)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard