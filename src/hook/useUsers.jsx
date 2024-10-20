import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
  const {
    isPending,
    //  to call another Api change the user name
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://edusystemserver-1.onrender.com/users");
      return res.json();
    },
  });
  return [users, refetch, isPending];
};
export default useUsers;
