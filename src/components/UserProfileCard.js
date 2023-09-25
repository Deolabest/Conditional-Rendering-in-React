import Avatar from './Avatar';

function UserProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Barack Obama</div>
      <div>Barack Obama was the first black president of the USA</div>
    </div>
  );
}

export default UserProfileCard;
