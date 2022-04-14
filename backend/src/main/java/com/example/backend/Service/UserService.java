package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		User user1 = new User(
                user.getEmail(),user.getPassword());
		return userRepository.save(user1);
	}
	public User fetchUserbyEmail(String email) {
		return userRepository.findByEmailId(email);
	}
	public User fetchUserbyEmailandPassword(String email,String password) {
		return userRepository.findByEmailIdandPassword(email,password);
	}

	public String checkUserUsername(String email) {
		return userRepository.findByUsername(email);
	}
}
