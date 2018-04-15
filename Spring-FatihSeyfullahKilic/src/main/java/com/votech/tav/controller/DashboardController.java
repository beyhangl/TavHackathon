package com.votech.tav.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.votech.tav.model.TavPassenger;
import com.votech.tav.repository.TavPassengerRepository;
 
 

@Controller
public class DashboardController {
	
	@Autowired
	TavPassengerRepository tRepository;
 	
	@RequestMapping("/admin/dashboard")
	String dashboard(Model model)
	{
				
		List<TavPassenger> passengerList = tRepository.findByLast5Second();
		if (passengerList == null) {
			passengerList = new ArrayList<>();
		}
		
		model.addAttribute("userList", passengerList);
		
		return "dashboard.jsp";
	}
	
	
	
}
