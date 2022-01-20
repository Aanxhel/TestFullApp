package com.bolsadeideas.spring.app.backend.api.models.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bolsadeideas.spring.app.backend.api.models.dao.ICustumerDao;
import com.bolsadeideas.spring.app.backend.api.models.entity.CustumerEntity;
import com.bolsadeideas.spring.app.backend.api.models.services.ICustumerService;

@Service
public class CustumerServiceImpl implements ICustumerService {

	@Autowired
	private ICustumerDao custumerDao;

	// se coloca solo lecturia
	@Override
	@Transactional(readOnly = true)
	public List<CustumerEntity> findAll() {
		return (List<CustumerEntity>) custumerDao.findAll();
	}

}
