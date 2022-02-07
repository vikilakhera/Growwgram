import { useSelector } from 'react-redux';
import UserInfoLoader from '../../components/Loader/userInfoLoader';
import { RootState } from '../../utils/types';

function UserInfo() {
  const { userData: userData } = useSelector((state: RootState) => state.profilePage)
  const { data, hasError, isLoading } = userData;

  if(isLoading) {
    return <UserInfoLoader />
  }

  return (
    <div className='ui201Container'>
      <div className='ui201ImageWrapper'>
        <img className="ui201UserImage" src={data?.profile_image?.large} />
      </div>
      <div className='ui201UserInfo'>
        <div className='ui201Username'> {data.username} </div>
        <div className='ui201UserData'>
          <div>
            <strong> {data.total_photos} </strong> Posts
          </div>
          <div>
            <strong> {data.followers_count} </strong> Followers
          </div>
          <div>
            <strong> {data.following_count} </strong> Following
          </div>
        </div>
        <div className='ui201UserFullName'> {data.name} </div>
      </div>
    </div>
  );
}

export default UserInfo;