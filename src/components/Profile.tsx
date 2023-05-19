function Profile() {
  return (
    <>
      <div className="profile-wrap">
        <div className="profile">
          <div className="profile-image">img</div>
          <div className="profile-info">
            <div className="profile-name">
              <h3>name</h3>
              <button>팔로잉</button>
              <button>▽</button>
            </div>
            <div className="profile-board">
              <p>
                게시물 <span>1,551</span>
              </p>
              <p>
                팔로워 <span>63.2천</span>
              </p>
              <p>
                팔로우 <span>182</span>
              </p>
            </div>
            <div className="profile-etc">
              <p>이름</p>
              <p>hash tag</p>
              <p>description</p>
              <p>icon</p>
              <p>test link</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
