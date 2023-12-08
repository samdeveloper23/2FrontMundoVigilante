import defaultAvatar from '../../assets/images/defaultAvatar.jpg';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, username }) => {
    return (
        <div className='avatar-image'>
            <img
                src={avatar ? `http://eva00.3utilities.com/api/${avatar}` : defaultAvatar}
                alt={`${username} avatar`}
            />
        </div>
    );
};

Avatar.propTypes = {
    avatar: PropTypes.any,
    username: PropTypes.string,
};

export default Avatar;
