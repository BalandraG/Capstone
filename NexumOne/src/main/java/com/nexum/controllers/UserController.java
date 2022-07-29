package com.nexum.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.nexum.entity.User;
import com.nexum.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Component
@RequestMapping(value="/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping(value="/signUp", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> signUpUser(@RequestBody User user) {
		try {
			User savedUser = userService.saveUser(user);
			return new ResponseEntity<Object>(savedUser, HttpStatus.CREATED);
		} catch(Exception e) {
			return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
		}
}
	@RequestMapping(value="/findUserById/{id}", method=RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Object> findById(@PathVariable Integer id) {
		try {
			User foundUser = userService.findUserById(id);
			return new ResponseEntity<Object>(foundUser, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
		}
}
	@RequestMapping(value="/findUserByEmail/{email}", method=RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Object> findByEmail(@PathVariable String email) {
		try {
			User foundUser = userService.findUserByEmail(email);
			return new ResponseEntity<Object>(foundUser, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
		}
}
	@RequestMapping(value="/findByEmailAndPassword", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> findByEmailAndPassword(@RequestBody User user) {
		try {
			User foundUser = userService.findByEmailAndPassword(user.getEmail(), user.getPassword());
			return new ResponseEntity<Object>(foundUser, HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<Object>(e, HttpStatus.BAD_REQUEST);
		}
}
}