package com.trasmiserver.model;

import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Usuario
 */
@Entity
public class Usuario {
    @Id 
    @GeneratedValue
    Long id;
	
	private String nombre;
	private String userName;
	private String password;

    //@ManyToOne // 
	//private Company employer;
	
	/**
	 * 
	 * @return nombre
	 */
	public String getNombre() {
		return nombre;
	}
	
	/**
	 * 
	 * @return userName
	 */
	public String getUserName() {
		return userName;
	}
	
	/**
	 * 
	 * @return password
	 */
	public String getPassword() {
		return password;
	}
	
	/**
	 * 
	 * @param nombre
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	/**
	 * 
	 * @param userName
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	/**
	 * 
	 * @param password
	 */
	public void setPassword(String password) {
		this.password = password;
    }
   


    
}