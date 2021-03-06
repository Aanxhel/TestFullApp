package com.bolsadeideas.spring.app.backend.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bolsadeideas.spring.app.backend.api.models.entity.CustumerEntity;
import com.bolsadeideas.spring.app.backend.api.models.services.ICustumerService;



@CrossOrigin(origins= {"http://localhost:4200/"})
@RestController
@RequestMapping("/api")
public class CustumerRestController {
	
	@Autowired
	private ICustumerService custumerService;
	
	@GetMapping("/custumer")
	public List<CustumerEntity> index(){
		return custumerService.findAll();
		
		
	}

}
