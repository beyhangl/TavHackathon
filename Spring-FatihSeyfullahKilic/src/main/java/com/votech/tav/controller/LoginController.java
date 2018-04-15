package com.votech.tav.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
	
	@RequestMapping("/")
	public ModelAndView index(){
		
		return new ModelAndView("redirect:/admin/dashboard");
	}
	
}
