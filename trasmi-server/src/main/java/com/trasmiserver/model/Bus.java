package com.trasmiserver.model;

import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Bus
 */
@Entity
public class Bus {
    @Id 
    @GeneratedValue
    Long id;
	
	private String placa;
	private String modelo;
	
	/*
    @ManyToOne  
	 private Ruta employer;*/
	
	/**
	 * 
	 * @return placa
	 */
	public String getPlaca() {
		return placa;
	}
	
	/**
	 * 
	 * @return modelo
	 */
	public String getModelo() {
		return modelo;
	}
	
	
	/**
	 * 
	 * @param placa
	 */
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	
	/**
	 * 
	 * @param modelo
	 */
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	


    
}