package com.bolsadeideas.spring.app.backend.api.models.services;

import java.util.List;

import com.bolsadeideas.spring.app.backend.api.models.entity.CustumerEntity;

public interface ICustumerService {
	
	public List<CustumerEntity> findAll();

}
