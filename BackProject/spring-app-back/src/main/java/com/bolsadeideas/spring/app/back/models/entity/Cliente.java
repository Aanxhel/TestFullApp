/*
 * en la clase entity entra a la DB
 * 
 * */

package com.bolsadeideas.spring.app.back.models.entity;

import java.io.Serializable;
import java.util.Date;

public class Cliente implements Serializable {

	private Long id;
	private String nombre;
	private String apellidoPat;
	private Date createAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidoPat() {
		return apellidoPat;
	}

	public void setApellidoPat(String apellidoPat) {
		this.apellidoPat = apellidoPat;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

}
