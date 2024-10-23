import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../store/slices/userSlice';
import { getUserData } from '../api/requests';

const useFetchUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await getUserData();
        const {
          avatar_url = "",
          first_name = "Unknown",
          username = "Anonymous",
          current_storage = 0,
          max_storage = 0,
          percent_error = 0,
          balance = 0,
          income = 0,
        } = data || {};

        dispatch(
          updateUserData({
            avatar: avatar_url,
            name: first_name,
            username: `@${username}`,
            balance: balance,
            income: parseFloat(income).toFixed(2),
            memoryUse: current_storage,
            memoryAll: max_storage,
            errorPercent: percent_error,
          })
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [dispatch]);
};

export default useFetchUserData;