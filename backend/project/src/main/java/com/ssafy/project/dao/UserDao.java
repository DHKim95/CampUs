package com.ssafy.project.dao;

import com.ssafy.project.dto.UserDto;
import com.ssafy.project.dto.UserRateDto;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
    // 회원 가입
    public int userInsert(UserDto userDto);

    // userEmail에 해당하는 user 정보
    public UserDto userSelect(String userEmail);

    // user정보 업데이트
    public int userUpdate(UserDto userDto);

    // userEmail에 해당하는 user 삭제
    public int userDelete(String userEmail);

    // user 평점
    public int userRate(UserRateDto userRateDto);
}
