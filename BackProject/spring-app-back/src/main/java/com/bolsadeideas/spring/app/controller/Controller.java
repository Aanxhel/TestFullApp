package com.bolsadeideas.spring.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	@RequestMapping("/home")
	String home() {
		return "Hola Mundo";
	}

	
}
