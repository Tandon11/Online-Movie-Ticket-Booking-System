package com.example.backend.Controller;

import com.example.backend.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;

@RestController
@CrossOrigin("*")
@EnableAutoConfiguration
@RequestMapping(value="/api")
public class RegistrationController {
	
	@Autowired
	private UserService userService;

	@RequestMapping("/registerUser")
	public User register(@RequestBody User user) throws Exception {
		String tempEmail=user.getEmail();
		if(tempEmail != null && !"".equals(tempEmail)) {
			User UserObj = userService.fetchUserbyEmail(tempEmail);
			if(UserObj != null)
				throw new Exception("email already exist");
		}
		User userObj = null;
		userObj = userService.saveUser(user);
		return userObj;
		
	}

	@GetMapping("/checkUsername")
	public ResponseEntity<Response> findUsername(@RequestHeader String email) {
		String searchedUsername =  userService.checkUserUsername(email);
		System.out.println("Searched Username: " + searchedUsername);
		return new ResponseEntity<Response>(new Response(searchedUsername), HttpStatus.OK);
	}

	@PostMapping("/login")
	public User LoginUser(@RequestBody User user) throws Exception {
		String email = user.getEmail();
		String password = user.getPassword();
		User userObj = null;

		if(email != null && password != null) {
			userObj = userService.fetchUserbyEmailandPassword(email, password);
		}

		if(userObj == null)
			throw new Exception("Bad Credentials");

		return userObj;
	}

}

