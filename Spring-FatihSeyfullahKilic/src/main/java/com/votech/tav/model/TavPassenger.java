package com.votech.tav.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tav_passenger2")
public class TavPassenger {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Id")
    private int id;
    private String name;
    private String tcno;
    private String gate;
    private String flightno;
    
    
    private String cam_coordinate;
    private String cam_description;
    private String status;
    private Date last_seen_date;
        
    
 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public TavPassenger() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getGate() {
		return gate;
	}
	public void setGate(String gate) {
		this.gate = gate;
	}
 
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTcno() {
		return tcno;
	}
	public void setTcno(String tcno) {
		this.tcno = tcno;
	}
	public String getFlightno() {
		return flightno;
	}
	public void setFlightno(String flightno) {
		this.flightno = flightno;
	}
	public String getCam_coordinate() {
		return cam_coordinate;
	}
	public void setCam_coordinate(String cam_coordinate) {
		this.cam_coordinate = cam_coordinate;
	}
	public String getCam_description() {
		return cam_description;
	}
	public void setCam_description(String cam_description) {
		this.cam_description = cam_description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getLast_seen_date() {
		return last_seen_date;
	}
	public void setLast_seen_date(Date last_seen_date) {
		this.last_seen_date = last_seen_date;
	}
    
    

}
