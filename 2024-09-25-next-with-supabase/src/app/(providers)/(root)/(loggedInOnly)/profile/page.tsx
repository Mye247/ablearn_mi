"use client";

import authAPI from "@/api/authAPI";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function ProfilePage() {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: authAPI.getMyProfile,
  });

  // useEffect(() => {
  //   authAPI.getMyProfile().then((profile) => console.log(profile));
  // }, []);

  if (!profile)
    return (
      <div>
        로그인을 해 주세요 (또는 프로필 정보를 불러오는 데에 실패했습니다)
      </div>
    );

  const avatarUrl = profile.identities?.[0]["identity_data"]?.["avatar_url"];

  return (
    <div>
      <img src={avatarUrl} alt="" />
    </div>
  );
}

export default ProfilePage;
