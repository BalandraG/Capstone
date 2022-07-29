package com.nexum.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nexum.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

	@Query(value = "select * from user where email =?1 and password = ?2", nativeQuery = true)
	public User findByEmailAndPassword(String email, String password);
	
	@Query(value = "select * from user where email =?1", nativeQuery = true)
	public User findByEmail(String email);
}
