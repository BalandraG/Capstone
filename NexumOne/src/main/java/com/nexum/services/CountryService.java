//package com.nexum.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.nexum.entity.Country;
//import com.nexum.repo.CountryRepo;
//
//@Service
//public class CountryService {
//
//	
//	@Autowired
//	CountryRepo countryRepo;
//	
//	//Creates and updates
//	public Country saveCountry(Country country) {
//		return countryRepo.save(country);
//	}
//	
//	//Reads
//	public Country findCountryByCountryName(String CountryName) {
//		
//		return countryRepo.findByCountryName(CountryName).get();
//	}
//	
//	//Delete
//	public void deleteCountry(String CountryName) {
//		
//		countryRepo.deleteByCountryName(CountryName);
//	}
//	
//}
