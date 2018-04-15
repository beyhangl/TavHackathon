package com.votech.tav.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.votech.tav.model.TavPassenger;
import com.votech.tav.repository.TavPassengerRepository;

@RestController
public class DataTransfer {
	
	@Autowired
	TavPassengerRepository tRepository;

	@RequestMapping("/lastPassengers")
	public List<TavPassenger> lastPassengers(){
	 
		List<TavPassenger> passengerList = tRepository.findByLast5Second();
		if (passengerList == null) {
			passengerList = new ArrayList<>();
		}
		
		return passengerList;
	}

}
