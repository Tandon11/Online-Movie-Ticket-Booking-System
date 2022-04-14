package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("from User where email=?1")
	public User findByEmailId(String Email);

	@Query("from User where email=?1 and password =?2")
	public User findByEmailIdandPassword(String Email,String Password);

	@Query(nativeQuery = true, value = "SELECT u.email FROM user u WHERE u.email = :email")
	String findByUsername(String email);
}
