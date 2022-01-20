package com.bolsadeideas.spring.app.backend.api.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.bolsadeideas.spring.app.backend.api.models.entity.CustumerEntity;

public interface ICustumerDao extends CrudRepository<CustumerEntity,Long> {

}
