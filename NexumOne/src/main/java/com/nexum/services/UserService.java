package com.nexum.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexum.entity.User;
import com.nexum.repo.UserRepo;

@Service
public class UserService {

	
	@Autowired
	UserRepo userRepo;
	
	//Creates and updates
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	//Reads
	public User findUserById(Integer id) {
		
		return userRepo.findById(id).get();
	}
	
	public User findUserByEmail(String email) {
		
		return userRepo.findByEmail(email);
	}
	
	public User findByEmailAndPassword(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}
	
	//Delete
	public void deleteUser(Integer id) {
		
		userRepo.deleteById(id);
	}
	
}
