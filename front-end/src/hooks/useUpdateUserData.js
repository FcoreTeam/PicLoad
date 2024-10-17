import { useDispatch } from 'react-redux';
import { updateUserData } from '../store/slices/userSlice';

const useUpdateUserData = ({ avatar_url,
  first_name,
  username,
  current_storage,
  max_storage,
  balance,
  income,
  is_premium, }) => {
  const dispatch = useDispatch()
  dispatch(
    updateUserData({
      avatar: avatar_url,
      name: first_name,
      username,
      memoryUse: current_storage,
      memoryAll: max_storage,
      balance,
      income,
      isPremium: is_premium,
    })
  );
}

export default useUpdateUserData